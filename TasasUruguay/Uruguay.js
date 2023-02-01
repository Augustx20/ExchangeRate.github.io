const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');


const url = "https://www.bcu.gub.uy/Paginas/Default.aspx "

const ArrayU = [];
/* Banco Uruguay*/
const BancoUruguayUSD = async () => {
    const ArrayUY = [];
   
        const header = randomUseragent.getRandom()
        const browser = await puppeteer.launch(
            {heandless: false,});
            const page = await browser.newPage();
            await page.setUserAgent(header)
            await page.setDefaultNavigationTimeout(0);
            await page.goto(url);
            await page.waitForSelector('#\\32 225');
                    try {
                    const grabParagraphBancoUru= await page.evaluate(() =>{
                    const pgTag = document.querySelector("#\\32 225 > div > div > span:nth-child(2)").innerHTML;
                    return pgTag;
                    });
                    ArrayUY.push(grabParagraphBancoUru)} 
                    catch(error){
                       console.error(error)
                    }
        await browser.close()
        
        if(ArrayUY.length == 0) {
            let valor = ArrayUY.pop()
            ArrayU.push(valor)
            console.log("Banco Uruguay " + valor|| undefined );
        } 
        
            let valor1 = ArrayUY.pop()
            let EditComa = valor1.replace(/,/g,'.')
            let numero = Number(EditComa)
            console.log("Banco Uruguay " + numero|| undefined );
            ArrayU.push(numero)
}
module.exports = {

    BancoUruguayUSD,
    ArrayU,
}


