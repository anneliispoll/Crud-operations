
const flowersArray = [];

// create an array

function addFlowers(flower) {
    flowersArray.push(flower);
    console.log(flowersArray);
}

// update an array

function updateFlowersArray(flowersArray, oldFlower, newFlower) {
    const index = flowersArray.indexOf(oldFlower);

    if (index !== -1) {
        flowersArray[index] = newFlower;
    }
    console.log(flowersArray);
}

// delete last element from an array

function deleteFlower() {
    removedFlower = flowersArray.pop();
    console.log(removedFlower);
    console.log(flowersArray);
}

// read from an array

function pick2ndFlower() {
    secondFlower = flowersArray[1];
    console.log(secondFlower);
}

addFlowers('tulips');
addFlowers('roses');
addFlowers('sunflowers');
addFlowers('peonies');
deleteFlower();
pick2ndFlower();
updateFlowersArray(flowersArray, 'roses', 'Roses');
