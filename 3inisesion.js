const email = document.getElementById("email")
        const pass = document.getElementById("contraseña")
        const form = document.getElementById("form")
        const parrafo = document.getElementById("warnings")

        form.addEventListener("submit", e => {
            e.preventDefault()
            let warnings = ""
            let entrar = false
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
            parrafo.innerHTML = ""
            if (!regexEmail.test(email.value)) {
                warnings += 'El email no es válido <br>'
                entrar = true
            }
            if (pass.value.length < 8) {
                warnings += 'La contraseña no es válida <br>'
                entrar = true
            }

            if (entrar) {
                parrafo.innerHTML = warnings
            } else {
                parrafo.innerHTML = "Enviado"
                setTimeout(function () {
                    window.location.href = form.getAttribute("action");
                }, 1000); 
            }
        })