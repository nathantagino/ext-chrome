// Lista de URLs seguras
var linksSeguros = [
  "intranet.usf.edu.br",
  "usf.edu.br",
  "youtube.com",
  "google.com",
  "www.bb.com.br",
  "www.caixa.gov.br",
  "www.itau.com.br",
  "www.bradesco.com.br",
  "www.santander.com.br",
  "www.bancointer.com.br",
  "www.original.com.br",
  "www.safra.com.br",
  "www.bancopan.com.br",
  "www.bancovotorantim.com.br",
  "www.bancobmg.com.br",
  "www.daycoval.com.br",
  "www.bancoc6.com.br",
  "www.banconeon.com.br",
  "www.modalmais.com.br",
  "www.bancopine.com.br",
  "www.sofisa.com.br",
  "www.abcbrasil.com.br",
  "www.bancopanamericano.com.br",
  "www.bancofibra.com.br",
  "www.bancobonsucesso.com.br",
  "www.americanas.com.br",
  "www.submarino.com.br",
  "www.shoptime.com.br",
  "www.magazineluiza.com.br",
  "www.mercadolivre.com.br",
  "www.casasbahia.com.br",
  "www.extra.com.br",
  "www.pontofrio.com.br",
  "www.kabum.com.br",
  "www.netshoes.com.br",
  "www.zattini.com.br",
  "www.dafiti.com.br",
  "www.lojasrenner.com.br",
  "www.marisa.com.br",
  "www.cea.com.br",
  "www.riachuelo.com.br",
  "www.centauro.com.br",
  "www.saraiva.com.br",
  "www.livrariacultura.com.br",
  "www.kalunga.com.br",
  "www.fastshop.com.br",
  "www.ricardoeletro.com.br",
  "www.carrefour.com.br",
  "www.walmart.com.br",
  "www.pernambucanas.com.br",
  "www.tokstok.com.br",
  "www.leroymerlin.com.br",
  "www.etna.com.br",
  "www.mobly.com.br",
  "www.madeiramadeira.com.br",
  "www.ifood.com.br",
  "www.rappi.com.br",
  "www.ubereats.com.br",
  "www.submarinoviagens.com.br",
  "www.decolar.com.br",
  "www.booking.com.br",
  "www.trivago.com.br",
  "www.airbnb.com.br",
  "www.elo7.com.br",
  "www.enjoei.com.br",
  "www.olx.com.br",
  "www.zoom.com.br",
  "www.buscape.com.br",
  "www.mercadopago.com.br",
  "www.pagseguro.com.br",
  "www.iherb.com.br",
  "www.belezanaweb.com.br",
  "www.sephora.com.br",
  "www.natura.com.br",
  "www.boticario.com.br",
  "www.thebeautybox.com.br",
  "www.gov.br/planalto",
  "www.senado.leg.br",
  "www.camara.leg.br",
  "www.stf.jus.br",
  "www.gov.br/economia",
  "www.saude.gov.br",
  "www.mec.gov.br",
  "www.gov.br/justica",
  "www.defesa.gov.br",
  "www.itamaraty.gov.br",
  "www.mma.gov.br",
  "www.gov.br/agricultura",
  "www.gov.br/mdr",
  "www.infraestrutura.gov.br",
  "www.turismo.gov.br",
  "www.mctic.gov.br",
  "www.mdh.gov.br",
  "www.gov.br/cidadania",
  "www.gov.br/trabalho"
];



function verificarLink(tabId, changeInfo, tab) {
  if (changeInfo.url || changeInfo.status === "complete") {
    // Verifica a URL atual
    var linkAtual = new URL(tab.url).hostname;

    var icone = "images/inseguro.png";
    if (linksSeguros.some(seguro => linkAtual.includes(seguro))) {
      icone = "images/seguro.png";
    }

    chrome.action.setIcon({ path: { 16: icone, 48: icone, 128: icone }, tabId: tabId });
  }
}

// Adiciona um ouvinte para o evento "chrome.tabs.onUpdated"
chrome.tabs.onUpdated.addListener(verificarLink);
