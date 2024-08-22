module.exports = function toReadable (number) {
    const first = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
        ]
      const second = [
       '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',
      ]
      if(number < 20) {
        return first[number];
      } else if(number < 100) {
        return second[Math.floor(number / 10)] + (number % 10 !== 0 ? ' ' + first[number % 10] : '');
      } else if(number < 1000) {
        return first[Math.floor(number / 100)] + ' hundred' + (number % 100 !== 0 ? ' ' + toReadable(number % 100) : '');
      }
}
