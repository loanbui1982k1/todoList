var oldRes = "";
var screen = "";
var complete = false;
function getOldResult() {
    return document.getElementById("exp").innerText;
}

function DEL() {
    if (screen != oldRes) {  
        var oldScreen = document.getElementById("exp").innerText.toString();
        if (oldScreen.charAt(oldScreen.length - 1) == "s") {
            if (isNaN(oldScreen.charAt(oldScreen.length - 4))) {
                var temp = screen.substr(0, screen.toString().length - oldRes.toString().length);
                screen = temp;
            } else {
                var temp = screen.substr(0, screen.toString().length - oldRes.toString().length - 1);
                screen = temp;
            }
            document.getElementById("exp").innerText = oldScreen.substr(0, oldScreen.length - 3);
        } else {
            screen = screen.substr(0, screen.length - 1);
            document.getElementById("exp").innerText = oldScreen.substr(0, oldScreen.length - 1);
        }
    }
}
var numbers = document.getElementsByClassName("number");
for (var i = 0; i< numbers.length; i++) {
    numbers[i].addEventListener('click', function(){
        if (complete) {
            complete = false;
            document.getElementById("res").innerText = "";
            if (this.id != "Ans" && isNaN(Number(this.id))) {
                screen = oldRes;
                document.getElementById("exp").innerText = "Ans";
            } else {
                screen = "";
                document.getElementById("exp").innerText = "";
            }
        }
        if (!isNaN(Number(this.id)) && screen != "") {
            if (screen.toString().length == 1 && screen.toString().charAt(0) == "0") {
                screen = screen.substr(1, screen.length - 1);
                var oldScreen = getOldResult().toString();
                document.getElementById("exp").innerText = oldScreen.substr(0, oldScreen.length - 1);
            }
        }
        if (this.id == "*" || this.id == "/") {
            var result = getOldResult() + this.value;
        } else {
            var result = getOldResult() + this.id;
        }
        if (this.id == "Ans") {
            let temp = screen.toString().substr(screen.length - 1, 1);
            if (screen!= "" && !isNaN(Number(temp))) {
                
                screen += "*";
            }
            screen += oldRes;
        } else {
            screen += this.id;
        }
        document.getElementById("exp").innerText = result;
    })
}

var cals = document.getElementsByClassName("cal");
for (var i = 0; i< cals.length; i++) {
    cals[i].addEventListener('click', function(){
        if (this.id == "DEL") {
            DEL();
        } else if (this.id == "AC") {
            complete = false;
            document.getElementById("exp").innerText = "";
            document.getElementById("res").innerText = "";
            screen = "";
        } else if (this.id == "=") {
            try{
                oldRes = eval(screen);
                if (Number(oldRes) == Infinity || isNaN(Number(oldRes))) throw "Error";
                document.getElementById("res").innerText = oldRes;
                screen = oldRes;
                complete = true;
            } catch(ex) {
                swal("Error");
            }
        }
    })
}
