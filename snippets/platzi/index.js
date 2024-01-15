function getData(){
    openResumen()
    let output = []
    let courseName = $x('//div[@class="CourseRow"]')[0].textContent
    let questions = $x('//div[@class="Question"]')
    questions.map((question)=>{
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
output.str = JSON.stringify(output.data, null, 2)
output.csv = data2CSV(output.data).join('\n')
output.data
