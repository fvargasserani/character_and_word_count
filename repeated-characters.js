function getRepeatedCharacters(str) {
    var count = {};
    for (var i = 0; i < str.length; i++) {
        var character = str.charAt(i);
        if (count[character]) {
            count[character]++;
        } else {
            count[character] = 1;
        }
    }
    return count;
};

var text = document.getElementById('texto-entrada').innerHTML;
console.log(getRepeatedCharacters(text))