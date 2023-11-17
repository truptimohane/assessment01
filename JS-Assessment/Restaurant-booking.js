function showBookingOptions() {
  // remove previous booking options ( booking-box )
  document.getElementById("booking-options").innerHTML = "";

  var bookingType = document.getElementById("booking-type").value;

  if (bookingType == "full-day") {
    // show only date input
    var dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "date";
    dateInput.required = true;

    document.getElementById("booking-options").appendChild(dateInput);
  } else if (bookingType == "half-day") {
    //  show only date input
    var dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "date";
    dateInput.required = true;

    // show only slot option
    //for select-option
    var slotOptions = document.createElement("select");
    slotOptions.id = "slotOptions";
    slotOptions.required = true;

    //for disabled option
    var Option = document.createElement("option");
    Option.value = "";
    Option.disabled = "disabled";
    Option.selected = "selected";
    Option.innerHTML = "--Selected Option--";

    //for multiple option
    // 1.Breakfast
    var Breakfast = document.createElement("option");
    Breakfast.value = "Breakfast";
    Breakfast.innerHTML = "Breakfast";

    // 2.Lunch
    var Lunch = document.createElement("option");
    Lunch.value = "Lunch";
    Lunch.innerHTML = "Lunch";

    // 3.Dinner
    var Dinner = document.createElement("option");
    Dinner.value = "Dinner";
    Dinner.innerHTML = "Dinner";

    // call multiple options
    slotOptions.appendChild(Option);
    slotOptions.appendChild(Breakfast);
    slotOptions.appendChild(Lunch);
    slotOptions.appendChild(Dinner);

    document.getElementById("booking-options").appendChild(dateInput);
    document.getElementById("booking-options").appendChild(slotOptions);
  } else if (bookingType == "hourly") {
    // for Date including
    var dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "date";
    dateInput.required = true;

    //for time including
    var timeInput = document.createElement("input");
    timeInput.type = "time";
    timeInput.id = "time";
    timeInput.required = true;

    document.getElementById("booking-options").appendChild(dateInput);
    document.getElementById("booking-options").appendChild(timeInput);
  }
}
