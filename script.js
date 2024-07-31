let titleInput = document.getElementById('title_input');
let mainTitle = document.getElementById("main_title");

function getTitle(e){
    e.preventDefault();
    let titleValue = titleInput.value;
    mainTitle.innerHTML = titleValue;

}

titleInput.addEventListener("change", getTitle);