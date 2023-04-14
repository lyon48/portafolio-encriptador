    var input = document.getElementById("txtTransform")
    var output = document.getElementById("txtTranslate");
    
    
    function desencriptar () {
        var mensaje = input.value.toString().toLowerCase();

        mensaje = mensaje.split('');
        var i = 0;
        var mensajeprov = [];

        while (i < mensaje.length) {
            switch (mensaje[i]) {
                case "a":
                    mensajeprov.push("a");
                    i = i + 2;
                    break;
                case "e":
                    mensajeprov.push("e")
                    i = i + 5;
                    break;
                case "i":
                case "o":
                case "u":
                    mensajeprov.push(mensaje[i]);
                    i = i + 4;
                    break;
                default:
                    mensajeprov.push(mensaje[i]);
                    i++;
                    break;
            }
        }

        mensaje = mensajeprov.join('');

        mostrar();

        input.value = "";
        output.value = mensaje;
    }

    function encriptar() {
        var mensaje = input.value.toString().toLowerCase();

        mensaje = mensaje.split('');

        for(var i = 0; i < mensaje.length; i++) {
            switch(mensaje[i]){
                case "a":
                    mensaje[i] = "ai";
                    break;
                case "e": 
                    mensaje[i] = "enter";
                    break;
                case "i":
                    mensaje[i] = "imes";
                    break;
                case "o":
                    mensaje[i] = "ober";
                    break;
                case "u":
                    mensaje[i] = "ufat";
                    break;
                default: 
                    break;
            }
        }

        mensaje = mensaje.join('');

        mostrar();

        input.value = "";
        output.value = mensaje;
    }

    function copiar () {
        var copyText = document.getElementById("txtTranslate");

        copyText.select();
        copyText.setSelectionRange(0,99999);
        navigator.clipboard.writeText(copyText.value)
        .then(() => {
            console.log("Succesfully copied");
        })
        .catch(()=> {
            console.log("Something went wrong");
        });
    }

    function mostrar () {
        var img = document.getElementById("img_Recuadro");
        var span = document.getElementById("message");

        img.classList.add("ocult");
        span.classList.add("ocult");

        output.classList.remove("ocult");
        btnCopy.classList.remove("ocult")
    }

    var btnDesencriptar = document.getElementById("btnDesencriptar");
    btnDesencriptar.onclick = desencriptar;

    var btnEncriptar = document.getElementById("btnEncriptar");
    btnEncriptar.onclick = encriptar;

    var btnCopy =  document.getElementById("copy");
    btnCopy.onclick = copiar;