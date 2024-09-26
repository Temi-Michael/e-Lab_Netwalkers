let profileName = document.querySelector(".name");
let labName = document.querySelector(".labName");
const underlineElements = document.querySelectorAll('.underline');

profileName.textContent = 'Isaac Odinaka';
labName.textContent = profileName.textContent + "'s" + " Laboratory";

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