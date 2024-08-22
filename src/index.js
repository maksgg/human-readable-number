module.exports = function toReadable (number) {
    const first = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
        ]
      const second = [
       '', '', 'twenty', 'third', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',
      ]
      if(number < 20) {
        return first[number];
      } 
}
