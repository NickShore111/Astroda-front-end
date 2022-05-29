$(document).ready(function () {
  // $(this).click(function () {
  //   console.log("main.js loaded");
  // });

  $(function () {
    // Start: Datepicker Object
    var dateFormat = "mm/dd/yy",
      from = $("#fs-departDate")
        .datepicker({
          defaultDate: "+2d",
          minDate: 0,
          maxDate: "+3M",
          showAnim: "fadeIn",
        })
        .on("change", function () {
          to.datepicker("option", "minDate", getDate(this));
        }),
      to = $("#fs-returnDate")
        .datepicker({
          defaultDate: "+1w",
          minDate: +1,
          showAnim: "fadeIn",
        })
        .on("change", function () {
          from.datepicker("option", "maxDate", getDate(this));
        });

    function getDate(element) {
      var date;
      try {
        date = $.datepicker.parseDate(dateFormat, element.value);
      } catch (error) {
        date = null;
      }
      return date;
    }
  }); // End: Datepicker Object JS
});

var flights = document.getElementsByClassName("listview-flight-details");

for (var i = 0; i < flights.length; i++) {
  flights[i].addEventListener("click", () => {
    on();
  });
}

function on() {
  document.getElementById("flight-detail-overlay").style.display = "block";
}

function off() {
  document.getElementById("flight-detail-overlay").style.display = "none";
}

var overlayX = document.getElementById("overlay-close");
overlayX.addEventListener("click", off);
