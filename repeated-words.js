function getRepeatedWords(str) {
    var count = {};
    for (var i = 0; i < str.length; i++) {
        if (count[str]) {
            count[str]++;
        } else {
            count[str] = 1;
        }
    }
    return count;
};

var text = document.getElementById('texto-entrada').innerHTML;
console.log(getRepeatedWords(text))