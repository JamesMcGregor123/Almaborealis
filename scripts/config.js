//Body variables
const bodySelect = document.getElementById("body-pick");
const bodyImage = document.getElementById("body-img");
//Arm Variables
const armSelect = document.getElementById("arm-pick");
const armImage = document.getElementById("arm-img");
//Collar Variables
const collarSelect = document.getElementById("collar-pick");
const collarImage = document.getElementById("collar-img");
//Hem Variables
const hemSelect = document.getElementById("hem-pick");
const hemImage = document.getElementById("hem-img");

//Changes body colour
function bodyChange() {
    let colour = bodySelect.value;
    bodyImage.src = `img/config/jumper/jumper-body-lowres-${colour}.png`;
}
//Changes arm colour
function armChange() {
    let colour = armSelect.value;
    armImage.src = `img/config/jumper/jumper-arm-lowres-${colour}.png`;
}
//Changes collar colour
function collarChange() {
    let colour = collarSelect.value;
    collarImage.src = `img/config/jumper/jumper-neck-lowres-${colour}.png`;
}
//Changes hem colour
function hemChange() {
    let colour = hemSelect.value;
    hemImage.src = `img/config/jumper/jumper-hem-lowres-${colour}.png`;
}