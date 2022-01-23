
const stuff = [];
let clicks = 0;

const newEl = () => {
    let newInput = document.getElementById(`userInput`).value;
    if (newInput !== "") {
        clicks++;
        stuff.push(newInput);
        let newPost = document.createElement(`div`);
        newPost.className = 'box';
        newPost.innerHTML = `<h2 onclick='taskDone(this)' >${stuff[clicks - 1]}</h2><p onclick ="deleteThis(this)">X</p>`;
        document.getElementById("insert").appendChild(newPost);
        document.getElementById(`userInput`).value = "";
    } else {
        alert("Pleas enter a new task");
    }
}

const deleteThis = (el) => {
    var element = el;
    if (element.previousSibling.classList.contains('done')) {
        element.parentNode.remove();

    } else {
        alert('Please complete the task first');
    }
}

const taskDone = (ele) => {
    ele.classList.toggle('done');
}





