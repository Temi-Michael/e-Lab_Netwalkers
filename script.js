// NAMING VARIABLES

let profileName = document.querySelector(".name");
let labName = document.querySelector(".labName");
const underlineElements = document.querySelectorAll('.underline');

// PLACING NAMES TO TEXTS
profileName.textContent = 'Isaac Odinaka';
labName.textContent = profileName.textContent + "'s" + " Laboratory";


// STYLING THE ICONS WHEN HOVERED OVER BY ITERATING OVER VARIOUS CLASS NAMES

let elements = document.querySelectorAll('.fa-building, .fa-syringe, .fa-flask, .fa-book-open, .fa-motorcycle, .fa-microscope, .fa-check-double, .fa-money-bill-1, .fa-box-archive');

underlineElements.forEach((underlineTag, index) => {
    underlineTag.addEventListener('mouseover', () => {
        if (elements[index]) {
            elements[index].style.color = '#9C3030';
        }
    });

    underlineTag.addEventListener('mouseout', () => {
        if (elements[index]) {
            elements[index].style.color = '';
        }
    });
});


let side = document.getElementById('side');
let toggle = document.getElementById('toggleButton');

toggle.addEventListener('click', () => {
  side.classList.toggle('show');
});

// Select all buttons with class 'pgn_btn'
let buttonSelector = document.querySelectorAll('.pgn_btn');

buttonSelector.forEach(button => {
  button.addEventListener('click', () => {
    // Remove .pgn_btnChange from all buttons
    buttonSelector.forEach(btn => btn.classList.remove('pgn_btnChange'));
    // Add .pgn_btnChange to clicked button
    button.classList.add('pgn_btnChange');
  });
});

