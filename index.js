

const form = document.getElementById("form");
const input1 = document.getElementById("input1");
const running  = true;
let guess = 0;
const button = document.getElementById("button");
let random = Math.floor((Math.random() * 100) + 1);

    button.onclick = function() {
        let value = Number(input1.value);
        if (value <= 0 || value >= 101 || isNaN(value)) {
            window.alert("Enter a VALID NUMBER BETWEEN 1-100");
            form.reset();
        }
        else if (value > random) {
            window.alert("TOO HIGH, TRY AGAIN :(");
            form.reset();
            guess += 1;
        }
        else if (value < random) {
            window.alert("TOO LOW, TRY AGAIN :(");
            form.reset();
            guess += 1;
        }
        else {
            window.alert(`CORRECT ANSWER ${value} guess ${guess} attems !!`);
        }
    }