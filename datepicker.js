const message = document.getElementById('message');
let daysSelected;

$(function() {
  $('input[name="daterange"]').daterangepicker({
    showDropdowns: true,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'), 10)
  })
  $('input[name="daterange"]').on('apply.daterangepicker',
    function(ev, picker) {
      // console.log("You clicked apply");
      let fullDate = $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));

      let start = picker.startDate.format('MM/DD/YYYY');
      let end = picker.endDate.format('MM/DD/YYYY');
      daysSelected = datediff(parseDate(start), parseDate(end));
      // console.log(daysSelected);

      // work out the differece between two dates
      function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0] - 1, mdy[1]);
      }

      // this function here works out the difference between the Dates
      // using two arguments, the start date and the end date
      function datediff(first, second) {
        // Take the difference between the dates and divide by milliseconds per day.
        // Round to nearest whole number to deal with DST.
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
      }
      let messageContent;
      // let daysValid;
      // add in our own validation
      if (daysSelected < 0) {
        daysValid = false;
        messageContent = `
          <div class="warning"><p class="warning-message"><i class="bi bi-exclamation-triangle"></i>  Please select valid dates</p></div>
        `;
      } else if (daysSelected > 16) {
        daysValid = false;
        messageContent = `
          <div class"warning"><p class="warning-message"><i class="bi bi-exclamation-triangle"></i> Please select 15 or less nights</p></div>
        `;
      } else {
        daysValid = true;
        messageContent = `
          <div class="success"><p class="warning-message">Nights selected: ${daysSelected} <i class="bi bi-check-circle"></i></p></div>
        `;
      }
      message.innerHTML = messageContent;
    }
  )
});

let daysValid;
