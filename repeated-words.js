function getRepeatedWords(str) {
    var count = {};
    var words = str.split(' ');
    for (let i of words) {
        if (count[i]) {
            count[i]++;
        } else {
            count[i] = 1;
        }
    }
    return count;
};

var text = document.getElementById('texto-entrada').innerHTML;
console.log(getRepeatedWords(text))
