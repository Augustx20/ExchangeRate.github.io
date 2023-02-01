const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');
// Desarrollo de imagen
const url = "https://www.bcu.gub.uy/Paginas/Default.aspx "
const urlChile = "https://www.bcentral.cl/inicio";
const urlColombia = "https://www.banrep.gov.co/es/"
const urlCostaRica = "https://gee.bccr.fi.cr/indicadoreseconomicos/Cuadros/frmVerCatCuadro.aspx?idioma=1&CodCuadro=%20400"
const urlPeru = "https://www.sbs.gob.pe/app/pp/SISTIP_PORTAL/Paginas/Publicacion/TipoCambioPromedio.aspx "
const urlEurUsd = "https://www.oanda.com/currency-converter/es/?from=EUR&to=USD&amount=1"
const urlEurCop = "https://www.oanda.com/currency-converter/es/?from=EUR&to=COP&amount=1"
const urlCnyUsd = "https://www.oanda.com/currency-converter/es/?from=CNY&to=USD&amount=1"
const urlCnyCop = "https://www.oanda.com/currency-converter/es/?from=CNY&to=COP&amount=1"
const urlJpyUsd = "https://www.oanda.com/currency-converter/es/?from=JPY&to=USD&amount=1"
const urlJpyCop = "https://www.oanda.com/currency-converter/es/?from=Jpy&to=COP&amount=1"
const urlBrlUsd = "https://www.oanda.com/currency-converter/es/?from=Brl&to=USD&amount=1"


     
const ImageEurUsd = async () => {

    // Banco Peru USD EUR

    const header = randomUseragent.getRandom()
    const browser = await puppeteer.launch({heandless: false });
    const page = await browser.newPage();   
    await page.setUserAgent(header)
    await page.goto(urlPeru);
    await page.setViewport({ width: 600, height: 600 });
    await page.screenshot({ path: `BancoPeru.jpg` });


    //Banco Uruguay

    await page.setUserAgent(header)
    await page.goto(url);
    await page.setViewport({ width: 1920, height: 1080 });
    await page.screenshot({ path: `BancoUruguay.jpg` });

    //Banco Chile

    await page.setUserAgent(header)
    await page.goto(urlChile);
    await page.setViewport({ width: 1000, height: 500 });
    await page.screenshot({ path: `BancoChile.jpg` });

    // Banco Colombia 

    await page.setUserAgent(header)
    await page.goto(urlColombia);
    await page.setViewport({ width: 1920, height: 2000 });
    await page.screenshot({ path: `BancoColombia.jpg` });

    // Banco Costa Rica

    await page.setUserAgent(header)
    await page.goto(urlCostaRica);
    await page.setViewport({ width: 500, height: 680 });
    await page.screenshot({ path: `BancoCostaRica.jpg` });

    //EUR USD

    await page.setUserAgent(header)
    await page.goto(urlEurUsd);
    await page.setViewport({ width: 1000, height: 800 });
    await page.screenshot({ path: `OandaEurUsd.jpg` });
    
    //EUR COP

    await page.setUserAgent(header)
    await page.goto(urlEurCop);
    await page.setViewport({ width: 1000, height: 800 });
    await page.screenshot({ path: `OandaEurCop.jpg` });
    

    // CNY USD

    await page.setUserAgent(header)
    await page.goto(urlCnyUsd);
    await page.setViewport({ width: 1000, height: 800 });
    await page.screenshot({ path: `OandaCnyUsd.jpg` });
    

    // JPY USD

    await page.setUserAgent(header)
    await page.goto(urlJpyUsd);        
    await page.setViewport({ width: 1000, height: 800 });
    await page.screenshot({ path: `OandaJpyUsd.jpg` });
    

    // CNY COP
    await page.setUserAgent(header)
    await page.goto(urlCnyCop);

    await page.setViewport({ width: 1000, height: 800 });
    await page.screenshot({ path: `OandaCnyCop.jpg` });
    
    // JPY COP
    
    await page.setUserAgent(header)
    await page.goto(urlJpyCop);    
    await page.setViewport({ width: 1000, height: 800 });
    await page.screenshot({ path: `OandaJpyCop.jpg` });
    

    // BRL USD
    await page.setUserAgent(header)
    await page.goto(urlBrlUsd);
    await page.setViewport({ width: 1000, height: 800});
    await page.screenshot({ path: `OandaBrlUsd.jpg` });
    

    // KRW USD
    await page.setUserAgent(header)
    await page.goto("https://www.oanda.com/currency-converter/es/?from=Krw&to=USD&amount=1");
    await page.setViewport({ width: 1000, height: 800 });
    await page.screenshot({ path: `OandaKrwUsd.jpg` });
    
    // EUR CLP
    await page.setUserAgent(header)
    await page.goto("https://www.oanda.com/currency-converter/es/?from=Eur&to=Clp&amount=1");
    await page.setViewport({ width: 1000, height: 800 });
    await page.screenshot({ path: `OandaEurClp.jpg` });

    
    // USD CLP
    await page.setUserAgent(header)
    await page.goto("https://www.oanda.com/currency-converter/es/?from=Usd&to=Clp&amount=1");
    await page.setViewport({ width: 1300, height: 800 });
    await page.screenshot({ path: `OandaUsdClp.jpg` });
    await browser.close()


    console.log("Imagenes Descargadas")
}

const test = async () => {

    // Banco Peru USD EURdocument.querySelector("#htmlview\\!1Div > div.relativa > table > tbody > tr > td:nth-child(1) > button")

    const header = randomUseragent.getRandom()
    const browser = await puppeteer.launch({heandless: false, args: ['--disable-setuid-sandbox', '--no-sandbox'] });
    const page = await browser.newPage();   
    await page.setUserAgent(header)
    await page.goto(url);
    await page.setViewport({ width: 1920, height: 1080 });
    await page.screenshot({ path: `BancoUruguay.jpg` });
    await browser.close()
}
ImageEurUsd();
// test()