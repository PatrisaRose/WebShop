import { adatBeolvas } from "./fetch.js";
import { osszeallitTablazat } from "./adatkezeles.js";
$(function () {
  adatBeolvas(vegpont, listaFeltolt);
});
let PCLista = [];
let PCKulcsok = [];
let tartozekLista = [];
let tartozekKulcsok = [];
let konzolKulcsok = [];
let konzolLista = [];
let felhasznalok = [];
let vegpont = "adatok.json";

function listaFeltolt(adat) {
  PCLista = adat.PCLista;
  PCKulcsok = adat.PCKulcsok;
  tartozekKulcsok = adat.tartozekKulcsok;
  tartozekLista = adat.tartozekLista;
  konzolKulcsok = adat.konzolKulcsok;
  konzolLista = adat.konzolLista;
}

function felhasznaloFeltolt(adat) {
  felhasznalok = adat.felhasznalok;
}

let aside = $("aside");
/*export function felhasznalokKezelese() {
  localStorage.setItem("Admin", JSON.stringify(felhasznalok));
  let aside = $("aside");
  $(aside).ready(function () {
    $(".regisztracio").on("click", function () {
      let felhasznalo = $("#username").val();
      let jelszo = $("#password").val();
      let felhasznaloObj = {
        nev: felhasznalo,
        jelszo: jelszo,
      };
      felhasznalok.push(felhasznaloObj);
      localStorage.setItem(felhasznalo, JSON.stringify(felhasznaloObj));
      alert("Sikeres volt az adatok felvitele!");
    });
  });
  return felhasznalok;
} */

export function bejelentkezes() {
  vegpont = "felhasznalok.json";
  adatBeolvas(vegpont, felhasznaloFeltolt);
  $(aside).ready(function () {
    $(".bejelentkezes").on("click", function (oldal) {
      oldal.preventDefault();
      let felhasznalo = $("#username").val();
      let jelszo = $("#password").val();
      let talaltFelhasznalo = false;

      for (let index = 0; index < felhasznalok.length; index++) {
        if (
          felhasznalo == felhasznalok[index].nev &&
          jelszo == felhasznalok[index].jelszo
        ) {
          talaltFelhasznalo = true;
          alert("Sikeresen bejelentkeztél!");
        }
      }
      if (talaltFelhasznalo == false) {
        alert("Hibás felhasználónév vagy jelszó!");
      } else {
        if (felhasznalo == "admin") {
          opciok();
        } else if (felhasznalo != "admin") {
          alert(
            "Üdvözlünk a GG Storeban, sikeresen bejelentkeztél! Jó vásárlást kívánunk!"
          );
        }
      }
    });
  });
}

