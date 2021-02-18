function remove(currItem){
    currItem.parentNode.parentNode.removeChild(currItem.parentNode);
};

const add_btn = document.querySelector("#add-btn");
add_btn.addEventListener('click', () => {
    const itemName = document.querySelector("#item-name").value;
    const quantity = document.querySelector("#quantity").value;
    const favorite = document.querySelector("#favorite").checked;
    const list = document.querySelector("#list");
    const newItem = document.createElement("li");
    
    if(favorite){
        newItem.setAttribute("class","favorited");
        newItem.innerHTML += itemName + '    ' + quantity + ' (Favorite)' + '     <button onclick="remove(this);">Delete</button>';
    }
    else{
        newItem.innerHTML += itemName + '    ' + quantity +  '     <button onclick="remove(this);">Delete</button>';
    }
    list.appendChild(newItem);
    // console.log(list);
});

const fav_btn = document.querySelector("#fav-btn");
fav_btn.addEventListener("click",()=>{
    const not_fav_list = document.querySelectorAll("li:not(.favorited)");
    // console.log(not_fav_list);
    for(item of not_fav_list) {
        item.style.display = "none";
    }
})

const all_btn = document.querySelector("#all-btn");
all_btn.addEventListener("click", ()=>{
    const not_fav_list = document.querySelectorAll("li:not(.favorited)");
    // console.log(not_fav_list);
    for(item of not_fav_list) {
        item.style.display = "block";
    }
})
