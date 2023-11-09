let items = document.getElementsByClassName("listItem");
const itemList = Array.from(items);
createCloseBtn();
for(let i = 0; i < itemList.length; i++){
  itemList[i].addEventListener('click', handleEvent);
}

//Create new item
function newElement() {
  let newItem = document.createElement("li");
  let inputValue = document.getElementById("itemName").value;
  let str2 = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
  newItem.innerHTML = str2;

  if (inputValue === "") {
    alert("Du måste skriva något!");
  } else {
    document.getElementById("myUL").appendChild(newItem);
    newItem.setAttribute("onclick", "handleEvent(event)");
    newItem.setAttribute("class", "listItem");

    itemList.push(newItem);
    createCloseBtn();

    /* newItem.append('<i class="fa-solid fa-xmark'); */
  }
  document.getElementById("itemName").value = "";

  console.log(itemList);
}

//Add overline
function handleEvent(e){
  let clicked = e.target;
  if (clicked.classList.contains("overline") == false) {
    clicked.classList.add("overline");
    clicked.setAttribute("style", "text-decoration: line-through;");
  } else {
    clicked.classList.remove("overline");
    clicked.setAttribute("style", "text-decoration: none;");
  }
}

//Create close button
function createCloseBtn() {
  for (let i = 0; i < itemList.length; i++) {
    if (itemList[i].classList.contains("close") == false) {
      let span = document.createElement("span");
      let txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      itemList[i].appendChild(span);
      span.addEventListener("click", removeItem);
    }
  }
}

//Remove item
function removeItem() {
  let rm = this.parentElement;
  itemList.splice(rm, 1);
  rm.setAttribute("style", "display: none;");

  console.log(itemList);
}
