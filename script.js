//your code here
// Get the necessary HTML elements
var newTodoInput = document.getElementById("newTodoInput");
var addTodoBtn = document.getElementById("addTodoBtn");
var todoList = document.getElementById("todoList");

// Add an event listener to the "Add todo" button
addTodoBtn.addEventListener("click", function () {
    // Get the value from the input
    var todoText = newTodoInput.value.trim(); // trim removes leading and trailing whitespaces

    // Check if the input is not empty
    if (todoText !== "") {
        // Create a new list item
        var listItem = document.createElement("li");
        listItem.textContent = todoText;

        // Add the new list item to the todoList
        todoList.appendChild(listItem);

        // Clear the input field
        newTodoInput.value = "";
    }
});

// Add an event listener to the todoList to handle item clicks
todoList.addEventListener("click", function (event) {
    // Check if the clicked element is an li
    if (event.target.tagName === "LI") {
        // Replace the text of the clicked li with an empty string
        event.target.textContent = "";
    }
});


