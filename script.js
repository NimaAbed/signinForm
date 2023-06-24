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

    }
}