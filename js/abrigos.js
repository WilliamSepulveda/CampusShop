import { getAllropa } from "./app.js"


let abrigos = async()=>{
    let abrigo = getAllropa();
    let abrigos = abrigos[0];

    let plantilla = `
        <div class="contenedor_products">
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
    <div class="contenedor_products2">   
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
    return contenedor1 =  plantilla;
}