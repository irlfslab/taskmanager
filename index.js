const addTask = document.querySelector(".add");
const tasks = document.querySelector(".tasks");
const clear = document.querySelector(".clear");
const msgSpan = document.querySelector(".msg span");
const searchTask = document.querySelector(".search");


function updateMsg(){
    const textLength = tasks.children.length;
    msgSpan.textContent = `You have ${textLength} pending tasks.`;
}
updateMsg();


addTask.addEventListener("submit", (e) => {
    e.preventDefault();
    //console.log(addTask.task.value);
    const value = addTask.task.value.trim()

    if(value.length){
        //console.log(value);
        tasks.innerHTML += `<li>
                                <span>${value}</span>
                                <i class="bi bi-trash-fill delete"></i>
                            </li>`;
        addTask.reset();
        updateMsg();
    }
});


tasks.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
        updateMsg();
    }
});


clear.addEventListener("click", (e) => {
    const taskItems = tasks.querySelectorAll("li");
    taskItems.forEach(item => {
        item.remove();
    });
    updateMsg();
});

function filterTask(term){
    //console.log(tasks.children);
    //console.log(Array.from(tasks.children);
    Array.from(tasks.children)
    .filter(task => {
        return !task.textContent.toLowerCase().includes(term);
    })
    .forEach(task => {
        task.classList.add("hide");
    });

    Array.from(tasks.children)
    .filter(task => {
        return task.textContent.toLowerCase().includes(term);
    })
    .forEach(task => {
        task.classList.remove("hide");
    });

}


searchTask.addEventListener("keyup", (e) => {
    const term = searchTask.task.value.trim().toLowerCase();
    filterTask(term);
});


searchTask.addEventListener("click", (e) => {
    if(e.target.classList.contains("reset")){
        searchTask.reset();
        const term = searchTask.task.value.trim();
        filterTask(term);
    }
})
