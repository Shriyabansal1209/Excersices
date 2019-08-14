const playerName = 'Patrik Laine is lame';
const teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
const message = 'Winnipeg is the best Canadian city, Go Winnipeg';
const result1 = playerName.slice(0, -8).toUpperCase() + playerName.slice(12,15);
const result2 = teams.charAt(46).toUpperCase() + teams.slice(47, 50);
const result3 = message.slice(12, 20);
const result4 = message.slice(34, 38);


const template = `${result1} ${result3} ${result2} player${result4} ${result2}!!`;
//PATRIK LAINE is the best Jets player, Go Jets!!                    

console.log(template);