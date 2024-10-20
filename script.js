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

let buttonSelector = document.querySelectorAll('.pgn_btn');

buttonSelector.forEach(button => {
  button.addEventListener('click', () => {
    buttonSelector.forEach(btn => btn.classList.remove('pgn_btnChange'));
    button.classList.add('pgn_btnChange');
  });
});

// SELECTING THE MED BRAND DROPDOWN

let medBrand = document.getElementById('med_brand');

medBrand.addEventListener('click', () => {
  const medBrandAPI = 'https://cliniqueplushealthcare.com.ng/prescriptions/drug_class';

  if (medBrand.options.length === 1) {
    fetch(medBrandAPI)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        data.forEach(user => {
          const option = document.createElement('option');
          option.value = user.id;
          option.textContent = user.name;
          medBrand.appendChild(option);
        });
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
});

// SELECT MEDICINE NAME (Second Dropdown)

let medName = document.getElementById('med_name');
medBrand.addEventListener('change', function () {
  const selectedId = this.value;
  const medNameAPI = `https://cliniqueplushealthcare.com.ng/prescriptions/get_drug_class_by_id/${selectedId}`;

  medName.innerHTML = '<option value="">Loading options...</option>';
  medName.disabled = false;

  fetch(medNameAPI)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      medName.innerHTML = '<option value="">Select an option...</option>';

      data.forEach(user => {
        const option = document.createElement('option');
        option.value = user.medicine_name;
        option.textContent = user.medicine_name;
        medName.appendChild(option);
      });
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      medName.innerHTML = '<option value="">Failed to load options</option>';
    });
});

//ADDING THE INFORMATION TO THE TABLE

let serialNumber = 1;

document.getElementById("add").addEventListener("click", function () {
  const medName = document.getElementById("med_name").value;
  const dose = document.getElementById("dose").value;
  const interval = document.getElementById("interval").value;
  const duration = document.getElementById("duration").value;
  const instruction = document.getElementById("instruction").value;

  // Check if necessary fields are filled (You can add more validation if needed)
  // if (!medName || !dose || !interval || !duration) {
  //     alert("Please fill out all required fields.");
  //     return;
  // }

  const tableBody = document.getElementById("tableBody");

  const newRow = document.createElement("tr");

  newRow.innerHTML = `
        <td>${serialNumber}</td>
        <td>${medName || "Nil"}</td>
        <td>${dose || "Nil"}</td>
        <td>${interval || "Nil"} / ${duration || "Till Complete Dosage"}</td>
        <td>${instruction || "Nil"}</td>
        <td><button class="deleteRow">Delete</button></td>
        `;

  tableBody.appendChild(newRow);

  serialNumber++;

  document.getElementById("med_brand").value = "";
  document.getElementById("med_name").value = "";
  document.getElementById("dose").value = "";
  document.getElementById("interval").value = "";
  document.getElementById("duration").value = "";
  document.getElementById("instruction").value = "";

  // Add functionality to delete the row
  newRow.querySelector(".deleteRow").addEventListener("click", function () {
    newRow.remove();
    serialNumber--;
  });
});