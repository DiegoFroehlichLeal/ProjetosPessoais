
// criar o botão exluir em cada item da lista
function createCloseAndTimeStamp() {
    let myNodeList = document.getElementsByTagName("LI");
    let div = document.createElement("div");
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    let time = document.createTextNode("Criado em " + getTimeNow());
    div.className = "timeStamp"
    span.className = "close"
    div.appendChild(time)
    span.appendChild(txt)
    myNodeList[myNodeList.length - 1].appendChild(span);
    myNodeList[myNodeList.length - 1].appendChild(div);
}

// esconde item quando clicar no x
function hideListItem() {
    let close = document.getElementsByClassName("close")
    let count;
    for (count = 0; count < close.length; count++) {
        close[count].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function addChecked() {
    let list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle('checked');
        }
    }, false);
}

function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("inputText").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Você deve escrever algo");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("inputText").value = "";
    createCloseAndTimeStamp();
    hideListItem();
    addChecked();
}

function getTimeNow() {
    let dateTimeNow = moment().locale('pt-br').format('LLL');
    return dateTimeNow;
}