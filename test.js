
//BAI 1

function TongSoNguyenTo() {
    // Khai báo a và b dưới dạng số nguyên
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var total = 0;
    for (var i = a; i <= b; i++) {
        if (CheckSoNguyenTo(i)) {
            total += i;
        }
    }
    // Trả kết quả tổng số nguyên tố trong khoảng a và b
    document.getElementById("ketqua").innerHTML = "Tổng các số nguyên tố trong khoảng từ " + a + " đến " + b + " là: " + total;
}

// Hàm kiểm tra số nguyên tố
function CheckSoNguyenTo(n) {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) { // Duyệt từ 2 đến căn bậc hai của n để kiểm tra
        if (n % i == 0) { // Nếu n chia hết cho i thì không phải số nguyên tố
            return false;
        }
    }
    return true; // Nếu không có i nào trong khoảng từ 2 đến căn bậc hai của n mà n chia hết thì là số nguyên tố
}



//BAI 2

function numberOneTriangle(n) {
    if (n < 1 || n > 10 ) { // điều kiện dảm bảo chỉ nhập trong khoảng từ 1 đến 10 
         alert("Vui lòng nhập lại số từ 1 đến 10");
         return;
     }
    let output = "";
    for (let i = 1; i <= n; i++) {
       for (let j = 1; j <= i; j++) {
          output += "MINH ";
       }
       output += "<br/>";
    }
    document.getElementById("tamgiac").innerHTML = output;
 }