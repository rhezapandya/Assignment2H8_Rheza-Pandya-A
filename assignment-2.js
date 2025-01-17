// Extract Values
// let sectionForm = document.querySelector("#sectionForm");
// let name = document.querySelector("#name").innerText;
// let role = document.querySelector("#role").innerText;
// let availibility = document.querySelector("#availibility").innerText;
// let age = document.querySelector("#age").innerText;
// let lokasi = document.querySelector("#lokasi").innerText;
// let years = document.querySelector("#years").innerText;
// let email = document.querySelector("#email").innerText;

// Get Inputs
// const inputName = document.querySelector("#inputName");
// const inputRole = document.querySelector("#inputRole");
// const inputAvailibility = document.querySelector("#inputAvailibility");
// const inputAge = document.querySelector("#inputAge");
// const inputLokasi = document.querySelector("#inputLokasi");
// const inputYears = document.querySelector("#inputYears");
// const inputEmail = document.querySelector("#inputEmail");

const changeForm = document.querySelector("#changeForm");

// Init Fields
const fields = [
    { name: "name", inputId: "inputName" },
    { name: "role", inputId: "inputRole" },
    { name: "availibility", inputId: "inputAvailibility" },
    { name: "age", inputId: "inputAge" },
    { name: "lokasi", inputId: "inputLokasi" },
    { name: "years", inputId: "inputYears" },
    { name: "email", inputId: "inputEmail" },
];

// Extract Values
const getFieldValues = () => {
    const values = {};
    fields.forEach((field) => {
        values[field.name] = document.querySelector(`#${field.name}`).innerText;
    });
    return values;
};

// Insert Data to Input Values
const populateInputs = (values) => {
    fields.forEach((field) => {
        const input = document.querySelector(`#${field.inputId}`);
        if (input) {
            input.value = values[field.name];
        }
    });
};

// Toggle Button to Show Form
function toggleShow() {
    if (sectionForm.style.display === "none") {
        sectionForm.style.display = "block";
    } else {
        sectionForm.style.display = "none";
    }

    // Extract Data
    const values = getFieldValues();

    // Insert Data to Input Values
    populateInputs(values);

    // inputName.value = name;
    // inputRole.value = role;
    // inputAvailibility.value = availibility;
    // inputAge.value = age;
    // inputLokasi.value = lokasi;
    // inputYears.value = years;
    // inputEmail.value = email;
}

changeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    // Loop Update Fields with New Inputs
    fields.forEach((field) => {
        const editValue = data.get(field.inputId);
        document.querySelector(`#${field.name}`).innerHTML = editValue;
    });

    // const editName = data.get("inputName");
    // const editRole = data.get("inputRole");
    // const editAvailibility = data.get("inputAvailibility");
    // const editAge = data.get("inputAge");
    // const editLokasi = data.get("inputLokasi");
    // const editYears = data.get("inputYears");
    // const editEmail = data.get("inputEmail");

    // document.querySelector("#name").innerHTML = editName;
    // document.querySelector("#role").innerHTML = editRole;
    // document.querySelector("#availibility").innerHTML = editAvailibility;
    // document.querySelector("#age").innerHTML = editAge;
    // document.querySelector("#lokasi").innerHTML = editLokasi;
    // document.querySelector("#years").innerHTML = editYears;
    // document.querySelector("#email").innerHTML = editEmail;
});
