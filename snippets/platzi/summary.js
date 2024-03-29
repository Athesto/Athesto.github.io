function getData(){
    openResumen()
    let output = []
    let courseName = document.querySelector('.CourseRow').textContent
    let questions = document.querySelectorAll('.Question')
    questions.forEach((question)=>{
        output.push({
            ...{courseName},
            number: parseInt(question.querySelector('.Question-count').textContent),
            question: question.querySelector('.Question-item').textContent.trim(),
            answer: question.querySelector('.Question-answer').textContent.trim(),
            isCorrect: !!question.querySelector('.Question-result--correct'),
        })
    })
    return output
};

function data2CSV(data,sepChar='+'){
    let output = []
    let keys = Object.keys(data[0])
    output.push(keys.join(sepChar))
    data.map((item)=>{
        output.push(Object.values(item).join(sepChar))
    })
    return(output.join('\n'))
};

function openResumen(){
    document.querySelector('.ResultsExam-btn-showMore')?.click()
}

function getInfoFromWindow(){
    if (!window.initialProps){
        console.log("missing window.initialProps. please check in the source page")
        exit(1)
    }
    courseName = document.querySelector('.CourseRow').textContent

    data = window.initialProps.questions.map(item=>{
        item = {
            courseName,
            ...item,
            ...item.materialInfo
        }
        item.answer = item.answer.replaceAll('\n', '')
        item.question = item.question.replaceAll('\n', '')
        delete item.materialInfo
        return item
    })
    return data
}

output = {}
output.data = getData()
output.json = JSON.stringify(output.data, null, 2)
output.csv = data2CSV(output.data)
output.isNotCorrect = output.data.filter(x=>!x.isCorrect)

console.log(`
Bienvenido a este snippet the Athesto
Para ver el resumen de los objetos puedes usar los siguientes comandos
console.log(output.data)
console.log(output.json)
console.log(output.csv)
console.log(output.isNotCorrect)

para más informacion visita https://athesto.github.io/sinippets/platzi

`)