function opciok() {
  let txt2 = "";
  txt2 += `<form>`;
  txt2 += `<label for="browser" id="tipusok">Kérlek válaszd ki, milyen fajta terméket szeretnél hozzáadni:</label>`;
  txt2 += `<select class="tipusok" id="tipusok" name="tipusok">`;
  txt2 += `<option value="alap">Kérlek válassz</option>`;
  txt2 += `<option value="Számítógép">Számítógép</option>`;
  txt2 += `<option value="Konzol">Konzol</option>`;
  txt2 += `<option value="Tartozékok">Tartozékok</option>`;
  txt2 += `</select>`;
  txt2 += `</form>`;
  aside.html(txt2);
  $("select").change(function (oldal) {
    oldal.preventDefault();
    let txt3 = "";
    let valasztas = $(".tipusok :selected").text();
    if (valasztas === "Számítógép") {
      txt3 += `<form>`;
      txt3 += `<fieldset class="adatInput" >`;
      txt3 += `<legend>Új Termék felvétele:</legend>`;

      for (let i = 0; i < PCKulcsok.length; i++) {
        for (const key in PCKulcsok[i]) {
          if (key != "termekKepe") {
            txt3 += `<div>`;
            txt3 += `<label for="${PCKulcsok[key]}">${PCKulcsok[key]}:</label>`;
            txt3 += `<input type="text" id="${PCKulcsok[key]}" name="${PCKulcsok[key]}"/>`;
            txt3 += `</div>`;
          }
        }
      }
      txt3 += `<div>`;
      txt3 += `<label for="tkepe">Termék Képe:</label>`;
      txt3 += `<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">`;
      txt3 += `</div>`;
      txt3 += `</fieldset>`;
      txt3 += `<button class="kuldes">Küldés</button>`;
      txt3 += `</form>`;

      aside.html(txt3);

      $(".kuldes").on("click", function (oldal) {
        oldal.preventDefault();
        let termek = {};
        const ADAT = $(".adatInput input");
        let i = 0;
        for (const kulcs in PCLista[i]) {
          termek[kulcs] = `${ADAT[i].value}`;
          i++;
        }
        PCLista.push(termek);
        aside.append(osszeallitTablazat(PCLista, PCKulcsok));
      });
    } else if (valasztas === "Konzol") {
      console.log($("select option"));
      txt3 += `<form>`;
      txt3 += `<fieldset class="adatInput">`;
      txt3 += `<legend>Új Termék felvétele:</legend>`;

      for (let i = 0; i < konzolKulcsok.length; i++) {
        const key = konzolKulcsok[0];
        if (key == "termekKepe") txt3 += `<div>`;
        txt3 += `<label for="${konzolKulcsok[key][i]}">${konzolKulcsok.termekNeve}:</label>`;
        txt3 += `<input type="text" id="${konzolKulcsok[key][i]}" name="${konzolKulcsok[key][i]}"/>`;
        txt3 += `</div>`;
      }

      txt3 += `<div>`;
      txt3 += `<label for="tkepe">Termék Képe:</label>`;
      txt3 += `<input type="file"
      id="avatar" name="avatar"
      accept="image/png, image/jpeg">`;
      txt3 += `</div>`;
      txt3 += `</fieldset>`;
      txt3 += `<button class="kuldes" >Küldés</button>`;
      txt3 += `</form>`;
      aside.html(txt2);
      aside.html(txt3);
      $(".kuldes").on("click", function (oldal) {
        oldal.preventDefault();
        let termek = {};
        const ADAT = $(".adatInput input");
        let i = 0;
        for (const kulcs in tartozekLista[i]) {
          termek[kulcs] = `${ADAT[i].value}`;
          i++;
        }
        tartozekLista.push(termek);
        aside.append(osszeallitTablazat(tartozekLista, tartozekKulcsok));
      });
    } else if (valasztas === "Tartozékok") {
      txt3 += `<form>`;
      txt3 += `<fieldset class="adatInput">`;
      txt3 += `<legend>Új Termék felvétele:</legend>`;

      for (let i = 0; i < tartozekKulcsok.length; i++) {
        const key = tartozekKulcsok[0];
        if (key == "termekKepe") txt3 += `<div>`;
        txt3 += `<label for="${tartozekKulcsok[key][i]}">${tartozekKulcsok.termekNeve}:</label>`;
        txt3 += `<input type="text" id="${tartozekKulcsok[key][i]}" name="${tartozekKulcsok[key][i]}"/>`;
        txt3 += `</div>`;
      }

      txt3 += `<div>`;
      txt3 += `<label for="tkepe">Termék Képe:</label>`;
      txt3 += `<input type="file"
      id="avatar" name="avatar"
      accept="image/png, image/jpeg">`;
      txt3 += `</div>`;
      txt3 += `</fieldset>`;
      txt3 += `<button class="kuldes" >Küldés</button>`;
      txt3 += `</form>`;
      aside.html(txt2);
      aside.html(txt3);
      $(".kuldes").on("click", function (oldal) {
        oldal.preventDefault();
        let termek = {};
        const ADAT = $(".adatInput input");
        let i = 0;
        for (const kulcs in konzolLista[i]) {
          termek[kulcs] = `${ADAT[i].value}`;
          i++;
        }
        konzolLista.push(termek);
        aside.append(osszeallitTablazat(konzolLista, konzolKulcsok));
      });
    }
  });
}
