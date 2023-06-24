const input = document.querySelector(".user-input")
const pass = document.querySelector(".pass-input")
const submit = document.querySelector(".signin-button")
const userMsg = document.querySelector(".username-msg")
const passMsg = document.querySelector(".password-msg")
const successfullyMsg = document.querySelector(".signin-status")
submit.addEventListener("click", btnHandler)

function btnHandler(){
    if (input.value.includes("@") && input.value.includes(".") && pass.value.length >= 4) {
        console.log("hamechi ali")
        userMsg.innerHTML = ""
        passMsg.innerHTML = ""
        let userData = {
            email: input.value,
            password: pass.value,
        }
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(Response => {
                if (Response.ok) {
                    successfullyMsg.innerHTML = "You signed in successfully"
                }
            })


    } else {
        if (!(input.value.includes("@")) || input.value.includes(".")) {
            console.log("Email moshkel darad")
            userMsg.innerHTML = "Please enter a valid Email"
        }
        if (input.value.includes("@") && input.value.includes(".")) {
            userMsg.innerHTML = ""
        }
        if(pass.value.length>=4){
            pass.innerHTML=""
        }
        if (pass.value.length == 0) {
            // console.log("pass moshkel darad")
            passMsg.innerHTML = "Please enter your password"
        } else if (pass.value.length < 4) {
            passMsg.innerHTML = "Your password is too short"
        }
    }
}