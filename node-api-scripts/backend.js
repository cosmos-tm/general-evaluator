const fs = require('fs');

var args = process.argv.slice(2);
const name = args[0]

if(name === undefined)
{
    console.log('need a user');
    return;
}

const dir = '../responses/' + name
let files = fs.readdirSync(dir)

const questions = ["Did the speaker accurately convey the point of the speech?", 
"How was the structure of the speech?", 
"How was the speaker's vocal variety?", 
"How were the speaker's hand gestures?", 
"Did the speaker appear nervous?", 
"What are some opportunities for improvement? ", 
"What was the best part about the speech?"];
// console.log(questions);

let jsonResponse = {};
// for(let i=0;i<jsonResponse.length;i++){
//     jsonResponse[i] = [];
// }
jsonResponse[0] = [];
jsonResponse[1] = [];
jsonResponse[2] = [];
jsonResponse[3] = [];
jsonResponse[4] = [];
jsonResponse[5] = [];
jsonResponse[6] = [];
// jsonResponse[0]=[1,2,3];
// jsonResponse[1]=[1,2,3];
// console.log(jsonResponse)

// files=['3.json'];
for(let i=0;i<files.length;i++) {
    // console.log('-----------------------------------------------------------------------')
    const questionMapping = [];
    let fileName = files[i];
    let fileContent = JSON.parse(fs.readFileSync('../responses/' + name + '/' + fileName, 'utf-8'));

    const values = fileContent.values;

    const questionsInThisSheet = values[0];

    // finding question mapping
    for(let i=0;i<questions.length;i++) {
        questionMapping[i] = -1;
        for(let j=0;j<questionsInThisSheet.length;j++) {
            if(questions[i] == questionsInThisSheet[j]) {
                questionMapping[i] = j;
            }
        }
    }

    let challenges = [];
    let bestparts = [];
    for(let i=0;i<questions.length;i++) {
        // console.log('');
        if(i<questions.length-2) {
            const sumArray = [];
            for(let j=1;j<values.length;j++) {
                if(values[j][questionMapping[i]] && values[j][questionMapping[i]].length>0) {
                    if(i < questions.length-2) {
                        sumArray.push(parseInt(values[j][questionMapping[i]]));
                    }
                }
            }

            let sum = 0;
            for(let k=0;k<sumArray.length;k++) {
                sum += sumArray[k];
            }
            const average = sum/sumArray.length || -1;
            jsonResponse[i].push(average)
            // console.log('average == ' + average);
        } else {
            for(let j=1;j<values.length;j++) {
                if(values[j][questionMapping[i]] && values[j][questionMapping[i]].length > 0) {
                    // jsonResponse[i].push(values[j][questionMapping[i]])
                    // console.log(values[j][questionMapping[i]])
                    if(i===5) {
                        challenges.push(values[j][questionMapping[i]]);
                    } else {
                        bestparts.push(values[j][questionMapping[i]]);
                    }
                }
            }
        }
    }
    jsonResponse[5].push(challenges);
    jsonResponse[6].push(bestparts);
}

// getting rid of missing data
for(let i =0;i<4;i++) {
    for(let j=0;j<jsonResponse[i].length;j++){
        if(jsonResponse[i][j] === -1) {
            if(j>=1 && jsonResponse[i][j-1] !== -1) {
                jsonResponse[i][j] = jsonResponse[i][j-1];     
            }
        }
    }
}
console.log(jsonResponse);

// Expected responses format
/*
{
 "responses":
  [
   [1, 2, 3],
   [1, 2, 3],
   [1, 2, 3],
   [1, 2, 3],
   [1, 2, 3],
[["abc", "def", "ghi"], ["abc", "def", "ghi"], ["abc", "def", "ghi"]],
[["x", "y", "z"], ["x", "y", "z"], ["x", "y", "z"]]
  ]
}
*/