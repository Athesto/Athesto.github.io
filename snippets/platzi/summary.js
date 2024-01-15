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

function data2CSV(data){
    let output = []
    let keys = Object.keys(data[0])
    output.push(keys.join(';'))
    data.map((item)=>{
        output.push(Object.values(item).join(';'))
    })
    return(output)
};

function openResumen(){
    document.querySelector('.ResultsExam-btn-showMore')?.click()
}

output = {}
output.data = getData()
output.json = JSON.stringify(output.data, null, 2)
output.csv = data2CSV(output.data).join('\n')

console.log(`
Bienvenido a este snippet the Athesto
Para ver el resumen de los objetos puedes usar los siguientes comandos
console.log(output.data)
console.log(output.json)
console.log(output.csv)

para más informacion visita https://athesto.github.io/sinippets/platzi

`)
