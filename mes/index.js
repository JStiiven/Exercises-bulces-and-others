let mes = parseInt(prompt("Ingrese el dia del mes:"));
if (mes >= 1 && mes <= 7) {
    alert("Esta en la semana: 1")
}else if(mes >= 8 && mes <= 14){
    alert("EStas en la semana: 2")
}else if(mes >= 15 && mes <= 21){
    alert("Estas en la semana: 3")
}else if(mes >= 22 && mes <= 28){
    alert("Estas en la semana: 4")
}else if(mes >= 29 && mes <= 30){
    alert("Estas en la semana: 5")
}else{
    alert("¡Digite un dia de la semana valido!")
}