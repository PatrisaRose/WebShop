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
  let kek = $(".kek");
  let rszin = $(".rszin");
  let lila = $(".lila");
  let zold = $(".zold");
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
        kek.css("border", "3px solid #149CEA");
        rszin.css("border", "3px solid #f900bf");
        lila.css("border", "3px solid #a31acb");
        zold.css("border", "3px solid #06ff00");
        kek.hover(function() {
          kek.css("box-shadow" , "inset 0px 0px 25px #1479EA", "transition", "1s")
        }, function(){kek.css("box-shadow" , "none", "transition", "1s")});

        rszin.hover(function() {
          rszin.css("box-shadow" , "inset 0px 0px 25px #f900bf", "transition", "1s")
        }, function(){rszin.css("box-shadow" , "none", "transition", "1s")});

        lila.hover(function() {
          lila.css("box-shadow" , "inset 0px 0px 25px #a31acb", "transition", "1s")
        }, function(){lila.css("box-shadow" , "none", "transition", "1s")});

        zold.hover(function() {
          zold.css("box-shadow" , "inset 0px 0px 25px #06ff00", "transition", "1s")
        }, function(){zold.css("box-shadow" , "none", "transition", "1s")});
      } else {
        console.log($(this).is(":checked"));
        felirat.css( "animation", "none");
      }
    }
  });
}
