img.style.visibility = 'visible';







function bgChange(){

    document.body.style.backgroundColor = "blue"


}



function AddH1(){

    var header1 = document.getElementById("demo")
    header1.innerHTML = "Be the best version of you!"


}

function AddTime(){

    var Time1 = document.getElementById("time")
    Time1.innerHTML = "Fri May 26 2023 10:08:11 GMT-0200 (centraleuropeisk sommartid)"


}


function ChangeIMG(){

    document.getElementById("pic").src = "dice-6.png";

}

function HideIMG(){

  var MainImg = document.getElementById("pic")
  MainImg.style.visibility = ('hidden');


}

function ShowIMG(){

    var MainImg = document.getElementById("pic")
    MainImg.style.visibility = ('visible');
    
  
  }



