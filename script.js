const number = document.getElementById('number');
const result = document.getElementById('result');
const button = document.getElementById('button');

function buttonEnterHandler(event) {
    const val = number.value;
    if(isNaN(val)) {
        result.value = val + ' is not a number';
    }
    else {
        result.value = new Number(val).toString(2);
    }
}

button.addEventListener('click', buttonEnterHandler);