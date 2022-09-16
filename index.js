setInterval(changeimgs, 2000) ;

function changeimgs(){
    
    let index = Math.floor(Math.random() * 5);
    
    let imgpath = "Images/" ;
    const images = ["img3.jpg" , "img4.jpg", "img5.jpg", "img7.jpg", "img9.jpg"] ;

    document.getElementById('storyimg').src = imgpath + images[index] ;
}

function ValidateEmail(inputText, inputPass){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(inputText.value.match(mailformat))
    {
        if(inputPass.value.length >= 8){
        alert("Your Email & Password has been verified successfully");
         }
         else{
            alert("Password should be of Minimum 8 characters");
         }
    }
    else
    {
        alert("Try again");
    }
}