var y = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"];
var x = 5;

switch (x) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
        console.log(y[x - 1]);
        break;
    default:
        console.log("Giá trị không hợp lệ");
}