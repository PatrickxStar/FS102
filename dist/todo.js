"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    taskForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const newListItem = document.createElement("li");
            newListItem.textContent = taskText;
            taskList.appendChild(newListItem);
            taskInput.value = "";
        }
    });
    taskList.addEventListener("click", function (event) {
        if (event.target && event.target.nodeName === "LI") {
            taskList.removeChild(event.target);
        }
    });
});
