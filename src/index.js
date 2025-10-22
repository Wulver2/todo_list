import "./style.css";
import { Items } from "./items.js";

function addToList(item) {
    list = document.getElementsByClassName("list");
    // only working with one list for now, but will have multiple later

}
function createItem() {

}
var newItemButton = document.getElementById("newItem");

newItemButton.addEventListener("click", function() {
    // Make form in template.html and display it once this button is clicked.
    // once the form is filled out, use that information in createItem, then
    // add it to list

    // give prompt to user to create new item and add to list
    createItem();
});
console.log("here!")