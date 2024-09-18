let showMessage = '';
let showCircle = '';
let totalTime = 0;
let startTime = 0;
let finishTime = 0;
let spentMilliseconds = 0;
let spentSeconds = 0;

updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
            <div class="grid">
                <div class="innerGrid">
                    ${showCircle}
                    </div>
                    <div class="popup">
                    ${showMessage}
                    </div>
                </div>
                `;
}
function getCircles() {
    showCircle = '';
    randomNumber = Math.floor(Math.random() * 24)
    for (let index = 0; index < 24; index++) {
        if (randomNumber == index) showCircle += `<div class="lightCircle" onclick="selectedCircle()"></div>`;
        showCircle += /*HTML*/`
                    <div class="mainCircle" onclick="wrongAnswer()"></div>
                    `;
    }
    updateView();
}
showStart()
function showStart() {
    showMessage = `
                <div class="innerPopUp">
                <div class="innerPopUp">
            <img src="whack.jpg" width = 230px height = 200px>
            <br>
                    Klar for å spille?
                    <div class="startBtn">
                    <button onclick="startGame()">Start</button>
                    </div>
            </div>
            `;
    updateView();
}
function startGame() {
    showCircle = '';
    showMessage = '';
    startTime = new Date().getTime();
    getCircles();
    updateView();
}
function wrongAnswer() {
    showCircle = '';
    finishTime = new Date().getTime();
    spentMilliseconds = Math.floor(finishTime - startTime);
    spentSeconds = spentMilliseconds / 1000;
    showMessage = `
        <div class="innerPopUp">
            <img src="whack.jpg" width = 230px height = 200px>
            <br>
            Usjda det var feil, men du brukte bare ${spentSeconds} sekunder
            <div class="startBtn">
                    <button onclick="startGame()">Restart</button>
                    </div>
            </div>
            `;
    updateView();
}
function selectedCircle() {
    showCircle = '';
    finishTime = new Date().getTime();
    spentMilliseconds = Math.floor(finishTime - startTime);
    spentSeconds = spentMilliseconds / 1000;
    showMessage = `
        <div class="innerPopUp">
            <img src="whack.jpg" width = 230px height = 200px>
            <br>
            Bra jobba du brukte ${spentSeconds} sekunder
            <div class="startBtn">
                    <button onclick="startGame()">Restart</button>
                    </div>
            </div>
            `;
    updateView();
}