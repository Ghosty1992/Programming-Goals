document.getElementById("myForm").addEventListener("submit", formSubmit);
document.querySelector("ul").addEventListener("click", checkAndRemove);
document.querySelector(".removeAll").addEventListener("click", clearAllGoals)

function formSubmit(e) {
    e.preventDefault();
    const input = document.getElementById("input");
    if (input.value !== "") {
        addGoal(input.value);
    } else {
        alert("Input is required");
    }
    input.value = "";
}

function addGoal(goal) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = `<span class="goals">${goal}</span>    
    <button class="checkButton"><i class="fas fa-check"></i></button>       
    <button class="deleteButton"><i class="fas fa-trash"></i></button>`;
    ul.appendChild(li);
}


function checkAndRemove(e) {
    if(e.target.classList.contains("checkButton")) {
        checkGoal(e);
    } else if(e.target.classList.contains("deleteButton")) {
        removeGoal(e);
    }
}

function checkGoal(e) {
    let item = e.target.parentNode;
    if(item.style.textDecoration === "line-through") {
        item.style.textDecoration = "none";
    } else {
        item.style.textDecoration = "line-through";
    }
}

function removeGoal(e) {
    let item = e.target.parentNode;
    item.remove();
}

function clearAllGoals(e) {
    document.querySelector("ul").innerHTML = "";
}
