var list = document.querySelector(".list");
var input = document.getElementById("input");
var li = document.querySelectorAll(".list li");
document.getElementById("numbers").innerText = li.length;
input.onkeyup = ()=>{
    if (input.value.trim() != 0) {
        document.querySelector(".inputField button").classList.add("active");
    } else {
        document.querySelector(".inputField button").classList.remove("active");
    }
}
function dele(index) {
    var li = document.querySelectorAll(".list li");
    console.log(li);
    list.removeChild(li[index]);
    document.getElementById("numbers").innerText = li.length - 1;
}

function addList() {
    var input = document.getElementById("input").value;
    var li = document.querySelectorAll(".list li");
    if (input.trim() != 0) {
        document.getElementById("input").value = "";
        var add = document.createElement("li");
        var index = li.length;
        add.innerHTML = `${input} <button class = "delete" id = ${index} onclick="dele(${index})";><i class="fas fa-trash-alt"></i></button>`;
        list.appendChild(add);
        var del = document.querySelectorAll(".delete");
        document.getElementById("numbers").innerText = li.length + 1;
        console.log(list);
    }
}

function deleAll() {
    list.innerHTML = "";
    document.getElementById("numbers").innerText = "0";
}
