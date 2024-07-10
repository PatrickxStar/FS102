document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("taskForm") as HTMLFormElement;
    const taskInput = document.getElementById("taskInput") as HTMLInputElement;
    const taskList = document.getElementById("taskList") as HTMLUListElement;

    taskForm.addEventListener("submit", function(event: Event) {
        event.preventDefault();
        const taskText: string = taskInput.value.trim();
        if (taskText !== "") {
            const newListItem = document.createElement("li");
            newListItem.textContent = taskText;
            taskList.appendChild(newListItem);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function(event: MouseEvent) {
        if (event.target && (event.target as HTMLElement).nodeName === "LI") {
            taskList.removeChild(event.target as HTMLElement);
        }
    });
});
