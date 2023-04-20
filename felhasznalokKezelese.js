import { adatBeolvas } from "./fetch.js";

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

      for (let i = 0; i < data.PCKulcsok.length; i++) {
        const key = data.PCKulcsok[0];
        if (key != "termekKepe") txt3 += `<div>`;
        txt3 += `<label for="${PCKulcsok[key][i]}">${key.termekNeve}:</label>`;
        txt3 += `<input type="text" id="${PCKulcsok[key][i]}" name="${PCKulcsok[key][i]}"/>`;
        txt3 += `</div>`;
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

      for (let i = 0; i < data.konzolKulcsok.length; i++) {
        const key = data.konzolKulcsok[0];
        if (key == "termekKepe") txt3 += `<div>`;
        txt3 += `<label for="${data.konzolKulcsok[key][i]}">${data.konzolKulcsok.termekNeve}:</label>`;
        txt3 += `<input type="text" id="${data.konzolKulcsok[key][i]}" name="${data.konzolKulcsok[key][i]}"/>`;
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

      for (let i = 0; i < data.tartozekKulcsok.length; i++) {
        const key = data.tartozekKulcsok[0];
        if (key == "termekKepe") txt3 += `<div>`;
        txt3 += `<label for="${data.tartozekKulcsok[key][i]}">${data.tartozekKulcsok.termekNeve}:</label>`;
        txt3 += `<input type="text" id="${data.tartozekKulcsok[key][i]}" name="${data.tartozekKulcsok[key][i]}"/>`;
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
