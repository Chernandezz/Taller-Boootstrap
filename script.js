const basicData = {
  columns: ["Nombre", "Posicion", "Numero", "Edad"],
  rows: [
    ["Cristian Hernandez", "Central", "11", "19"],
    ["Alejandro Hernandez", "Central", "9", "19"],
    ["Santiago Pachon", "Lateral", "5", "18"],
    ["Sebastian Herrera", "Lateral", "20", "20"],
    ["Luis Miguel", "Pivot", "8", "16"],
  ],
};

new Datatable(document.getElementById("datatable"), basicData);
