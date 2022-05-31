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
const addFocus = function (element) {
  if (!element.classList.contains("focus")) {
    element.className = element.className.concat(" focus");
  }
};
const removeFocus = function (element, elements) {
  for (let others of elements) {
    if (!others.isSameNode(element)) {
      others.classList.remove("focus");
    }
  }
};
// START: index.html vanilla Javascript
// Start: main-section-form-box-tabs onlick underline element
const formTabs = document.getElementsByClassName("main-section-tab");

for (const formTab of formTabs) {
  formTab.addEventListener("click", () => {
    addFocus(formTab);
    removeFocus(formTab, formTabs);
  });
}
// End: main-section-form-box-tabs onclick underline element
// Start: main-section-form-choice-tabs onclick select background element
const choiceTabs = document.querySelectorAll(
  ".main-section-form-choice-tabs a"
);

for (const choiceTab of choiceTabs) {
  choiceTab.addEventListener("click", () => {
    addFocus(choiceTab);
    removeFocus(choiceTab, choiceTabs);
    var dateContainer = document.getElementById("date-input-container");

    // modify form for Roundtrip search
    if (
      choiceTab.id == "roundtrip" &&
      document.querySelector("#fs-returnDate") == null
    ) {
      console.log("missing node");
      var returnInput = document.createElement("input");
      // Create return-date input element with div and append to dateContainer
      returnInput.className = "form-control form-select-lg mb-3 col";
      returnInput.type = "text";
      returnInput.id = "fs-returnDate";
      returnInput.placeholder = "Return date";
      var divForReturnInput = document.createElement("div");
      divForReturnInput.className = "col-5 mx-1";
      divForReturnInput.appendChild(returnInput);
      dateContainer.appendChild(divForReturnInput);
      dateContainer.children[0].className = "col-5 mx-1";
    }

    // modify form for One-way search
    if (
      choiceTab.id == "one-way" &&
      document.querySelector("#fs-returnDate") != null
    ) {
      // remove return input element
      dateContainer.children[1].remove();
      dateContainer.children[0].className = "col-10";
    }

    // modify form for Multi-port search
  });
}
// End: main-section-form-choice-tabs onclick select background element
// END:  index.html vanilla Javascript

// Start: flights.html flight details overlay
const flights = document.getElementsByClassName("listview-flight-details");

for (const flight of flights) {
  flight.addEventListener("click", () => {
    on();
    if (!flight.classList.contains("flight-selected")) {
      flight.className = flight.className.concat(" flight-selected");
      // TODO: run method createFlightInlay using flight details
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      for (const otherFlight of flights) {
        if (!otherFlight.isSameNode(flight)) {
          otherFlight.classList.remove("flight-selected");
        }
      }
    }
  });
}

var overlayX = document.getElementById("overlay-close");
overlayX.addEventListener("click", off);

function on() {
  document.getElementById("flight-detail-overlay").style.display = "block";
}

function off() {
  document.getElementById("flight-detail-overlay").style.display = "none";
}

// End: flights.html flight details overlay
