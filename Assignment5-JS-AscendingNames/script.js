let names = [];

document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();  // prevent the default form submission behavior
    addName();
});

function addName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim(); // remove spaces

    // check if name is not empty and not already in the list
    if (name && !names.includes(name)) { 
        names.push(name);
        names.sort(); // ascending by default
        displayNames(); // recreate list
    }

    nameInput.value = '';  // clear the input
}

function displayNames() {
    const nameList = document.getElementById('nameList');
    nameList.innerHTML = '';  // clear the list

    names.forEach(name => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        nameList.appendChild(listItem);
    });
}