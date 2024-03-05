var sachs = [
    {
        tacgia: 'Harper Lee',
        tieude: 'To kill a mockingbird',
        namxuatban: '2020',
        trangthai: true
    },
    {
        tacgia: 'ray bradbury',
        tieude: 'fathrenhit 451',
        namxuatban: '2022',
        trangthai: false
    }


]
sachs.forEach(function (sach) {
    console.log("Tác giả: " + sach.tacgia);
    console.log("Tiêu đề: " + sach.tieude);
    console.log("Năm xuất bản: " + sach.namxuatban);
    console.log("Trạng thái: " + (sach.trangthai ? "Đã xuất bản" : "Chưa xuất bản"));
    console.log("------------------------");
});