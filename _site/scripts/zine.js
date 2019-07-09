let img1, img2, img3, img4, img5, img6, img7 = document.createElement("img");    

img1.src = 'https://hugh-ferguson.com/assets/img/zine/test-page-1.jpg';
img2.src = 'https://hugh-ferguson.com/assets/img/zine/test-page-2.jpg';
img3.src = 'https://hugh-ferguson.com/assets/img/zine/test-page-3.jpg';
img4.src = 'https://hugh-ferguson.com/assets/img/zine/test-page-4.jpg';
img5.src = 'https://hugh-ferguson.com/assets/img/zine/test-page-5.jpg';
img6.src = 'https://hugh-ferguson.com/assets/img/zine/test-page-6.jpg';
img7.src = 'https://hugh-ferguson.com/assets/img/zine/test-page-7.jpg';

let imgList = [img7,img1,img6,img2,img5,img3,img4];

window.onload=function(){

    document.getElementById('img1').addEventListener('click', function () {
        changeImg();
    });

    // imgList.forEach(img => img.id = 'img1');

    document.getElementsByClassName("zine").innerHTML = imgList[0];

    imgList[0].style.visibility = 'visible';
}

function changeImg() {

    let img1 = document.getElementById('img1');

    // let imgList = ['https://hugh-ferguson.com/assets/img/zine/test-page-7.jpg',
    //     'https://hugh-ferguson.com/assets/img/zine/test-page-1.jpg',
    //     'https://hugh-ferguson.com/assets/img/zine/test-page-6.jpg',
    //     'https://hugh-ferguson.com/assets/img/zine/test-page-2.jpg',
    //     'https://hugh-ferguson.com/assets/img/zine/test-page-5.jpg',
    //     'https://hugh-ferguson.com/assets/img/zine/test-page-3.jpg',
    //     'https://hugh-ferguson.com/assets/img/zine/test-page-4.jpg'
    // ];

    let current = imgList.indexOf(img1.src);

    if (current == imgList.length - 1) {
    img1.src = imgList[0];
    } else {
        img1.src = imgList[current + 1];
    }
}