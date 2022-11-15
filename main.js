// criar o botão exluir em cada item da lista
function createCloseButtom() {
    let myNodeList = document.getElementsByTagName("LI");
    let count;
    for (count = 0; count < myNodeList.length; count++) {
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close"
        span.appendChild(txt)
        myNodeList[count].appendChild(span);
    }
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
    createCloseButtom()
    hideListItem();
    addChecked();
}
