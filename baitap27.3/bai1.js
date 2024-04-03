function getPhoneList(apiUrl) {
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Yêu cầu không thành công. Mã trạng thái: ' + response.status);
            }
            return response.json();
        })  
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Đã xảy ra lỗi:', error);
        });
}

const apiUrl = 'https://dummyjson.com/products';
getPhoneList(apiUrl)
    .then(phone => {
        console.log('Danh sách điện thoại:', phone);
    });
