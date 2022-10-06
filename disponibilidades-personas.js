const team = {
  AlejandroS: {
    disponibilidades: {
      lunes: ["08:00 - 10:00", "16:00 - 24:00"],
      sabado: ["08:00 - 10:00", "16:00 - 24:00"],
      domingo: ["08:00 - 10:00", "16:00 - 24:00"],
    },
    turnosEspeciales: "carne",
  },
  MartinP: {
    disponibilidades: {
      lunes: ["08:00 - 10:00", "16:00 - 24:00"],
      sabado: ["08:00 - 10:00", "16:00 - 24:00"],
    },
    turnosEspeciales: "",
  },
};

// console.log(team);
// console.log(team.AlejandroS.disponibilidades[2]);

// El ideal seria ir llenando el array con info de los horarios que no pueden las personas, de alguna forma con un listado desplegable que large todas las horas.

// Array con intervalo de cada 15 minutos, para las 24 horas del dia:
const arr = Array(24 * 4)
  .fill(0)
  .map((_, i) => {
    return ("0" + ~~(i / 4) + ": 0" + 60 * ((i / 4) % 1)).replace(
      /\d(\d\d)/g,
      "$1"
    );
  });

// console.log(arr);
