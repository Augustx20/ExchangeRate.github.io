const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');
const Peusd = [];
const url = "https://www.sbs.gob.pe/app/pp/SISTIP_PORTAL/Paginas/Publicacion/TipoCambioPromedio.aspx "
const BancoPeruUSD = async () => {

/* Banco  Peru Usd*/
const header = randomUseragent.getRandom()
const browser = await puppeteer.launch({heandless: false });
const page = await browser.newPage();   
await page.setUserAgent(header)
await page.goto(url);
await page.waitForSelector('#ctl00_cphContent_rgTipoCambio_ctl00__0');
await page.setViewport({ width: 1920, height: 1080 });


const grabParagraphBancoPeruUsd= await page.evaluate(() =>{
    const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__0 > td:nth-child(3)").innerHTML;
    return pgTag;
});

// console.log("Banco Peru", grabParagraphBancoPeruUsd);

let numero = Number(grabParagraphBancoPeruUsd)
console.log("Banco Peru " + numero|| undefined );

await browser.close();
Peusd.push(numero);


}

const PeruEur = [];
const BancoPeruEur = async () => {

/* Banco Peru Eur*/
const header = randomUseragent.getRandom()
const browser = await puppeteer.launch({heandless: false });
const page = await browser.newPage();   
await page.setUserAgent(header)
await page.goto(url);
await page.waitForSelector('#ctl00_cphContent_rgTipoCambio_ctl00');
await page.setViewport({ width: 1920, height: 1080 });

const Miarray2 = []
   const grabParagraphPeLineaTex5Eur = await page.evaluate((linea5) => {
            const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__5 > td.APLI_fila3").innerHTML;
           return pgTag;
       })
       Miarray2.push(grabParagraphPeLineaTex5Eur)
try {
   const grabParagraphPeLineaTex6Eur = await page.evaluate(() =>{
       const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__6 > td.APLI_fila3").innerHTML;
       return pgTag;
      })
      Miarray2.push(grabParagraphPeLineaTex6Eur)
} catch (error){};
try {
   const grabParagraphPeLineaTex7Eur = await page.evaluate(() =>{
       const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__7 > td.APLI_fila3").innerHTML;
       return pgTag;
      });
      Miarray2.push(grabParagraphPeLineaTex7Eur)
} catch (error) {
}
try {
   const grabParagraphPeLineaTex8Eur = await page.evaluate(() =>{
       const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__8 > td.APLI_fila3").innerHTML;
       return pgTag.innerHTML;
      });
      Miarray2.push(grabParagraphPeLineaTex8Eur)    
} catch (error) {
}
//console.log(Miarray2);

const TasaEur = "Euro";
let linea5 = Miarray2[0];
let linea6 = Miarray2[1];
let linea7 = Miarray2[2];
let linea8 =  Miarray2[3];
const Miarray = [];
Miarray.push(linea5, linea6 ,linea7 ,linea8);
//console.log(Miarray);

switch (TasaEur) {
        case linea5:
            
            const grabParagraphPeLinea5Eur = await page.evaluate(() =>{
            const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__5 > td:nth-child(3)");
            return pgTag.innerHTML;
        })
        Miarray.push(grabParagraphPeLinea5Eur);
        break;
        case linea6:
                const grabParagraphPeLinea6Eur = await page.evaluate(() =>{
                const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__6 > td:nth-child(3)");
                return pgTag.innerHTML;
                })
                Miarray.push(grabParagraphPeLinea6Eur);
        break;
        case linea7:
                const grabParagraphPeLinea7Eur = await page.evaluate(() =>{
                const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__7 > td:nth-child(3)");
                return pgTag.innerHTML;
                })
                Miarray.push(grabParagraphPeLinea7Eur);
            break;            
        case linea8:
                const grabParagraphPeLinea8Eur = await page.evaluate(() =>{
                const pgTag =document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__8 > td:nth-child(3)");
                return pgTag.innerHTML;
                });
                Miarray.push(grabParagraphPeLinea8Eur);
            break;
        };
        await browser.close()

let numero = Miarray.pop();
// console.log("Banco Peru " + numero);
let numeroX = Number(numero)
console.log("Banco Peru " + numeroX|| undefined );


PeruEur.push(numeroX);
}
module.exports = {
    BancoPeruUSD,
    BancoPeruEur,
    Peusd,
    PeruEur,
}