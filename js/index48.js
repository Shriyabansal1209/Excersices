const message = "3.14 it's a great number but 42 it's the answer to life.";
const pi = parseFloat(message);
const answerToLife = parseFloat(message.slice(29, 31));
const result = pi + answerToLife;
const output = result.toString();
console.log('Output:', output);