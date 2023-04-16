import {fetchData} from './fetch.js'

let Article;
let pc;
let konzol;
let tartozek;

fetchData("adatok.json")
console.log(fetchData)

$(function () {
  Article = $("article");
  pc = $("button.kek");
  konzol = $("button.rszin");
  tartozek = $("button.lila");
  Article.html(osszeallitPc(PCLista, PCKulcsok));
  pc.on('click', function(){
    Article.html(osszeallitPc(PCLista, PCKulcsok));
  });
  tartozek.on("click", function(){
    
    Article.html(osszeallitPc(tartozekLista, tartozekKulcsok));
  });
  konzol.on("click", function(){
    
    Article.html(osszeallitPc(konzolLista, konzolKulcsok));
  });

  vilagosSotet();
  RGBVilagitas();
  felhasznalokKezelese();
  bejelentkezes();
});