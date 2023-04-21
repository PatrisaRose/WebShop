import { adatBeolvas } from "./fetch.js";
import { vilagosSotet, RGBVilagitas } from "./formazas.js";
import { osszeallitPc } from "./adatkezeles.js";
import { bejelentkezes } from "./felhasznalokKezelese.js";
let PCLista = [];
let PCKulcsok = [];
let tartozekLista = [];
let tartozekKulcsok = [];
let konzolKulcsok = [];
let konzolLista = [];
let Article;
let pc;
let konzol;
let tartozek;
let vegpont = "adatok.json";
$(function () {
  adatBeolvas(vegpont, listaFeltolt);
});

function listaFeltolt(adat) {
  PCLista = adat.PCLista;
  PCKulcsok = adat.PCKulcsok;
  tartozekKulcsok = adat.tartozekKulcsok;
  tartozekLista = adat.tartozekLista;
  konzolKulcsok = adat.konzolKulcsok;
  konzolLista = adat.konzolLista
  init();
}

function init() {
  Article = $("article");
  pc = $("button.kek");
  konzol = $("button.rszin");
  tartozek = $("button.lila");
  Article.html(osszeallitPc(PCLista, PCKulcsok));
  pc.on("click", function () {
    Article.html(osszeallitPc(PCLista, PCKulcsok));
  });
  tartozek.on("click", function () {
    Article.html(osszeallitPc(tartozekLista, tartozekKulcsok));
  });
  konzol.on("click", function () {
    Article.html(osszeallitPc(konzolLista, konzolKulcsok));
  });

  vilagosSotet();
  RGBVilagitas();
  bejelentkezes();
}
