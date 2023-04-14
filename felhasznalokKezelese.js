import { felhasznalok } from "./felhasznalok.js";
import {
  PCLista,
  PCKulcsok,
  konzolLista,
  konzolKulcsok,
  tartozekLista,
  tartozekKulcsok,
} from "./adatok.js";
import { osszeallitPc, osszeallitTablazat } from "./adatkezeles.js";
let aside = $("aside");
export function felhasznalokKezelese() {
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
}

export function bejelentkezes() {
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
      txt3 += `<div>`;
      txt3 += `<label for="tneve">Termék Neve:</label>`;
      txt3 += `<input type="text" id="tneve" name="tneve"/>`;
      txt3 += `</div>`;
      txt3 += `<div>`;
      txt3 += `<label for="tkepe">Termék Képe:</label>`;
      txt3 += `<input type="file"
      id="avatar" name="avatar"
      accept="image/png, image/jpeg">`;
      txt3 += `</div>`;
      txt3 += `<div>`;
      txt3 += `<label for="alaplneve">Alaplap:</label>`;
      txt3 += `<input type="text" id="alaplneve" name="alaplneve"`;
      txt3 += `</div>`;
      txt3 += `<div>`;
      txt3 += `<label for="pneve">Processzor:</label>`;
      txt3 += `<input type="text" id="pneve" name="pneve"`;
      txt3 += `</div>`;
      txt3 += `<div>`;
      txt3 += `<label for="mneve">Memória:</label>`;
      txt3 += `<input type="text" id="mneve" name="mneve"`;
      txt3 += `</div>`;
      txt3 += `<div>`;
      txt3 += `<label for="mlneve">Merevlemez:</label>`;
      txt3 += `<input type="text" id="mlneve" name="mlneve"`;
      txt3 += `</div>`;
      txt3 += `<div>`;
      txt3 += `<label for="vneve">Videólártya:</label>`;
      txt3 += `<input type="text" id="vneve" name="vneve"`;
      txt3 += `</div>`;
      txt3 += `<div>`;
      txt3 += `<label for="ar">Ára:</label>`;
      txt3 += `<input type="text" id="ar" name="ar"`;
      txt3 += `</div>`;
      txt3 += `</fieldset>`;
      txt3 += `<button class="kuldes" >Küldés</button>`;
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
      txt3 += `<div>`;
      txt3 += `<label for="tneve">Termék Neve:</label>`;
      txt3 += `<input type="text" id="tneve" name="tneve"/>`;
      txt3 += `</div>`;
      txt3 += `<div>`;
      txt3 += `<label for="tkepe">Termék Képe:</label>`;
      txt3 += `<input type="file"
      id="avatar" name="avatar"
      accept="image/png, image/jpeg">`;
      txt3 += `</div>`;
      txt3 += `<div>`;
      txt3 += `<label for="meret">Termék mérete:</label>`;
      txt3 += `<input type="text" id="meret" name="meret"`;
      txt3 += `</div>`;
      txt3 += `<div>`;
      txt3 += `<label for="csatlakoz">Csatlakoztatás:</label>`;
      txt3 += `<input type="text" id="csatlakoz" name="csatlakoz"`;
      txt3 += `</div>`;
      txt3 += `<div>`;
      txt3 += `<label for="kabel">Kábel hossza:</label>`;
      txt3 += `<input type="text" id="kabel" name="kabel"`;
      txt3 += `</div>`;
      txt3 += `<div>`;
      txt3 += `<label for="tszine">Termék színe:</label>`;
      txt3 += `<input type="text" id="tszine" name="tszine"`;
      txt3 += `</div>`;
      txt3 += `<div>`;
      txt3 += `<label for="ar">Ára:</label>`;
      txt3 += `<input type="text" id="ar" name="ar"`;
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
      txt3 += `<div>`;
      txt3 += `<label for="tneve">Termék Neve:</label>`;
      txt3 += `<input type="text" id="tneve" name="tneve"/>`;
      txt3 += `</div>`;
      txt3 += `<div>`;
      txt3 += `<label for="tkepe">Termék Képe:</label>`;
      txt3 += `<input type="file"
      id="avatar" name="avatar"
      accept="image/png, image/jpeg">`;
      txt3 += `</div>`;
      txt3 += `<div>`;
      txt3 += `<label for="ttipus">Termék típusa:</label>`;
      txt3 += `<input type="text" id="ttipus" name="ttipus"`;
      txt3 += `</div>`;
      txt3 += `<div>`;
      txt3 += `<label for="ktipus">Kontroller típusa:</label>`;
      txt3 += `<input type="text" id="ktipus" name="ktipus"`;
      txt3 += `</div>`;
      txt3 += `<div>`;
      txt3 += `<label for="tszine">Termék színe:</label>`;
      txt3 += `<input type="text" id="tszine" name="tszine"`;
      txt3 += `</div>`;
      txt3 += `<div>`;
      txt3 += `<label for="ar">Ára:</label>`;
      txt3 += `<input type="text" id="ar" name="ar"`;
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
