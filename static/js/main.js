$(document).ready(function () {
  // $(this).click(function () {
  //   console.log("main.js loaded");
  // });

  $(function () {
    // Datepicker object start
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
  }); // Datepicker object end

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
});
