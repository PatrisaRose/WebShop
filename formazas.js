export function vilagosSotet() {
  let HTML = $("html");
  let oldalstilusKep = $(".oldalstilusKep");
  let adatok = $("p");
  oldalstilusKep.css("background-image", "url(kepek/HOLD.png)");
  $("#oldalstilus").on("change", function () {
    if (!$(this).is(":checked")) {
      oldalstilusKep.css("background-image", "url(kepek/HOLD.png)");
      HTML.css("background-color", "unset");
      adatok.css("color", "unset");
    } else {
      oldalstilusKep.css("background-image", "url(kepek/NAP.png)");
      HTML.css("background-color", "#212121");
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
      console.log($(this).is(":checked"));
      RgbKep.css("background-image", "url(kepek/szinesSziv.png)");
    } else {
      if (
        confirm(
          'Biztos a döntésében? Fényérzékenységi rohamok kockázatára vonatkozó figyelmeztetés, ha Ön epilepsziás rohamra hajlamos, kérem ne kapcsolja be ezt a funkciót és válassza a "Mégse" opciót!'
        ) == true
      ) {
        console.log($(this).is(":checked"));
        RgbKep.css("background-image", "url(kepek/feherSziv.png)");
      } else {
        $(this).prop("checked", false);
        console.log($(this).is(":checked"));
      }
    }
  });
}
