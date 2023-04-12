import { PCLista, konzolLista, tartozekLista } from "./adatok.js";
import { felhasznalok } from "./felhasznalok.js";

export function osszeallitPc(adatLista, kulcsLista) {
  let txt = "";
  txt += `<div class = "container">`;
  for (let index = 0; index < adatLista.length; index++) {
    txt += `<div class= "kartya">`;
    for (const kulcs in kulcsLista[0]) {
      if (kulcs != "termekKepe") {
        if (adatLista[index][kulcs] != "") {
          txt += `<p>${kulcsLista[0][kulcs]}: ${adatLista[index][kulcs]}</p>`;
        }
      } else {
        txt += `<div class= "kepek">`;
        txt += "<img src='" + adatLista[index][kulcs] + "' alt=''>";
        txt += `</div>`;
      }
    }
    txt += `</div>`;
  }
  txt += `</div>`;
  return txt;
}

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
  let aside = $("aside");
  $(aside).ready(function () {
    $(".bejelentkezes").on("click", function (oldal) {
      oldal.preventDefault();
      let felhasznalo = $("#username").val();
      let jelszo = $("#password").val();
      let talaltFelhasznalo = false;
      for (let index = 0; index < felhasznalok.length; index++) {
        if (felhasznalo == "admin") {
          if (jelszo == felhasznalok[0].jelszo) {
            alert("Sikeresen bejelentkeztél!");

            let txt2 = "";
            txt2 += `<form>`;
            txt2 += `<label for="browser" id="tipusok">Kérlek válaszd ki, milyen fajta terméket szeretnél hozzáadni:</label>`;
            txt2 += `<select id="tipusok" name="tipusok">`;
            txt2 += `<option value="Számítógép">Számítógép</option>`;
            txt2 += `<option value="Konzol">Konzol</option>`;
            txt2 += `<option value="Tartozékok">Tartozékok</option>`;
            txt2 += `</select>`;
            txt2 += `<input type="submit" class="tipus">`;
            txt2 += `</form>`;
            aside.html(txt2);
            $(".tipus").on("click", function () {
              let txt3 = "";
              if ($("option").val() == "Számítógép") {
                txt3 += `<form>`;
                txt3 += `<fieldset>`;
                txt3 += `<legend>Új Termék felvétele:</legend>`;
                txt3 += `<div>`;
                txt3 += `<label for="tneve">Termék Neve:</label>`;
                txt3 += `<input type="text" id="tneve" name="tneve"/>`;
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
                txt3 += `<input type="submit" class="kuldes"></input>`;
                txt3 += `</form>`;
                aside.html(txt2);
                aside.html(txt3);
                $(".kuldes").on("click", function() {
                  let termek = {};
                  const ADAT = $("input");
                  let i = 0;
                  for (const kulcs in adatLista[i]) {
                    termek[kulcs] = `${ADAT[i].val}`;
                    index++;
                  }
                  PCLista.push(termek);
                  
                });
              } else if ($("option").val() == "Konzol") {
                txt3 += `<form>`;
                txt3 += `<fieldset>`;
                txt3 += `<legend>Új Termék felvétele:</legend>`;
                txt3 += `<div>`;
                txt3 += `<label for="tneve">Termék Neve:</label>`;
                txt3 += `<input type="text" id="tneve" name="tneve"/>`;
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
                txt3 += `<input type="submit" class="kuldes"></input>`;
                txt3 += `</form>`;
                aside.html(txt2);
                aside.html(txt3);
                $(".kuldes").on("click", function () {
                  let termek = {};
                  const ADAT = $("input");
                  let i = 0;
                  for (const kulcs in tartozekLista[i]) {
                    termek[kulcs] = `${ADAT[i].val}`;
                    index++;
                  }
                  tartozekLista.push(termek);
                });
              } else if ($("option").val() == "Tartozékok") {
                txt3 += `<form>`;
                txt3 += `<fieldset>`;
                txt3 += `<legend>Új Termék felvétele:</legend>`;
                txt3 += `<div>`;
                txt3 += `<label for="tneve">Termék Neve:</label>`;
                txt3 += `<input type="text" id="tneve" name="tneve"/>`;
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
                txt3 += `<input type="submit" class="kuldes"></input>`;
                txt3 += `</form>`;
                aside.html(txt2);
                aside.html(txt3);
                $(".kuldes").on("click", function () {
                  let termek = {};
                  const ADAT = $("input");
                  let i = 0;
                  for (const kulcs in konzolLista[i]) {
                    termek[kulcs] = `${ADAT[i].val}`;
                    index++;
                  }
                  konzolLista.push(termek);
                });
              } else {
                alert("Válasz egy opciót!");
              }
              osszeallitPc();
            });
          } else {
            alert("Hibás jelszó!");
          }
          talaltFelhasznalo = true;
          break;
        } else if (felhasznalok[index].nev == felhasznalo) {
          if (jelszo == felhasznalok[index].jelszo) {
            alert(
              "Üdvözlünk a GG Storeban, sikeresen bejelentkeztél! Jó vásárlást kívánunk!"
            );
          } else {
            alert("Hibás jelszó!");
          }
          talaltFelhasznalo = true;
          break;
        }
      }
      if (!talaltFelhasznalo) {
        alert("Nincs ilyen felhasználó!");
      }
    });
  });
}
