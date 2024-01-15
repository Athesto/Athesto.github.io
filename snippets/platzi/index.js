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
Welcome this Athesto's snippet.

This snippet get the information of the summary and create an object ot it

If you want to see the summary of the responses you can write
console.log(output.data)
console.log(output.json)
console.log(output.csv)



this code has 2 main function and a preset Variable


getData - returns an Array of objects with the next response
- getData(): {
        courseName: string
        question: string
        answer: string
        isCorrect: boolean
    }


data2CSV - converts an Array of data into a string
- data2CSV(data[]): string


output - is the variable with the next props
- output: 
    {
        data: Array of responses
        json: Stringify version of Array
        csv: CSV string version of Array
    }




If you have any doubt or any error please create a ticket in the url

athesto.github.io/repo

Be save
`)
