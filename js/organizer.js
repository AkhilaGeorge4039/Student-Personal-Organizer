// Organizer page JS code
"use strict";

const form = document.querySelector("#task-form");
const taskTable = document.querySelector("#task-table");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // variable declaration
    const taskName = document.querySelector("#task-name").value;
    const taskStatus = document.querySelector("#task-status").value;
    const taskDate = document.querySelector("#task-date").value;

//     // Validate the form fields
//     if (!taskName || !taskDate || !taskStatus) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     // Create a new table row for the task
//     const newRow = taskTable.insertRow(-1);
//     const nameCell = newRow.insertCell(0);
//     const statusCell = newRow.insertCell(1);
//     const dateCell = newRow.insertCell(2);
//     const deleteCell = newRow.insertCell(3);

//     // Add the task name and date to the table row
//     nameCell.innerText = taskName;
//     statusCell.innerText = taskStatus;
//     dateCell.innerText = taskDate;

//     // To add a delete button to the table row
//     const deleteButton = document.createElement("button");
//     deleteButton.innerText = "Delete";
//     deleteButton.addEventListener("click", () => {
//         taskTable.deleteRow(newRow.rowIndex);
//     });
//     deleteCell.appendChild(deleteButton);

//     // Reset the form
//     form.reset();
// });
// Validate the form fields
if (!taskName || !taskDate || !taskStatus) {
    alert("Please fill in all fields.");
    return;
}

// Create a new table row for the task
const newRow = taskTable.insertRow(-1);
const nameCell = newRow.insertCell(0);
const statusCell = newRow.insertCell(1);
const dateCell = newRow.insertCell(2);
const deleteCell = newRow.insertCell(3);

// Add the task name and date to the table row
nameCell.innerText = taskName;
statusCell.innerText = taskStatus;
dateCell.innerText = taskDate;

// To add a delete button to the table row
const deleteButton = document.createElement("button");
deleteButton.innerText = "Delete";
deleteButton.addEventListener("click", () => {
    taskTable.deleteRow(newRow.rowIndex);
});
deleteCell.appendChild(deleteButton);

// Show the table
taskTable.style.display = "block";

// Reset the form
form.reset();
});
