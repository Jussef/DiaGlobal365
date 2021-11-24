var today = new Date()
var targetDate = new Date("12/31/2021") //use full year
var timeAfterTarget = Math.floor(( today.getTime() - targetDate.getTime()) / 86400000 + 365)
var msg = "El día del año es " + timeAfterTarget;
var dia = document.getElementById("dia");
dia.innerHTML = msg;