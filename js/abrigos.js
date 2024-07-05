import { getAllropa } from "./app.js"


let abrigos = async()=>{
    let abrigo = getAllropa();
    let abrigos = abrigos[0];

    let contenedor1 = document.querySelector("#contenedor_pro"); 
    let contenedor2 = document-querySelector("#contenedor_pro2");


    let plantilla = `
    <div id="contenedor_pro" class="contenedor_products">
    <div class="contenedor_article">
        <img src="storage/image/camisa.png" alt="">
        <div class="cont_price">
        </div>
    </div>
    <div class="contenedor_article">
        <img src="storage/image/camisa.png" alt="">

        <div class="cont_price">
        </div>
    </div>
    <div class="contenedor_article">
        <img src="storage/image/camisa.png" alt="">

        <div class="cont_price">
        </div>
    </div>
    <div class="contenedor_article">
        <img src="storage/image/camisa.png" alt="">

        <div class="cont_price">
        </div>
    </div>
    </div>
    `;
    return contenedor1 =  plantilla;
    let plantilla2 = `
    <div id="contenedor_pro2" class="contenedor_products2">   
        <div class="contenedor_article2">
            <img src="storage/image/camisa.png" alt="">
            <div class="cont_price">
            </div>
        </div>
        <div class="contenedor_article2">
            <img src="storage/image/camisa.png" alt="">

            <div class="cont_price">
            </div>
        </div>
        <div class="contenedor_article2">
            <img src="storage/image/camisa.png" alt="">
            <div class="cont_price">
            </div>
        </div>
        <div class="contenedor_article2">
            <img src="storage/image/camisa.png" alt="">
            <div class="cont_price">
            </div>
        </div>
    </div>
        `;
        return contenedor2 =  plantilla;
}