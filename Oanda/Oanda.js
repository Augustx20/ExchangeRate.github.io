const puppeteer = require('puppeteer');
const moment = require('moment');       


let hoy = moment().format('dddd');
let fechaexacta = moment('2023-01-02').add(7, 'days').format('dddd');


const oandax = [];
const Oanda = async () => {

    const enlaces = [
        "https://www.oanda.com/currency-converter/es/?from=EUR&to=USD&amount=1",
        "https://www.oanda.com/currency-converter/es/?from=EUR&to=COP&amount=1",
        "https://www.oanda.com/currency-converter/es/?from=CNY&to=USD&amount=1",
        "https://www.oanda.com/currency-converter/es/?from=JPY&to=USD&amount=1",
        "https://www.oanda.com/currency-converter/es/?from=CNY&to=COP&amount=1",
        "https://www.oanda.com/currency-converter/es/?from=JPY&to=COP&amount=1",
        "https://www.oanda.com/currency-converter/es/?from=BRL&to=USD&amount=1",
        "https://www.oanda.com/currency-converter/es/?from=KRW&to=USD&amount=1",
        ]
    
        const books = [];
        const browser = await puppeteer.launch({ 
            handless: false,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        const page = await browser.newPage();   
            for(let enlace of enlaces){
                
                await page.goto(enlace);
                await page.waitForSelector('#cc-time-series-plot');
                const book = await page.evaluate(()=>{
                    const tmp = {};
                    tmp.Data = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)").innerHTML;
                    return tmp;
                });
                books.push(book);
                let valor = book.Data.replace(/,/g,'.');
                let numero = Number(valor)
                oandax.push(numero)
            };

    //
            const EnlacesChile = [
            "https://www.oanda.com/currency-converter/es/?from=USD&to=CLP&amount=1",
            "https://www.oanda.com/currency-converter/es/?from=EUR&to=CLP&amount=1",
            ]
            for(let Enlacesx of EnlacesChile){
            
            await page.goto(Enlacesx);
            await page.waitForSelector('#cc-time-series-plot');
            const Chile = await page.evaluate(()=>{
                const tmpx = {};
                tmpx.Data = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(3)").innerHTML;
                return tmpx;
            });
            books.push(Chile);
            let valorX = Chile.Data.replace(/,/g,'.');
            let numeroX = Number(valorX)
            oandax.push(numeroX)
        }
        if (hoy == fechaexacta){
            
            // Tasa de Honduras 
    
                const enlacesxx = [
                    "https://www.oanda.com/currency-converter/es/?from=BRL&to=HNL&amount=1",
                    "https://www.oanda.com/currency-converter/es/?from=CNY&to=HNL&amount=1",
                    "https://www.oanda.com/currency-converter/es/?from=EUR&to=HNL&amount=1",
                    "https://www.oanda.com/currency-converter/es/?from=GBP&to=HNL&amount=1",
                    "https://www.oanda.com/currency-converter/es/?from=JPY&to=HNL&amount=1",
                    "https://www.oanda.com/currency-converter/es/?from=MXN&to=HNL&amount=1",
                    "https://www.oanda.com/currency-converter/es/?from=HKD&to=USD&amount=1",
                    "https://www.oanda.com/currency-converter/es/?from=HKD&to=HNL&amount=1",
                    ]
                    const page = await browser.newPage();   
                        for(let enlaceh of enlacesxx){
                            
                            await page.goto(enlaceh);
                            await page.waitForSelector('#cc-time-series-plot');
                            const Honduras = await page.evaluate(()=>{
                                const tmp = {};
                                tmp.Data = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)").innerHTML;
                                return tmp;
                            });
                            books.push(Honduras);
                            let valorXx = Honduras.Data.replace(/,/g,'.');
                            let numeroXx = Number(valorXx)
                            oandax.push(numeroXx)
                            }} else{}
            await browser.close()



            console.log(oandax);
            console.log("Busqueda Finalizada")

}
module.exports = {
    Oanda,
    oandax,
    
}