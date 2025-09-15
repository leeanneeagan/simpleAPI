let addItem = document.getElementById("addItem");
let addBtn = document.getElementById("addBtn");
let toDoList = document.getElementById("placeToPutItem");



addBtn.addEventListener("click", () => {
    let itemText = addItem.value;

    if (itemText.trim() === "") return; // prevent empty items

    let li = document.createElement("li");
    li.textContent = itemText;

    // delete btn
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
  

    // remove
    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(deleteBtn);
    toDoList.appendChild(li);

  
    li.addEventListener("click", () => {
        li.style.textDecoration =
            li.style.textDecoration === "line-through" ? "none" : "line-through";
    });

   
    addItem.value = "";
});
