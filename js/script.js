// create an empty array for insert player name
const bestFiveList = [];
function addToBestFive(element){
    // Fetch the Player Name
    const playerName = element.parentNode.parentNode.children[0].innerText;

    // Add player list into the empty array
    if(bestFiveList.length<5){
        bestFiveList.push(playerName);
    }else{
        alert('Enough, you can select five players only!');
        return;
    }

    // Call displayPlayerList for Display selected player
    displayPlayerList(bestFiveList);

}
function displayPlayerList(playerList){
    const listedPlayer = document.getElementById('listed-player');
    listedPlayer.innerHTML = '';
    for(let i=0; i<playerList.length; i++){
        const name = bestFiveList[i];
        const div = document.createElement('div');
        div.innerHTML = `
        <p class="my-3 px-3">
        <span class="manrope-800">${i+1}.</span>
        <span class="manrope-400 text-white">${name}</span>
        </p>
        `;
        listedPlayer.appendChild(div);
    }
}