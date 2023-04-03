export function vilagosSotet() {
  let body = $("body");
  let html = $("html")
  let oldalstilusKep = $(".oldalstilusKep");
  let adatok = $("body");
  oldalstilusKep.css("background-image", "url(kepek/hold.png)");
  $("#oldalstilus").on("change", function () {
    if (!$(this).is(":checked")) {
      oldalstilusKep.css("background-image", "url(kepek/hold.png)");
      body.css("background-color", "white");
      html.css("background", "white url(kepek/headerHatter.png)");
      adatok.css("color", "unset");
    } else {
      oldalstilusKep.css("background-image", "url(kepek/nap.png)");
      body.css("background-color", "#212121");
      html.css("background", "#212121 url(kepek/darkHatter.png)");
      adatok.css("color", "white");
    }
  });
}

export function RGBVilagitas() {
  let RgbKep = $(".RGBKep");
  let felirat = $("h1");
  RgbKep.css("background-image", "url(kepek/szines_sziv.png)");
  $("#RGB").on("change", function () {
    if (!$(this).is(":checked")) {
      RgbKep.css("background-image", "url(kepek/szines_sziv.png)");
      felirat.css( "animation", "none");
    } else {
      if (
        confirm(
          'Biztos a döntésében? Fényérzékenységi rohamok kockázatára vonatkozó figyelmeztetés, ha Ön epilepsziás rohamra hajlamos, kérem ne kapcsolja be ezt a funkciót és válassza a "Mégse" opciót!'
        ) == true
      ) {
        RgbKep.css("background-image", "url(kepek/feher_sziv.png)");
        felirat.css( "animation", "mozgatas 1.5s linear infinite");
      } else {
        console.log($(this).is(":checked"));
        felirat.css( "animation", "none");
      }
    }
  });
}
