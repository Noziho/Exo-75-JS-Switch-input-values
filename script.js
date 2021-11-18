
let button = document.getElementById('switch');

 button.addEventListener("click", function (event) {
     let input1 = document.getElementById("input1");
     let input2 = document.getElementById("input2");
     let label1 = document.getElementById("label1");
     let label2 = document.getElementById('label2');
     label1.innerText = input2.value;
     label2.innerText = input1.value;
 })