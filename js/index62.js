const monthNumber = 11;
const monthName = null;
const monthDays = null;
let message = null;

switch (monthNumber) {
    case 1:{
        let monthName = 'January';
        let monthDays = 31;
        message = `${monthName} is the selected month and has ${monthDays} days.`;
        break;
    }
    case 2:{
        let monthName = 'February';
        let monthDays = '28 days in a common year and 29 days in leap years';
        message = `${monthName} is the selected month and has ${monthDays} days.`;
        break;
    }
    case 3:{
        let monthName = 'March';
        let monthDays = 31;
        message = `${monthName} is the selected month and has ${monthDays} days.`;
        break;
    }
    case 4:{
        let monthName = 'April';
        let monthDays = 30;
        message = `${monthName} is the selected month and has ${monthDays} days.`;
        break;
    }
    case 5:{
        let monthName = 'May';
        let monthDays = 31;
        message = `${monthName} is the selected month and has ${monthDays} days.`;
        break;
    }
    case 6:{
        let monthName = 'June';
        let monthDays = 30;
        message = `${monthName} is the selected month and has ${monthDays} days.`;
        break;
    }
    case 7:{
        let monthName = 'July';
        let monthDays = 31;
        message = `${monthName} is the selected month and has ${monthDays} days.`;
        break;
    }
    case 8:{
        let monthName = 'August';
        let monthDays = 31;
        message = `${monthName} is the selected month and has ${monthDays} days.`;
        break;
    }
    case 9:{
        let monthName = 'September';
        let monthDays = 30;
        message = `${monthName} is the selected month and has ${monthDays} days.`;
        break;
    }
    case 10:{
        let monthName = 'October';
        let monthDays = 31;
        message = `${monthName} is the selected month and has ${monthDays} days.`;
        break;
    }
    case 11:{
        let monthName = 'November';
        let monthDays = 30;
        message = `${monthName} is the selected month and has ${monthDays} days.`;
        break;
    }
    case 12:{
        let monthName = 'December';
        let monthDays = 31;
        message = `${monthName} is the selected month and has ${monthDays} days.`;
        break;
    }
    default:{
        message = 'Error';
        break;
    }
}

console.log(message);