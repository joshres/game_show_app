const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn_reset');
let letters = document.getElementsByClassName('letter');
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
    let match = null;9
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
    if (e.target.tagName === 'BUTTON' && e.target.className != "chosen") {
        const btn = e.target;
        btn.disabled = true;
        btn.className = "chosen";
        const letterFound = checkLetter(btn);
    } else if (e.target.tagName === 'BUTTON' && ){
        const tries = document.querySelectorAll('img');
        tries[missed].src = "images/lostHeart.png"; missed++;
    }
});

// check if the game has been won or lost
const checkWin = () => {

};



