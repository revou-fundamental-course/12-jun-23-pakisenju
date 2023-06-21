// ini adalah variabel-variabel yang mengambil element HTML dengan id untuk memanipulasi halaman web
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let hasil = document.getElementById("hasil");
let convert = document.getElementById("convert");
let reset = document.getElementById("reset");

// ini adalah button-button yang diberikan event "click" dan diberikan functionnya masing-masing
convert.addEventListener("click", converting);
reset.addEventListener("click", reseting);

// ini adalah function converting untuk melakukan konversi suhu. dimana jika button convert diklik pada saat input dengan id "celsius" memiliki nilai yang valid maka akan menjalankan sebuah perhitungan yang akan memberikan nilai pada element input dengan id "fahrenheit" dimana perhitungan tersebut dengan angka 9 dibagi 5 lalu dikali dengan nilai dari input dengan id "celsius" dan jumlahnya akan ditambahkan dengan angka 32. selain itu, ketika mengklik button convert juga akan memberikan nilai pada textarea dengan id "hasil" dimana nilai yang ditampilkan adalah rumus perhitungan dari nilai celsius ke fahrenheit. tetapi jika button convert diklik pada saat input dengan id "fahrenheit" memiliki nilai yang valid maka akan menjalankan sebuah perhitungan untuk memberikan nilai pada element input dengan id "celsius" dimana perhitungannya yaitu angka 5 dibagi 9 lalu dikali dengan hasil pengurangan nilai dari input "fahrenheit" dengan angka 32. selain itu juga akan menampilkan nilai pada textarea dengan id "hasil" yaitu rumus perhitungan dari nilai fahrenheit ke celsius
function converting() {
    if (!isNaN(parseFloat(celsius.value))) {
        fahrenheit.value = ((9 / 5) * parseFloat(celsius.value)) + 32;
        hasil.value = (`(9 / 5 * ${celsius.value}) + 32 = ${fahrenheit.value}`);
    } else if (!isNaN(parseFloat(fahrenheit.value))) {
        celsius.value = (5 / 9) * (parseFloat(fahrenheit.value) - 32);
        hasil.value = (`5 / 9 * (${fahrenheit.value} - 32) = 
        ${celsius.value}`)
    }
}


// ini adalah function reseting untuk mengosongkan nilai yang ada pada input. dimana jika button reset diklik maka nilai input dari celsius, fahrenheit, dan textarea hasil akan kosong.
function reseting() {
    celsius.value = "";
    fahrenheit.value = "";
    hasil.value = "";
}