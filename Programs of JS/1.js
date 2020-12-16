//此函數可在網頁一進入時，就輸入JS的內容，但是function依舊必須透過DOM啟動
window.onload

//循序播放陣列中指定的圖檔
var jsImg = new Array("1st/Fox.jpg", "1st/Lion.jpg", "1st/Horse.jpg");
var jsImg2 = new Array("1st/Lion.jpg", "1st/Horse.jpg", "1st/Giraffe.jpg");

// 用另一個變數存，是不想在 function 中每次都要算陣列的大小
var jsImg_len = jsImg.length;

//設定起始照片順序  
var i = 0, j = 1, k = 2;
var a = 0, b = 1, c = 2;
var temp1, temp2;

//設定每幾秒執行一次sequentialImg() ，此行要在function sequentialImg() 之外
//右邊0.2秒，左邊0.4秒 變動一次
function start() {
    temp1 = setInterval("sequentialImg()", 200);
    temp2 = setInterval("sequentialImg2()", 400);
}

//循序播放
function sequentialImg() {
    document.getElementById("G2").innerHTML = "<img src='" + jsImg[j] + "'>";
    document.getElementById("G4").innerHTML = "<img src='" + jsImg[k] + "'>";
    document.getElementById("G6").innerHTML = "<img src='" + jsImg[i] + "'>";
    //右邊圖片向上遞增
    i++; k++; j++;

    //實現迴圈效果
    if (i >= jsImg_len) i = 0;
    if (k >= jsImg_len) k = 0;
    if (j >= jsImg_len) j = 0;
}

function sequentialImg2() {
    document.getElementById("G1").innerHTML = "<img src='" + jsImg2[c] + "'>";
    document.getElementById("G3").innerHTML = "<img src='" + jsImg2[a] + "'>";
    document.getElementById("G5").innerHTML = "<img src='" + jsImg2[b] + "'>";
    //左邊圖片向下遞減
    a--; b--; c--;
    //實現迴圈效果
    if (i >= jsImg_len) i = 0;
    if (k >= jsImg_len) k = 0;
    if (j >= jsImg_len) j = 0;
    if (a < 0) a = jsImg_len - 1;
    if (b < 0) b = jsImg_len - 1;
    if (c < 0) c = jsImg_len - 1;
}

//終止函數
function stop() {
    clearInterval(temp1);
    clearInterval(temp2);
    var y = document.getElementById("result");
    if (j == c) {
        y.innerHTML = "WIN";
        y.style.cssText = 'font-size: 80px; background-color: pink; font-weight: bold;';
    }
    else {
        y.innerHTML = "LOSE";
        y.style.cssText = 'font-size: 80px; background-color: pink; font-weight: bold;';
    }
}

