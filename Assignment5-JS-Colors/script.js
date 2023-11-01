function changeColor(color) {
    // Change the color of the "Hello World!" text
    document.getElementById('output').style.color = color;

    // Add the chosen color to the history list
    const historyList = document.getElementById('historyList');
    const listItem = document.createElement('li');
    listItem.textContent = color;
    historyList.appendChild(listItem);
}
