let centerFace = document.getElementById("center-face");

function changeFace(imgSrc) {
    console.log(imgSrc);
    centerFace.src = "faces/" + imgSrc;
}

function addHoverFaceChanger(element, index, array) {
    element.addEventListener("mouseenter", event => { changeFace("face-" + index + ".png") })
}

document.querySelectorAll(".select-hover").forEach(addHoverFaceChanger);

// let topLeft = document.getElementsByClassName("select-button")[0];
// topLeft.addEventListener("mouseenter", event => { changeFace("face-0.png") });

// let topMiddle = document.getElementsByClassName("select-button")[1];
// topMiddle.addEventListener("mouseenter", event => { changeFace("face-1.png") });

