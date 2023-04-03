import {PCLista, Kulcsok} from "./adatok.js";
import {osszeallitPc} from "./adatkezeles.js";
import {vilagosSotet, RGBVilagitas} from "./formazas.js";
let Article;

$(function () {
  Article = $("article");
  Article.html(osszeallitPc(PCLista, Kulcsok));
  vilagosSotet();
  RGBVilagitas();
});


