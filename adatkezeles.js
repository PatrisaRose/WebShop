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
        txt += "<img src='" + adatLista[index][kulcs] + "' alt=''>";
      }
    }
    txt += `</div>`;
  }
  txt += `</div>`;
  return txt;
}
