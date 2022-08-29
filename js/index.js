function getDecision() {
    var decision = document.getElementsByClassName("button").value;

    if (decision==1){
        curScene=2; 
        message = "You have arrived at a cute little house in the woods.";
    }

    else{
        curScene = 3;
        message ="You are standing on the bridge overlooking a peaceful stream."
    }

    document.getElementById("sceneimg").src= "scene" +curScene+".png"
}