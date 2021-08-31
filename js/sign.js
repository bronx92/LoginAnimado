var signIn = document.querySelector("#sign-in");
var signUp = document.querySelector("#sign-up");
var body = document.querySelector("body");

signIn.addEventListener("click", function () {
    body.className = "js-sign-in";
});
signUp.addEventListener("click", function () {
    body.className = "js-sign-up";
});