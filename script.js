
let button = document.getElementById('switch');

 button.addEventListener("click", function (event) {
     let input1 = document.getElementById("input1");
     let input2 = document.getElementById("input2");
     let valeurInput1 = input1.value;
     input1.value = input2.value;
     input2.value = valeurInput1;


 })