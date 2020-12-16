window.onload

function keyLogin() {
    if (event.keyCode == 13) //enter的鍵值為13
        document.getElementById("enter").click(); //觸動按鈕的點擊
    else if (event.keyCode == 32)
        document.getElementById("space").click(); //觸動按鈕的點擊
    else if (event.keyCode == 27)
        document.getElementById("Esc").click(); //觸動按鈕的點擊
}

//不能使用clear() 因為JS內建有這個函數
function del() {
    document.getElementById("O1").value = null;
    document.getElementById("O2").value = null;
    document.getElementById("O3").value = null;
    document.getElementById("O4").value = null;
}

//單位換算
function convert() {
    var x = document.getElementById("O1").value;
    var y = document.getElementById("O2").value;
    var z = document.getElementById("O3").value;
    var w = document.getElementById("O4").value;
    if (x > 0) {
        var y = 3.305785 * x;
        var z = 0.03305785 * x;
        var w = 0.000340831741 * x;
        document.getElementById("O2").value = y;
        document.getElementById("O3").value = z;
        document.getElementById("O4").value = w;
    } else if (y > 0) {
        var x = 0.302500011 * y;
        var z = 0.01 * y;
        var w = 0.000103101606 * y;
        document.getElementById("O1").value = x;
        document.getElementById("O3").value = z;
        document.getElementById("O4").value = w;
    } else if (z > 0) {
        var x = 30.2500011 * z;
        var y = 100 * z;
        var w = 0.0103101606 * z;
        document.getElementById("O1").value = x;
        document.getElementById("O2").value = y;
        document.getElementById("O4").value = w;
    } else if (w > 0) {
        var x = 2933.99904 * w;
        var y = 9699.17 * w;
        var z = 96.9917 * w;
        document.getElementById("O1").value = x;
        document.getElementById("O2").value = y;
        document.getElementById("O3").value = z;
    } else if (x == 0 && y == 0 && z == 0 && w == 0) {
        document.getElementById("O1").value = document.getElementById("O2").value = document.getElementById("O3").value = document.getElementById("O4").value = 0;
    }
    //防呆機制
    else {
        alert("不能輸入負數");
    }
    return x, y, z, w;
}

//將數值輸出在表格中
var j = 0;

function printNum() {
    var x = document.getElementById("O1").value;
    var y = document.getElementById("O2").value;
    var z = document.getElementById("O3").value;
    var w = document.getElementById("O4").value;
    if (j < 3) {
        j++;
        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = x;
        cell2.innerHTML = y;
        cell3.innerHTML = z;
        cell4.innerHTML = w;
    } else {
        document.getElementById("myTable").deleteRow(3);
        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = x;
        cell2.innerHTML = y;
        cell3.innerHTML = z;
        cell4.innerHTML = w;
    }
}