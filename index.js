setInterval(changeimgs, 2000) ;

function changeimgs(){
    
    let index = Math.floor(Math.random() * 6);
    
    let imgpath = "Images/" ;
    const images = ["img3.jpg" , "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img9.jpg"] ;

    document.getElementById('storyimg').src = imgpath + images[index] ;
}