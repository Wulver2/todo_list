import "./style.css";
import { Items } from "./items.js";

function rename() {
    // prompts user to rename lists and allows them to keep the original
    // name in case user changes their mind
    var listName = document.getElementById("listName");
    var origName = listName.textContent;
    var newName = prompt("Rename list to :", origName);
    listName.textContent = newName;
}

function addToList(item) {
    list = document.getElementsByClassName("list");
    // only working with one list for now, but will have multiple later

}

function createItem() {

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
    createItem();
});

var nameButton = document.getElementById("rename");
nameButton.addEventListener("click", function() {
    rename();
});
console.log("here!");