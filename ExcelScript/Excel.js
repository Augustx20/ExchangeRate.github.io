const xlsx = require("xlsx")
const CostaRica = require('../TasasCostaRica/CostaRica');
const Uruguay = require('../TasasUruguay/Uruguay');
const Colombia = require('../TasaColombia/Colombia');
const Peru = require('../TasasPeru/Peru')
const Chile = require('../TasasChile/Chile');
const Guatemala = require('../TasaGuatemala/Guatemala')
const Oanda = require('../Oanda/Oanda');
const Honduras = require('../TasaHonduras/Honduras')

const SaveExcel = async () => {

  setTimeout(() => {
    // Bancos
    let caso = CostaRica.Cr[0];
    let caso2 = Uruguay.ArrayU[0];
    let caso3 = Colombia.ArrayCo[0];
    let caso4 = Peru.Peusd[0];
    let caso5 = Peru.PeruEur[0];
    let caso6 = Chile.ChileArray[0];
    let caso7 = Chile.ChileArray[1];
    let caso8 = Guatemala.GTQ[0]
    let caso9 = Honduras.ArrayHn[0]
//  Oanda
    let EURUSD = Oanda.oandax[0];
    let EURCOP = Oanda.oandax[1];
    let CNYUSD = Oanda.oandax[2];
    let JPYUSD = Oanda.oandax[3];
    let CNYCOP = Oanda.oandax[4];
    let JPYCOP = Oanda.oandax[5];
    let BRLUSD = Oanda.oandax[6];
    let KRWUSD = Oanda.oandax[7];
    let USDCLP = Oanda.oandax[8];
    let EURCLP = Oanda.oandax[9];
    //  Honduras Oanda
    let BRLHNL = Oanda.oandax[10];
    let CNYHNL = Oanda.oandax[11];
    let EURHNL = Oanda.oandax[12];
    let GBPHNL = Oanda.oandax[13];
    let JPYHNL = Oanda.oandax[14];
    let MXNHNL = Oanda.oandax[15];
    let HKDUSD = Oanda.oandax[16];
    let HKDHNL = Oanda.oandax[17];
    const wb = xlsx.readFile("Datos.xlsx");

const datos = [
    ["","Bancos","","","","Oanda"],
    ["Country","To /From","Amount","","","To/From","Amount"],
    ["Costa Rica","USD CRC",caso,"","","EUR USD",EURUSD],
    ["Uruguay","USD UYU",caso2,"","","EUR COP",EURCOP],
    ["Colombia","USD COP",caso3,"","","CNY USD",CNYUSD],
    ["Peru","USD PEN",caso4,"","","JPY USD",JPYUSD],
    ["Peru","EUR PEN",caso5,"","","CNY COP",CNYCOP],
    ["Chile","USD CLP",caso6,"","","JPY COP",JPYCOP],
    ["Chile","EUR CLP",caso7,"","","BRL USD",BRLUSD],
    ["Guatemala","USD GTQ",caso8,"","","KRW USD",KRWUSD],
    ["Honduras","USD HNL",caso9,"","","USD CLP",USDCLP],
    ["","","","","","EUR CLP",EURCLP],
    ["","","","","","BRL HNL",BRLHNL],
    ["","","","","","CNY HNL",CNYHNL],
    ["","","","","","EUR HNL",EURHNL],
    ["","","","","","GBP HNL",GBPHNL],
    ["","","","","","JPY HNL",JPYHNL],
    ["","","","","","MXN HNL",MXNHNL],
    ["","","","","","HKD USD",HKDUSD],
    ["","","","","","HKD HNL",HKDHNL],
  ];

  var ws = xlsx.utils.aoa_to_sheet(datos);

wb.Sheets['Datos'] = ws;

  xlsx.writeFile(wb, "Datos.xlsx"); 
  
  console.log("Excel Actualizado")
}, 6500)

}

module.exports = {
    SaveExcel
}