// create

function create(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

let newData1 = { id: 1, name: 'roses' };
let newData2 = { id: 2, name: 'tulips'};
let newData3 = { id: 3, name: 'peonies'};
create('1', newData1);
create('2', newData2);
create('3', newData3);

// delete
function deleteData(key) {
    localStorage.removeItem(key);
}

deleteData('2');