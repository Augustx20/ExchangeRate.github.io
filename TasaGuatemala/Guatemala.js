const puppeteer = require('puppeteer');
const moment = require('moment');
const randomUseragent = require('random-useragent');


let url = "https://www.bancopromerica.com.gt/"
let hoy = moment().format('dddd');
let fechaexacta = moment('2023-01-06').add(7, 'days').format('dddd');

const GTQ = [];

const PageGuatemala = async () => {
//Guatemala Viernes
if (hoy == fechaexacta) {
 console.log("Hoy se ejecuta la Tasa de Guatemala") 
 
    const header = randomUseragent.getRandom() 
    const browser = await puppeteer.launch({heandless: false });
    const page = await browser.newPage();
    page.setUserAgent(header)
    await page.goto(url);
    await page.waitForSelector('#tipoCambioHomeAgencia');
    
    const grabParagraphBancoGua= await page.evaluate(() =>{
        const pgTag = document.querySelector("#tipoCambioHomeAgencia > div:nth-child(2) > p > span:nth-child(3)").innerHTML;
        return pgTag;
    })
    await browser.close()
    
    let numero = Number(grabParagraphBancoGua)
    GTQ.push(numero);
    console.log("Banco Guatemala", numero);
    
} else {}};

    

module.exports = {
    GTQ,
    PageGuatemala
}