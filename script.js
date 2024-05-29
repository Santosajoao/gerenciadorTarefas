document.addEventListener("DOMContentLoaded", () => {
    let myNodelist = document.getElementsByTagName("li");
    for (let i = 0; i < myNodelist.length; i++) {
        addCloseButton(myNodelist[i]);
        addEditButton(myNodelist[i]);
    }

    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

    let list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
});

function addElemento() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("tarefa").value;
    let categoryValue = document.getElementById("categoria").value;
    inputValue = inputValue.toUpperCase(); // Transformar em maiúsculas

    // Obter a data atual
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    let year = today.getFullYear();
    let currentDate = `${day}/${month}/${year}`;

    // Concatenar data com texto da tarefa
    let fullText = `${currentDate} - ${categoryValue} - ${inputValue}`;
    let t = document.createTextNode(fullText);
    li.appendChild(t);

    if (inputValue === '') {
        alert("Você precisa descrever a tarefa");
    } else {
        document.getElementById("itemLista").appendChild(li);
    }
    document.getElementById("tarefa").value = "";
    
    addCloseButton(li);
    addEditButton(li);

    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function addCloseButton(li) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}

function addEditButton(li) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("✎");
    span.className = "edit";
    span.appendChild(txt);
    li.appendChild(span);
    span.onclick = function () {
        editElemento(this.parentElement);
    }
}

function editElemento(li) {
    let inputValue = prompt("Edite sua tarefa:", li.firstChild.nodeValue.split(" - ")[2]);
    if (inputValue === null || inputValue === "") {
        alert("Você precisa descrever a tarefa");
    } else {
        let categoryValue = li.firstChild.nodeValue.split(" - ")[1];
        let currentDate = li.firstChild.nodeValue.split(" - ")[0];
        li.firstChild.nodeValue = `${currentDate} - ${categoryValue} - ${inputValue.toUpperCase()}`;
    }
}

function limparLista() {
    let list = document.getElementById("itemLista");
    list.innerHTML = '';
}
