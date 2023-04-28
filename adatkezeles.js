let aside = $("aside");

export function osszeallitPc(adatLista, kulcsLista) {
  let txt = "";
  txt += `<div class = "container">`;
  for (let index = 0; index < adatLista.length; index++) {
    txt += `<div class= "kartya">`;
    for (const kulcs in kulcsLista[0]) {
      if (kulcs != "termekKepe" && kulcs != "ar") {
        if (adatLista[index][kulcs] != "") {
          txt += `<p>${kulcsLista[0][kulcs]}: ${adatLista[index][kulcs]}</p>`;
        }
      } else if (kulcs === "ar") {
        txt += `${adatLista[index][kulcs]} Ft.-`;
      } else {
        txt += "<img src='" + adatLista[index][kulcs] + "' alt=''>";
      }
    }
    txt += `</div>`;
  }
  txt += `</div>`;
  return txt;
}

export function osszeallitTablazat(adatLista, kulcsLista) {
  let txt = "";
  txt += `<div>`;
  txt += `<label for="szures">Név szűrő:</label>`;
  txt += `<input type="text" id="szures" name="szures"/>`;
  txt += `<button id="szurogomb">Szűrés</button>`;
  txt += `</div>`;
  txt += `<table>`;
  txt += `<tr>`;
  for (const kulcs in kulcsLista[0]) {
    if (kulcs != "termekKepe") {
      txt += `<th id=${kulcs}>${kulcsLista[0][kulcs]}</th>`;
    } else {
      txt += `<th id=${kulcs}>Termék képe</th>`;
    }
  }
  txt += `</tr>`;
  for (let index = 0; index < adatLista.length; index++) {
    txt += `<tr>`;
    for (const kulcs in kulcsLista[0]) {
      if (kulcs != "termekKepe" && kulcs != "ar") {
        if (adatLista[index][kulcs] != "") {
          txt += `<td>${adatLista[index][kulcs]}</td>`;
        } else {
          txt += `<td>Nincs adat</td>`;
        }
      } else if (kulcs === "ar") {
        txt += `<td>${adatLista[index][kulcs]} Ft.-</td>`;
      } else {
        txt += "<td><img src='" + adatLista[index][kulcs] + "' alt=''></td>";
      }
    }
    txt += `</tr>`;
  }
  txt += `<table>`;
  return txt;
}

export function szures(adatLista, kulcsLista) {
  let katt = 0;
  let tablaFejlec = $("th:not(#termekKepe)");
  let lista = adatLista;
  let eredeti = adatLista;
  tablaFejlec.click(function () {
    katt++;
    if (katt === 0) {
      lista = eredeti;
    } else if (katt === 1) {
      lista.sort((a, b) => a - b);
    } else if (katt === 2) {
      lista.sort((b, a) => b - a);
    } else {
      katt = 0;
    }
    osszeallitTablazat(adatLista, kulcsLista);
  });
}
