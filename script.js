let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
]

function init() {
    render();
}

function render() {
    let contentDiv = document.getElementById('content');
    let table = document.createElement('table');

    for (let i = 0; i < 3; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < 3; j++) {
            let cell = document.createElement('td');
            let index = i * 3 + j;
            let fieldValue = fields[index];

            if (fieldValue === 'circle') {
                cell.textContent = 'O';
            } else if (fieldValue === 'cross') {
                cell.textContent = 'X';
            }

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    contentDiv.innerHTML = '';
    contentDiv.appendChild(table);
}

