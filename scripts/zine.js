
window.onload=function(){

    document.getElementById('img1').addEventListener('click', function () {
        changeImg();
    });

    let img1 = new Image();
    let img2 = new Image();
    let img3 = new Image();
    let img4 = new Image();
    let img5 = new Image();
    let img6 = new Image();

    img1.src = 'https://hugh-ferguson.com/assets/img/zine/test-page-1.jpg';
    img2.src = 'https://hugh-ferguson.com/assets/img/zine/test-page-2.jpg';
    img3.src = 'https://hugh-ferguson.com/assets/img/zine/test-page-3.jpg';
    img4.src = 'https://hugh-ferguson.com/assets/img/zine/test-page-4.jpg';
    img5.src = 'https://hugh-ferguson.com/assets/img/zine/test-page-5.jpg';
    img6.src = 'https://hugh-ferguson.com/assets/img/zine/test-page-6.jpg';
}

function changeImg() {

    let img1 = document.getElementById('img1');

    let imgList = ['https://hugh-ferguson.com/assets/img/zine/test-page-1.jpg',
        'https://hugh-ferguson.com/assets/img/zine/test-page-6.jpg',
        'https://hugh-ferguson.com/assets/img/zine/test-page-2.jpg',
        'https://hugh-ferguson.com/assets/img/zine/test-page-5.jpg',
        'https://hugh-ferguson.com/assets/img/zine/test-page-3.jpg',
        'https://hugh-ferguson.com/assets/img/zine/test-page-4.jpg'
    ];

    let current = imgList.indexOf(img1.src);

    if (current == imgList.length - 1) {
    img1.src = imgList[0];
    } else {
        img1.src = imgList[current + 1];
    }
}