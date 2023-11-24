const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const tambah = document.getElementById("tambah");
const kurang = document.getElementById("kurang");
const kali = document.getElementById("kali");
const bagi = document.getElementById("bagi");
const persen = document.getElementById("persen");
var hasil = document.getElementById("result");
var output1 = 0;
var output2 = 0;

input1.addEventListener("input", function () {
  output1 = Number(input1.value);
});

input2.addEventListener("input", function () {
  output2 = Number(input2.value);
});

tambah.addEventListener("click", function () {
  hasil.innerText = output1 + output2;
});

kurang.addEventListener("click", function () {
  hasil.innerText = output1 - output2;
});

kali.addEventListener("click", function () {
  hasil.innerText = output1 * output2;
});

bagi.addEventListener("click", function () {
  hasil.innerText = (output1 / output2).toFixed(3) || 0;
});
