let addItem = document.getElementById("addItem");
let addBtn = document.getElementById("addBtn");
let toDoList = document.getElementById("placeToPutItem");



// add button and  create list item when click added to li
addBtn.addEventListener("click", () => {
    let itemText = addItem.value;

    let li = document.createElement("li");
    li.textContent = itemText;
    toDoList.appendChild(li);

    
//conditional for stike thru word
li.addEventListener("click", () => {
  if (li.style.textDecoration === "line-through") {
    li.style.textDecoration = "none";
  } else {
    li.style.textDecoration = "line-through";
  }
});

});
