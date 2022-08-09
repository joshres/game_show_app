const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const startButton = document.querySelector('.btn_reset');
let missed = 0;

const phrases = [
    'fun in the sun',
    'happy go lucky',
    'nine lives',
    'over the moon',
    'ketchup and mustard',
];

// listen for the start game button to be pressed
startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// return a random phrase from an array
function getRandomPhrasesAsArray(phrases) {
    const randomPhrase = Math.floor(Math.random() * phrases.length);
    return phrases[randomPhrase];
};

const phraseArray = getRandomPhrasesAsArray(phrases);

// adds the letters of a string to the display
 function addPhraseToDisplay(phrases) {
   for (let i = 0; i < phrases.length;  i++) {
        const ul = document.querySelector ('ul');
        const li = document.createElement('li');
        li.textContent = phrases[i];
        ul.appendChild(li);
        
        if (li.textContent === " ") {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
    }
}
addPhraseToDisplay(phraseArray);

// check if a letter is in the phrase
function checkLetter(btn) {
    const chkLetter = document.querySelectorAll('li');
    let match = null;
    for (let i = 0; i < chkLetter.length; i++) {
        if (btn.textContent === chkLetter[i].textContent) {
            chkLetter[i].classList.add('show');
            match = btn.textContent;
        }
    }
    return match;
};

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {
    const btn = e.target;
    const letterFound = checkLetter(btn);
    if (e.target.tagName === 'BUTTON' && e.target.className != "chosen") {
        btn.disabled = true;
        btn.className = "chosen";
        } 
    if (e.target.tagName === 'BUTTON' && letterFound === null) {
        const tries = document.querySelectorAll("img");
        tries[missed].src = "images/lostHeart.png"; missed++;
    }
    checkWin();
});

// reset the game
function resetGame() {
    startButton.addEventListener('click', e => {
        const btn = e.target;
        const li = document.querySelectorAll('li');
        overlay.classList.remove('win');
        overlay.classList.remove('lose');
            if (btn.tagName === 'BUTTON' && btn.className === 'chosen') {
                btn.classList.remove('chosen');
                btn.disabled = false;
                li.classList.remove('li');
            }
        
        // ***** Code below not working - getting ul is null message *****/

        /*phrase.innerHTML = '';
        //const newPhrase = getRandomPhrasesAsArray(phraseArray);
        addPhraseToDisplay(phraseArray);*/


        const hearts = document.querySelectorAll('img');
        for (let i = 0; i < hearts.length; i++) {
            if (hearts[i].src = "images/lostHeart.png") {
                hearts[i].src = "images/liveHeart.png"
            }
        }
        missed = 0;
    });
};

// check if the game has been won or lost
function checkWin() {
    const letters = document.getElementsByClassName('letter');
    const shows = document.getElementsByClassName('show');
    const h2 = document.createElement('h2');

    if (letters.length === shows.length) {
        overlay.className = 'win';
        overlay.style.display = 'flex';
        startButton.textContent = "Play again?";
        overlay.appendChild(h2);
        h2.textContent = "You won!";
    } 
        
    else if (missed >= 5) {
        overlay.className = 'lose';
        overlay.style.display = 'flex';
        startButton.textContent = "Try again?";
        overlay.appendChild(h2);
        h2.textContent = "Sorry, you lost.";
    }
    resetGame();
};

