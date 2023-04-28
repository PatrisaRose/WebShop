import { adatBeolvas } from "./fetch.js";
import { osszeallitTablazat, szures } from "./adatkezeles.js";
let PCLista = [];
let PCKulcsok = [];
let PCKepek = [
  "kepek/rogue.png",
  "kepek/skynetPC.png",
  "kepek/Ultra_i9_Pro_2.png",
  "kepek/Ryzen_9_5900X_3.png",
  "kepek/navon-nex-1401-black_1_m.png",
  "kepek/Acer_Travelmate.png",
  "kepek/Lenovo_Ideapad_3_Arctic_Grey.png",
  "kepek/HP_14S-FQ0036NL_White.png",
];
let tartozekLista = [];
let tartozekKulcsok = [];
let tartozekKepek = [
  "kepek/Havit_MS1017.png",
  "kepek/Acer_Predator_Cestus_330.png",
  "kepek/Trust_GXT_930_Jacx.png",
  "kepek/Glorious_Model_D_RGB.png",
  "kepek/FIFINE_A6V.png",
  "kepek/SteelSeries_QcK_XXL__67500.png",
  "kepek/White_Shark_GK-2101HU_SPARTAN-X.png",
  "kepek/Razer_Blackshark_V2_X.png",
];
let konzolKulcsok = [];
let konzolLista = [];
let konzolKepek = [
  "kepek/Sony_PlayStation_5__PS5.png",
  "kepek/Microsoft_Xbox_Series_X_1TB.png",
  "kepek/Nintendo_Switch.png",
  "kepek/BlackBird_BH1368_hordozható_Tetris.png",
  "kepek/Arcade1up_Capcom_Legacy.png",
  "kepek/PlayStation_5__PS5__DualSense.png",
  "kepek/Microsoft_Xbox_kontroller.png",
  "kepek/Nintendo_Joy-Con_kontroller_par.png",
];
let felhasznalok = [];
let vegpont = "adatok.json";
let kivalasztas = $(".kivalasztas");
let tablazat = $(".tablazat");
let inputokHelye = $(".inputokHelye");

