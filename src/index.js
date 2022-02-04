module.exports = function toReadable (number) {
    const oneNine = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tenTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const digitTens = ['','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) { return 'zero'};
    if (number < 10) {
        return oneNine[number];
    }
    if ((number >=10 ) && (number < 20) ) {
        return tenTwenty[number-10];
    }
    if (number >= 20 && number < 100) {
        if (number % 10 === 0 ) { 
            return digitTens[Math.trunc(number / 10)]
        }
        return digitTens[Math.trunc(number / 10)] + ' ' + oneNine[number % 10];
    }

    if (number % 100 === 0  ) {return oneNine[Math.trunc(number / 100)] + ' hundred'}
    if (number === 999) { return 'nine hundred ninety nine' }

    if (number > 100 && number < 999) {

        const hund = Math.trunc(number / 100);
        const des = Math.trunc((number - hund*100)/10);
        const ed = number % 10;

        if (des === 1 ) { return oneNine[hund] + ' hundred ' + tenTwenty[ed]}

        if (des === 0 ) { return oneNine[hund] + ' hundred ' + oneNine[ed]}

        if (ed === 0) { return oneNine[hund] + ' hundred ' + digitTens[des]}

        if ((des === 0) && (ed === 0) ) { return oneNine[hund] + ' hundred'} else {

        return oneNine[hund] + ' hundred ' + digitTens[des] + ' ' + oneNine[ed]; }
    }

}
