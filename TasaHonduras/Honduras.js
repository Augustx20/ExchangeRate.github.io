const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');
const moment = require('moment');       


let hoy = moment().format('dddd');
let fechaexacta = moment('2023-01-02').add(7, 'days').format('dddd');
const ArrayHn = []
const url = "https://www.ficohsa.com/hn/honduras/tipo-cambio/"

const Honduras = async () => {

    if (hoy == fechaexacta) {
    console.log("Se ejecutara la tasa de Honduras")
        
    const header = randomUseragent.getRandom()
    const browser = await puppeteer.launch(
        { 
        handless: false 
        }
        );
    const page = await browser.newPage();
    await page.setUserAgent(header)
    await page.setDefaultNavigationTimeout(0);
    await page.goto(url);
    await page.waitForSelector('#site-banco-honduras');

        const grabParagraphBancHn = await page.evaluate(() =>{
        const pgTag =document.querySelector("#site-banco-honduras > div:nth-child(10) > div.col-8.col-md-8.col-sm-12.padding-main.padding-right-10.tab1-padding-right-0 > article:nth-child(1) > p:nth-child(4) > span > span > span > span > span > span").innerHTML;
        return pgTag;
    });
    await browser.close()
     let mensaje = grabParagraphBancHn;
     let arr = mensaje.split(' ')
     let numeroHn = arr[2];
    let numero = Number(numeroHn);
    console.log(`Banco Honduras ${numero}`);
    ArrayHn.push(numero)
} else {}}  ;

module.exports = {
    ArrayHn,
    Honduras
}