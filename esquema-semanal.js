const weekSchema0 = {
  lunes: ["08:00 - 10:00", "16:00 - 24:00"],
  martes: ["08:00 - 10:00", "16:00 - 24:00"],
  miercoles: ["08:00 - 10:00", "16:00 - 24:00"],
  jueves: ["08:00 - 10:00", "16:00 - 24:00"],
  viernes: ["08:00 - 10:00", "16:00 - 24:00"],
  sabado: ["08:00 - 10:00", "16:00 - 24:00"],
  domingo: ["08:00 - 10:00", "16:00 - 24:00"],
};

// Principal Objects of the Logic

const weekSchema = {
  lunes: {
    turno1: [{ turnoEspecial: "carne" }, { horarios: "08:30 - 16:00" }],
    turno2: [{ turnoEspecial: "" }, { horarios: "10:30 - 16:00" }],
    turno3: [{ turnoEspecial: "" }, { horarios: "10:30 - 16:00" }],
    turno4: [{ turnoEspecial: "" }, { horarios: "10:30 - 16:00" }],
    turno5: [{ turnoEspecial: "" }, { horarios: "10:30 - 16:00" }],
    turno6: [{ turnoEspecial: "" }, { horarios: "10:30 - 16:00" }],
  },
  martes: {},
  miercoles: {},
  jueves: {},
  viernes: {},
  sabado: {},
  domingo: {},
};

// Forma de acceder al objeto principal
// console.log(weekSchema.lunes.turno1[0].turnoEspecial);
const lunesExample = {};

// Declaracion de variables
const bodyContainer = document.querySelector("#bodyCotainer");
const button = document.querySelector("#buttonEjecutar");
const cantidadTurnos = document.querySelector("#cantidadTurnos");
const divFantasma = document.querySelector("#divFantasma");
const tableContainer = document.querySelector("#shift-table tbody");
const start = document.querySelector("#start");
const end = document.querySelector("#end");
const testInput = document.querySelector("#testTime");
const testInput2 = document.querySelector("#testTime2");
const turnosEspeciales = document.createElement("select");
let valorCantidadTurnos = 0;

// Event Listeners
button.addEventListener("click", displayShifts);
button.addEventListener("click", modifyMonday);
testInput2.addEventListener("change", calculateHourRange);

// Functions
function displayShifts() {
  valorCantidadTurnos = cantidadTurnos.value;
  for (let i = 0; i < valorCantidadTurnos; i++) {
    const row = document.createElement("tr");
    row.classList.add("shifts-format");
    row.innerHTML = ` 
    <td> ${i + 1} </td>
    <td> <input  type="time" name="start" id="start-${i}" /></td>
    <td> <input  type="time" name="end" id="end-${i}" /></td>
    <td> ${turnosEspeciales} </td>
    <button id="button-${i}"->Call Function</button>
    `;
    tableContainer.appendChild(row);
    calculateHourRange();
  }
}

// Function to calculate how many hours do we have in each interval:
function calculateHourRange() {
  let testTimeValue = testInput.value;
  // console.log(testTieValue);
  let testTimeValue2 = testInput2.value;
  // Aca vamos a tener que pasar el lugar [0] del array a segundos, y despues el lugar 1 a segundos:
  const getSeconds = (s) =>
    s.split(":").reduce((acc, curr) => acc * 3600 + +curr, 0);

  let second1 = getSeconds(testTimeValue);
  let second2 = getSeconds(testTimeValue2);
  // console.log(second1);
  // console.log(second2);
  let resta = Math.abs(second1 - second2);
  // console.log(resta);
}
calculateHourRange();

// Creando Select de turnos especiales
const arrayTurnosEspeciales = ["carne", "limpieza", "vegetariana", "caja"];
function creatingSpecialShiftsSelects() {
  for (let i = 0; i < cantidadTurnos.value; i++) {
    const select = document.createElement("select");
  }

  for (let i = 0; i < arrayTurnosEspeciales.length; i++) {
    const option = document.createElement("option");
    option.value = arrayTurnosEspeciales[i];
    option.innerText = arrayTurnosEspeciales[i];
    turnosEspeciales.appendChild(option);
    console.log(turnosEspeciales);
  }
}

// Function to modify the object of Monday:
function modifyMonday() {
  for (let i = 0; i < cantidadTurnos.value; i++) {
    lunesExample[`Turno-${i}`] = {};
  }
  // console.log(lunesExample);
}

const button1 = document.querySelector("#button-0");
button1.addEventListener("click", callingButton);

function callingButton() {
  console.log("Hola");
}
