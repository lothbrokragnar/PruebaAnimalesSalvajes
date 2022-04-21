import {
    Leon,
    Lobo,
    Oso,
    Serpiente,
    Aguila
} from "./Especies.js";

let datosAnimales = (() => {
    const url = "./animales.json";
    const request = async (url) => {
        const results = await fetch(url);
        const myArray = await results.json();
        console.log(myArray.animales);

        document.getElementById("btnRegistrar").addEventListener('click', () => {

            let animalName = document.getElementById("animal").value;
            let animalAge = document.getElementById("edad").value;
            let animalComments = document.getElementById("comentarios").value;
            let animalPreview = document.getElementById("preview");
            let animalBox = document.getElementById("Animales");
            let $bodyModalAnimal = document.getElementById("#modalAnimal .modal-body");

            let validar = (() => {
                if (animalName == "" || animalAge == "" || animalComments == "") {
                    alert("Debe ingresar todos los datos solicitados")
                    limpiar();
                } else {

                    let animalLoop = (() => {
                        for (let i = 0; i < myArray.animales.length; i++) {
                            if (myArray.animales[i].name === animalName) {
                                animalPreview.innerHTML = `<img src='assets/imgs/${myArray.animales[i].imagen}' class='h-100 w-75' style='object-fit: cover;'>`;
                                animalBox.insertAdjacentHTML('beforeend', `
                            <div class='card w-25 h-50' style='width: 18rem;'>
                                    <img src='assets/imgs/${myArray.animales[i].imagen}' class='card-img-top h-75' style='object-fit: cover;'>
                                <div class='card-body bg-secondary h-25 p-0 d-flex align-content-center justify-content-center'>
                                    <img class='audio audio${myArray.animales[i].name}' type='button' src='assets/imgs/audio.svg' class='w-25'>
                                </div>
                            </div>`)
                            }
                        }
                    })();
                    
                    if (animalName === "Leon") {
                        let newLeon = new Leon(animalName, animalAge, myArray.animales[0].imagen, animalComments, myArray.animales[0].sonido)
                        document.querySelector(".audioLeon").addEventListener('click', () => {
                            newLeon.Rugir()
                        })
                        console.log(newLeon.getComentarios())

                    } else if (animalName === "Lobo") {
                        let newLobo = new Lobo(animalName, animalAge, myArray.animales[1].imagen, animalComments, myArray.animales[1].sonido)
                        document.querySelector(".audioLobo").addEventListener('click', () => {
                            newLobo.Aullar()
                        })
                        console.log(newLobo.getComentarios())

                    } else if (animalName === "Oso") {
                        let newOso = new Oso(animalName, animalAge, myArray.animales[2].imagen, animalComments, myArray.animales[2].sonido)
                        document.querySelector(".audioOso").addEventListener('click', () => {
                            newOso.Gruñir()
                        })
                        console.log(newOso.getComentarios())

                    } else if (animalName === "Serpiente") {
                        let newSerpiente = new Serpiente(animalName, animalAge, myArray.animales[3].imagen, animalComments, myArray.animales[3].sonido)
                        document.querySelector(".audioSerpiente").addEventListener('click', () => {
                            newSerpiente.Sisear()
                        })
                        console.log(newSerpiente.getComentarios())

                    } else if (animalName === "Aguila") {
                        let newAguila = new Aguila(animalName, animalAge, myArray.animales[4].imagen, animalComments, myArray.animales[4].sonido)
                        document.querySelector(".audioAguila").addEventListener('click', () => {
                            newAguila.Chillar()
                        })
                        console.log(newAguila.getComentarios())
                    }

                    // Se me fue en collera el modal :(... Fxna todo lo demás...
                    // animalBox.addEventListener("click", () => {
                    //     console.log("Hola mundo, soy un ", animalName)

                    //     $bodyModalAnimal.innerHTML = `<img src='assets/imgs/${myArray.animales[i].imagen}' class='h-100 w-75' style='object-fit: cover;'>`;
                        
                    //       //Levantar el modal
                    //     $('#modalAnimal').modal('show')
                    // } )
                }
            })();




            limpiar();
        })
        let limpiar = () => {
            document.getElementById("animal").value = "";
            document.getElementById("edad").value = "";
            document.getElementById("comentarios").value = "";
        }
    }
    return request(url)
})();