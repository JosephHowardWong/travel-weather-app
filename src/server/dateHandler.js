const { formatDistanceStrict } = require('date-fns')

// calculate days away from the current date
const dateHandler = (date) => {

    const dateArr = date.split("-")
    const dateArr1 = dateArr.map(x => parseInt(x))
    dateArr1[1] = dateArr1[1] - 1

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth(); //January is 0!
    let yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }
    today = yyyy+'-'+mm+'-'+dd;
    
    let distance = formatDistanceStrict(new Date(yyyy,mm,dd), new Date(...dateArr1), {unit: 'day'})
    
    today = new Date();
    mm = today.getMonth()+1; //January is 0!
    today = yyyy+'-'+mm+'-'+dd;

    let daysAway = distance.split(" ")[0]
    return {daysAway, today}
}

module.exports = {
    dateHandler
}