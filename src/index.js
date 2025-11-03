import "./style.css";
import { Items } from "./items.js";

//list of todos
// may make it a list that holds lists of todos, to hold other projects
let todos = [];

function rename() {
    // prompts user to rename lists and allows them to keep the original
    // name in case user changes their mind
    var listName = document.getElementById("listName");
    var origName = listName.textContent;
    var newName = prompt("Rename list to :", origName);
    listName.textContent = newName;
}

function addToList(item) {
    // only working with one list for now, but will have multiple later
    todos.push(item);
}

function createItem(title, description, dueDate, priority, notes) {
    var newItem = new Items(title, description, dueDate, priority, notes, false);
    addToList(newItem);
}

function removeToDo() {

}

function collapsibleEvent() {
    var coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            //will change as more info is added to collapsible
            console.log("drop")
            let info = this.firstElementChild;
            if (info.style.display == "block") {
                info.style.display = "none";
            }
            else {
                info.style.display = "block";
            }
        });
    }
}

function displayList() {
    let list = document.getElementById("list");
    list.innerHTML = "";
    // list will be displayed as a list of check marks 
    // for now it will just show title, but in future it will display all information
    // in a grid display format and possibly use a drop down box to display the description
    for(let i = 0; i < todos.length; i++) {
        let label = document.createElement("label");
        label.setAttribute("class", "check")
        label.textContent = todos[i].title;
        let inp = document.createElement("input");
        inp.setAttribute("type", "checkbox");
        //let s = document.createElement("span");
        let remove = document.createElement("button");
        remove.setAttribute("class", "remove");
        remove.textContent = "Remove";
        // will add a collapsible box that includes other item info 
        // Ex. notes, description
        // will make the button appear as a downward arrow later
        let collapse = document.createElement("button");
        collapse.setAttribute("class", "collapsible");
        collapse.textContent = "placeholder";
        let descript = document.createElement("p");
        descript.setAttribute("class", "todoInfo");
        descript.textContent = todos[i].description;
        label.appendChild(inp);

        //label.appendChild(s);
        label.appendChild(remove);
        collapse.appendChild(descript);
        label.appendChild(collapse);
        list.appendChild(label);
    }
    collapsibleEvent();
    console.log("item");
}

// clean up event listeners to make file more readable
// may make a new file, put them in there, and import them back here

var newItemButton = document.getElementById("newItem");

newItemButton.addEventListener("click", function() {
    // Make form in template.html and display it once this button is clicked.
    // once the form is filled out, use that information in createItem, then
    // add it to list

    // give prompt to user to create new item and add to list
    var popup = document.getElementById("popup");
    popup.style.display = "block";
});

//popup form event
var popup = document.getElementById("popup");
popup.addEventListener("submit", function(e) {
    e.preventDefault();

    this.style.display = "none"
    let t = title.value;
    let d = description.value;
    let date = dueDate.value;
    let p = priority.value;
    let n = notes.value;
    createItem(t, d, date, p, n);
    displayList();
})

var nameButton = document.getElementById("rename");
nameButton.addEventListener("click", function() {
    rename();
});
console.log("here!");