
let items = [
    "a few coins",
    "an old ring",
    "a handkerchief",
    "a shard of bone",
    "some lint",
    "a tin of tea leaves"
]

let packs = [
    "purse",
    "backpack",
    "bag",
    "pack",
    "knapsack",
    "rucksack"
];

function addTableRows(tableId, items) {
    let table = document.getElementById(tableId);

    for (let i of items.entries()) {
        let rowIndex = i[0] + 1;
        let rowData = i[1];

        let row = table.insertRow(rowIndex);
        let nameCell = row.insertCell(0);
        let oddsCell = row.insertCell(1);

        nameCell.innerHTML = rowData;

        let inputField = document.createElement("INPUT");
        inputField.setAttribute("type", "text");
        inputField.value = "1";
        oddsCell.appendChild(inputField);
    }
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex];
    return randomElement;
}

function updateMessage() {
    let message = `Your ${getRandomElement(packs)} contains ${getRandomElement(items)}, ${getRandomElement(items)} and ${getRandomElement(items)}.`;
    console.log(message);
    document.getElementById("message").textContent = message;
}

window.onload = () => {
    updateMessage();

    addTableRows("table_packs", packs);
    addTableRows("table_items", items);
}
