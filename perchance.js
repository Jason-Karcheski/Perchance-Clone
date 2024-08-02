
var itemMap = new Map([
    ["a few coins", 1],
    ["an old ring", 1],
    ["a handkerchief", 1],
    ["a shard of bone", 1],
    ["some lint", 1],
    ["a tin of tea leaves", 1]
]);

var packMap = new Map([
    ["purse", 1],
    ["backpack", 1],
    ["bag", 1],
    ["pack", 1],
    ["knapsack", 1],
    ["rucksack", 1]
]);

function addTableRowsFromMap(tableId, map) {
    let table = document.getElementById(tableId);
    var rowIndex = 1;

    map.keys().forEach(element => {
        // Row Indexing
        let row = table.insertRow(rowIndex);
        rowIndex++;

        // Name Cell
        let nameCell = row.insertCell(0);
        nameCell.innerHTML = element;

        // Weight Cell
        let weightCell = row.insertCell(1);
        let weight = map.get(element);
        let inputField = document.createElement("INPUT");
        inputField.setAttribute("type", "number");
        inputField.setAttribute("value", weight);
        inputField.addEventListener("input", (event) => {
            let newWeight = event.target.value;
            map.set(element, newWeight);
        })
        weightCell.appendChild(inputField);
    });
}

function buildArrayFromWeights(map) {
    var list = new Array();

    map.keys().forEach(key => {
        let weight = map.get(key);
        for (let i = 0; i < weight; i++) {
            list.push(key);
        }
    });

    return list
}

function getRandomElement(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function updateMessage() {
    let weightedPackArray = buildArrayFromWeights(packMap);
    let weightedItemArray = buildArrayFromWeights(itemMap);

    let message = `Your ${getRandomElement(weightedPackArray)} contains ${getRandomElement(weightedItemArray)}, ${getRandomElement(weightedItemArray)} and ${getRandomElement(weightedItemArray)}.`;
    document.getElementById("message").textContent = message;
}

window.onload = () => {
    updateMessage();
    addTableRowsFromMap("table_packs", packMap);
    addTableRowsFromMap("table_items", itemMap);
}
