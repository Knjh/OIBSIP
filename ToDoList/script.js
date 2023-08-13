const formEl = document.querySelector("form");
const tbodyEL = document.querySelector("tbody");
const tableEL = document.querySelector("table");

function onAdd(e){
    e.preventDefault();
    const titleEL = document.getElementById("title").value;
    const inputEL = document.getElementById("input-box").value;
    tbodyEL.innerHTML += `
        <tr>
             <td>${titleEL}</td>
             <td>${inputEL}</td>
             <td><buttun class= "deleteBtn">Delete</button></td>
        </tr>
    `;
}

function onDelete(e){

    if(!e.target.classList.contains("deleteBtn")){
        return;
    }
    const btn = e.target;
    btn.closest("tr").remove();
}

formEl.addEventListener("submit",onAdd);
tableEL.addEventListener("click",onDelete);