$(function () {
  adatBeolvas(vegpont, listaFeltolt);
});

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
  let felhasznaloVegpont = "felhasznalok.json";
  adatBeolvas(felhasznaloVegpont, felhasznaloFeltolt);
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
  kivalasztas.append(txt2);
  tablazat.html(osszeallitTablazat(PCLista, PCKulcsok));
  szures(PCLista, PCKulcsok);
  $("select").change(function (oldal) {
    oldal.preventDefault();
    let txt3 = "";
    let valasztas = $(".tipusok :selected").text();
    if (valasztas === "Számítógép") {
      tablazat.html(osszeallitTablazat(PCLista, PCKulcsok));
      szures(PCLista, PCKulcsok);
      txt3 += `<form class="kuldes">`;
      txt3 += `<fieldset class="adatInput" >`;
      txt3 += `<legend>Új Termék felvétele:</legend>`;

      for (let i = 0; i < PCKulcsok.length; i++) {
        for (const key in PCKulcsok[i]) {
          if (key !== "termekKepe" && key !== "ar") {
            txt3 += `<div>`;
            txt3 += `<label for="${key}">` + PCKulcsok[i][key] + `:</label>`;
            txt3 += `<input pattern="[\\w]+" type="text" id="${key}" name="${key}"/>`;
            txt3 += `</div>`;
          } else if (key === "ar") {
            txt3 += `<div>`;
            txt3 += `<label for="${key}">` + PCKulcsok[i][key] + `:</label>`;
            txt3 += `<input pattern="[\\d]+" type="text" id="${key}" name="${key}"/>`;
            txt3 += `</div>`;
          } else {
            txt3 += `<div>`;
            txt3 += `<label for="tkepe">Termék Képe:</label>`;
            txt3 += `<input value=${
              PCKepek[Math.floor(Math.random() * PCKepek.length)]
            } id="${key}" name="${key}>`;
            txt3 += `</div>`;
          }
        }
      }

      txt3 += `</fieldset>`;
      txt3 += `<button>Küldés</button>`;
      txt3 += `</form>`;

      inputokHelye.html(txt3);

      $(".kuldes").submit(function (oldal) {
        oldal.preventDefault();
        let termek = {};
        const ADAT = $(".adatInput input");
        let i = 0;
        for (const kulcs in PCLista[i]) {
          termek[kulcs] = `${ADAT[i].value}`;
          i++;
        }
        PCLista.push(termek);
        tablazat.html(osszeallitTablazat(PCLista, PCKulcsok));
      });
    } else if (valasztas === "Konzol") {
      tablazat.html(osszeallitTablazat(konzolLista, konzolKulcsok));
      szures(konzolLista, konzolKulcsok);
      txt3 += `<form class="kuldes">`;
      txt3 += `<fieldset class="adatInput">`;
      txt3 += `<legend>Új Termék felvétele:</legend>`;

      for (let i = 0; i < konzolKulcsok.length; i++) {
        for (const key in konzolKulcsok[i]) {
          if (key !== "termekKepe" && key !== "ar") {
            txt3 += `<div>`;
            txt3 +=
              `<label for="${key}">` + konzolKulcsok[i][key] + `:</label>`;
            txt3 += `<input pattern="[\\w]+" type="text" id="${key}" name="${key}"/>`;
            txt3 += `</div>`;
          } else if (key === "ar") {
            txt3 += `<div>`;
            txt3 +=
              `<label for="${key}">` + konzolKulcsok[i][key] + `:</label>`;
            txt3 += `<input pattern="[\\d]+" type="text" id="${key}" name="${key}"/>`;
            txt3 += `</div>`;
          } else {
            txt3 += `<div>`;
            txt3 += `<label for="tkepe">Termék Képe:</label>`;
            txt3 += `<input value=${
              konzolKepek[Math.floor(Math.random() * konzolKepek.length)]
            }>`;
            txt3 += `</div>`;
          }
        }
      }

      txt3 += `</fieldset>`;
      txt3 += `<button>Küldés</button>`;
      txt3 += `</form>`;

      inputokHelye.html(txt3);
      $(".kuldes").submit(function (oldal) {
        oldal.preventDefault();
        let termek = {};
        const ADAT = $(".adatInput input");
        let i = 0;
        for (const kulcs in tartozekLista[i]) {
          termek[kulcs] = `${ADAT[i].value}`;
          i++;
        }
        tartozekLista.push(termek);
        tablazat.html(osszeallitTablazat(konzolLista, konzolKulcsok));
      });
    } else if (valasztas === "Tartozékok") {
      tablazat.html(osszeallitTablazat(tartozekLista, tartozekKulcsok));
      szures(tartozekLista, tartozekKulcsok)
      txt3 += `<form class="kuldes">`;
      txt3 += `<fieldset class="adatInput">`;
      txt3 += `<legend>Új Termék felvétele:</legend>`;

      for (let i = 0; i < tartozekKulcsok.length; i++) {
        for (const key in tartozekKulcsok[i]) {
          if (key !== "termekKepe" && key !== "ar") {
            console.log(i);
            txt3 += `<div>`;
            txt3 +=
              `<label for="${key}">` + tartozekKulcsok[i][key] + `:</label>`;
            txt3 += `<input type="text" id="${key}" name="${key}"/>`;
            txt3 += `</div>`;
          } else if (key === "ar") {
            txt3 += `<div>`;
            txt3 +=
              `<label for="${key}">` + tartozekKulcsok[i][key] + `:</label>`;
            txt3 += `<input pattern="[\\d]+" type="text" id="${key}" name="${key}"/>`;
            txt3 += `</div>`;
          } else {
            txt3 += `<div>`;
            txt3 += `<label for="tkepe">Termék Képe:</label>`;
            let szam = Math.floor(Math.random() * tartozekKepek.length);
            txt3 += `<input value=${tartozekKepek[szam]}>`;
            txt3 += `</div>`;
          }
        }
      }

      txt3 += `</fieldset>`;
      txt3 += `<button>Küldés</button>`;
      txt3 += `</form>`;

      inputokHelye.html(txt3);
      $(".kuldes").submit(function (oldal) {
        oldal.preventDefault();
        let termek = {};
        const ADAT = $(".adatInput input");
        let i = 0;
        for (const kulcs in tartozekLista[i]) {
          termek[kulcs] = $(ADAT.eq(i)).val();
          i++;
        }
        tartozekLista.push(termek);
        tablazat.html(osszeallitTablazat(tartozekLista, tartozekKulcsok));
      });
    }
  });
}
