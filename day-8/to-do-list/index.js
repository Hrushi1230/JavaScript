let toDo = JSON.parse(localStorage.getItem('toDo')) || [];
update();


function List() {
    let str = document.querySelector(".input").value;
    if (!str == "")
        toDo.push(str);
    update();
    document.querySelector(".input").value = "";
}
function update() {
    let toDoHtml = '';
    for (let i = 0; i < toDo.length; i++) {
        let html = `
          <div class="task">
            <span>${toDo[i]}</span>
            <button onclick="
            
              toDo.splice(${i}, 1);
              update();
            "
             class= "task-btn"
            >Delete</button>
          </div>
        `;
        toDoHtml += html;

    }
    document.querySelector(".show").innerHTML = toDoHtml;
    localStorage.setItem('toDo', JSON.stringify(toDo));

}

