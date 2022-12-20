let daysValid = false;
let daysSelected = 0;
AOS.init();
const message = document.getElementById('message');
const message2 = document.getElementById('message2');

const accomadation = [{
    id: 0,
    type: "yurt",
    name: "Yurt Yoga Retreat",
    price: 157,
    image_src: "img/yoga-yurt-retreat.jpeg",
    image_src_2: "img/yoga-yurt-retreat-2.jpeg",
    image_src_3: "img/yoga-yurt-retreat-3.jpeg",
    location: "Queenstown, South Island",
    location_select: "south",
    guests: "Sleeps 1-2",
    minGuests: 1,
    maxGuests: 2,
    bed: "King bed",
    bathroom: "1 Bathroom",
    description: "This superb yurt rental is based on a stunning yoga retreat near the town of Takaka on New Zealand's South Island and offers a sublime getaway for those guests looking to meditate in a supportive and highly enjoyable environment.",
    aminities_1: "Lounge/Living room",
    aminities_logo_1: "weekend",
    aminities_2: "Yoga",
    aminities_logo_2: "self_improvement",
    aminities_3: "Electricity",
    aminities_logo_3: "outlet",
    aminities_4: "Spa",
    aminities_logo_4: "spa",
    aminities_5: "Breakfast",
    aminities_logo_5: "breakfast_dining",
    aminities_6: "Water",
    aminities_logo_6: "water_drop",
    breakfast: "Avacado toast",
    lunch: "Asparagus & aubergine",
    dinner: "Chicken adobo",
    nights: "min 1 night, max 5 nights",
    minNights: 1,
    maxNights: 5,
    position: "left",
    long: 168.65915114310053,
    lat: -45.03193444280787,
    zoom: 15,

  },
  {
    id: 1,
    type: "tented cabin",
    name: "Lakefront Tiny House",
    price: 30,
    image_src: "img/lake-front-tiny-house.png",
    image_src_2: "img/lake-front-tiny-house-2.png",
    image_src_3: "img/lake-front-tiny-house-3.png",
    location: "Lake Hawea, South Island",
    location_select: "south",
    guests: "Sleeps 1",
    minGuests: 1,
    maxGuests: 1,
    bed: "King bed",
    bathroom: "1 Bathroom",
    description: "This Lake Hawea accommodation is situated right on the lake and boasts beautiful views for the perfect mountain escape glamping in New Zealand.",
    aminities_1: "Fireplace",
    aminities_logo_1: "fireplace",
    aminities_2: "Wi-Fi/Internet",
    aminities_logo_2: "wifi",
    aminities_3: "Electricity",
    aminities_logo_3: "outlet",
    aminities_4: "Private kitchen",
    aminities_logo_4: "kitchen",
    aminities_5: "Washing machine",
    aminities_logo_5: "dishwasher_gen",
    aminities_6: "Water",
    aminities_logo_6: "water_drop",
    breakfast: "porridge",
    lunch: "Popcorn chicken",
    dinner: "Pad thai",
    nights: "min 1 night, max 10 nights",
    minNights: 1,
    maxNights: 10,
    position: "right",
    long: 169.25216451097418,
    lat: -44.61039326304767,
    zoom: 15,
  },
  {
    id: 2,
    type: "yurt",
    name: "Enchanting Yurt",
    price: 240,
    image_src: "img/enchanting-yurt-glamping.png",
    image_src_2: "img/enchanting-yurt-glamping-2.png",
    image_src_3: "img/enchanting-yurt-glamping-3.png",
    location: "Whakatane, North Island",
    location_select: "north",
    guests: "Sleeps 1-4",
    minGuests: 1,
    maxGuests: 4,
    bed: "2 King beds",
    bathroom: "1 Bathroom",
    description: "This unique Bay of Plenty accommodation is ideal for up to four guests to enjoy a great holiday of glamping.",
    aminities_1: "Heating",
    aminities_logo_1: "hvac",
    aminities_2: "Wi-Fi/Internet",
    aminities_logo_2: "wifi",
    aminities_3: "Electricity",
    aminities_logo_3: "outlet",
    aminities_4: "Private jacuzzi",
    aminities_logo_4: "hot_tub",
    aminities_5: "Television",
    aminities_logo_5: "tv_gen",
    aminities_6: "Outdoor grill",
    aminities_logo_6: "outdoor_grill",
    breakfast: "Donut & Coffee",
    lunch: "Duck dal",
    dinner: "Dan dan noodles",
    nights: "min 2 nights, max 15 nights",
    minNights: 2,
    maxNights: 15,
    position: "center",
    long: 176.78761999320182,
    lat: -37.89366186417842,
    zoom: 15,
  },
  {
    id: 3,
    type: "treehouse",
    name: "Tree House Paradise",
    price: 90,
    image_src: "img/tree-house-paradise.png",
    image_src_2: "img/tree-house-paradise-2.png",
    image_src_3: "img/tree-house-paradise-3.png",
    location: "Waiuku, North Island",
    location_select: "north",
    guests: "Sleeps 2-4",
    minGuests: 2,
    maxGuests: 4,
    bed: "2 Double beds",
    bathroom: "1 Bathroom",
    description: "This accommodation offers two different types of glamping experiences. The luxury coastal tents are situated on the cliffs and the Totara Tree Tent is located approximately nine miles inland from Castaways Resort.",
    aminities_1: "Spa",
    aminities_logo_1: "spa",
    aminities_2: "Wi-Fi/Internet",
    aminities_logo_2: "wifi",
    aminities_3: "Electricity",
    aminities_logo_3: "outlet",
    aminities_4: "Outdoor bathtub",
    aminities_logo_4: "hot_tub",
    aminities_5: "Private kitchen",
    aminities_logo_5: "kitchen",
    aminities_6: "Water",
    aminities_logo_6: "water_drop",
    breakfast: "Croisant & Coffee",
    lunch: "Cheeseboard",
    dinner: "Fresh crayfish",
    nights: "min 3 nights, max 10 nights",
    minNights: 3,
    maxNights: 10,
    position: "center",
    long: 174.67153500003036,
    lat: -37.27661197667441,
    zoom: 15,
  }
];

function expandToggle() {
  let element = document.getElementById("filter-expand-js");
  let elementBtn = document.getElementById('filter-btn-js');
  let element2 = document.getElementById("sortby-expand-js");
  let elementBtn2 = document.getElementById('sortby-btn-js');
  element.classList.toggle("filter-expand-toggle");
  elementBtn.classList.toggle("filter-btn-margin");
  if ($('.sortby-expand-toggle').length == 0) {
    element2.classList.toggle("sortby-expand-toggle");
  }

  if ($('.sortby-btn-margin').length == 0) {
    elementBtn2.classList.toggle("sortby-btn-margin");
  }
}





function expandToggle2() {
  let element2 = document.getElementById("sortby-expand-js");
  let elementBtn2 = document.getElementById('sortby-btn-js');
  let element = document.getElementById("filter-expand-js");
  let elementBtn = document.getElementById('filter-btn-js');
  element2.classList.toggle("sortby-expand-toggle");
  elementBtn2.classList.toggle("sortby-btn-margin");
  if ($('.filter-expand-toggle').length == 0) {
    element.classList.toggle("filter-expand-toggle");
  }

  if ($('.filter-btn-margin').length == 0) {
    elementBtn.classList.toggle("filter-btn-margin");
  }
}




function moreInfo1() {
  let moreInfoExpand = document.getElementById('more-info-expand-1');
  moreInfoExpand.classList.toggle("more-info-toggle-1");
}

function moreInfo2() {
  let moreInfoExpand = document.getElementById('more-info-expand-2');
  moreInfoExpand.classList.toggle("more-info-toggle-2");
}

function moreInfo3() {
  let moreInfoExpand = document.getElementById('more-info-expand-3');
  moreInfoExpand.classList.toggle("more-info-toggle-3");
}


function moreInfo0() {
  let moreInfoExpand = document.getElementById('more-info-expand-0');
  moreInfoExpand.classList.toggle("more-info-toggle-0");
}


$(function() {
  $('input[name="daterange"]').daterangepicker({
    showDropdowns: true,
    minYear: 2022,
    maxYear: parseInt(moment().format('YYYY'), 10)
  });
  $('input[name="daterange"]').on('apply.daterangepicker',
    function(ev, picker) {
      // console.log("You clicked apply");

      let start = picker.startDate.format('MM/DD/YYYY');
      let end = picker.endDate.format('MM/DD/YYYY');
      daysSelected = datediff(parseDate(start), parseDate(end));

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
      // add in our own validation
      if (daysSelected == 0) {
        daysValid = false;
        messageContent = `
          <div class="warning"><p class="warning-message"><i class="bi bi-exclamation-triangle"></i>  Please select dates</p></div>
        `;
      } else if (daysSelected > 15) {
        daysValid = false;
        messageContent = `
          <div class"warning"><p class="warning-message"><i class="bi bi-exclamation-triangle"></i> Please select less than 16 nights</p></div>
        `;

      } else {
        daysValid = true;
        messageContent = `
          <div class="success"><p class="warning-message">Nights selected: ${daysSelected} <i class="bi bi-check-circle"></i></p></div>
        `;
      }
      message.innerHTML = messageContent;
    }
  );
});



const accomadationResult = document.getElementById("accomadation-result");
showAllAccomodation();

function showAllAccomodation() {

  accomadationResult.innerHTML = "";
  for (let i = 0; i < accomadation.length; i++) {

    accomadationResult.innerHTML += `

  <div class="accomdation-list-item">
    <div class="accomadation-img">
    <div class="swiper mySwiper${accomadation[i].id}">
       <div class="swiper-wrapper">
         <div class="swiper-slide"><img src="${accomadation[i].image_src}" alt=""></div>
         <div class="swiper-slide"><img src="${accomadation[i].image_src_2}" alt=""></div>
          <div class="swiper-slide"><img src="${accomadation[i].image_src_3}" alt=""></div>

       </div>
       <div class="swiper-button-next swiper-button-next${accomadation[i].id}"></div>
       <div class="swiper-button-prev swiper-button-prev${accomadation[i].id}"></div>
     </div>
    </div>
    <div class="accomadation-info">
      <div class="accomadation-title">
        <h3>${accomadation[i].name}</h3>
        <p>${accomadation[i].location}</p>
        <span class="row">
          <h5>$${accomadation[i].price}</h5>
          <p>a night</p>
        </span>
      </div>
      <div class="accomadation-title-aminities">
        <ul>
          <li><span class="material-symbols-outlined">
              groups
            </span>
            <p>${accomadation[i].guests}</p>
          </li>
          <li><span class="material-symbols-outlined">
              king_bed
            </span>
            <p>${accomadation[i].bed}</p>
          </li>
          <li><span class="material-symbols-outlined">
              bathroom
            </span>
            <p>${accomadation[i].bathroom}</p>
          </li>
        </ul>
      </div>
      <div class="accomadation-short-bio">
        <p>${accomadation[i].description}
        </p>
        <a id="more-info-btn-${accomadation[i].id}" onclick="moreInfo${accomadation[i].id}()" href="#/">
          <h5>See More</h5>
        </a>
      </div>
    </div>
    <div id="more-info-expand-${accomadation[i].id}" class="more-info-toggle-${accomadation[i].id} accomadation-more-info-${accomadation[i].id}">
      <div class="filter-title">
        <p>AMINITIES</p>
      </div>
      <ul class="glamping-checkbox">
        <li> <span class="material-symbols-outlined">
            ${accomadation[i].aminities_logo_1}
          </span> ${accomadation[i].aminities_1}</li>
        <li> <span class="material-symbols-outlined">
            ${accomadation[i].aminities_logo_2}
          </span> ${accomadation[i].aminities_2}</li>
        <li> <span class="material-symbols-outlined">
            ${accomadation[i].aminities_logo_3}
          </span> ${accomadation[i].aminities_3}</li>
        <li> <span class="material-symbols-outlined">
            ${accomadation[i].aminities_logo_4}
          </span> ${accomadation[i].aminities_4}</li>
        <li> <span class="material-symbols-outlined">
            ${accomadation[i].aminities_logo_5}
          </span> ${accomadation[i].aminities_5}</li>
        <li> <span class="material-symbols-outlined">
            ${accomadation[i].aminities_logo_6}
          </span> ${accomadation[i].aminities_6}</li>
      </ul>
      <div class="filter-title">
        <p>MEAL OPTIONS</p>
      </div>
      <ul class="glamping-checkbox">
        <li> <span class="material-symbols-outlined">
            breakfast_dining
          </span> ${accomadation[i].breakfast}</li>
        <li> <span class="material-symbols-outlined">
            lunch_dining
          </span> ${accomadation[i].lunch}</li>
        <li> <span class="material-symbols-outlined">
            dinner_dining
          </span>${accomadation[i].dinner}</li>
      </ul>
    </div>
    <div class="visit-website-container">

      <p> <span class="bold">$${accomadation[i].price} a night</span> ${accomadation[i].nights}</p>
      <div class="visit-website-buttons">
        <button onClick="flyMap(${accomadation[i].id}), showMap()"  class="view-on-map" type="button" name="button">
          <h3>VIEW ON MAP</h3>
        </button>
        <button class="visit-website" type="button" name="button">
          <h3>VISIT WEBSITE</h3>
        </button>
      </div>
  `;
    generateSwiper();
  }
}

function generateSwiper() {
  let swiper0 = new Swiper(".mySwiper0", {
    navigation: {
      nextEl: ".swiper-button-next0",
      prevEl: ".swiper-button-prev0",
    },
  });

  let swiper1 = new Swiper(".mySwiper1", {
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
  });

  let swiper2 = new Swiper(".mySwiper2", {
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
  });

  let swiper3 = new Swiper(".mySwiper3", {
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
  });
}

let count = 0;
const number = document.getElementById("number");
const decrement = document.getElementById('decrement');

function incrementButton() {
  decrement.style.opacity = 1;
  decrement.style.cursor = "pointer";
  count++;
  number.innerText = count;
}

function decrementButton() {
  if (count == 0) {
    decrement.style.opacity = 0.5;
    decrement.style.cursor = "not-allowed";
  } else {
    decrement.style.opacity = 1;
    count--;
    number.innerText = count;
  }
}

// let daysValid = false;
let guestsValid = false;

const submitBtn = document.getElementById('di-btn');
submitBtn.onclick = function() {
  validation();
};

function validation() {
  let messageContent;
  let messageContent2;
  let guestsSelected = number.innerText;

  if (daysValid == false) {
    messageContent = `
      <div class="warning"><p class="warning-message"><i class="bi bi-exclamation-triangle"></i>  Please select dates</p></div>
    `;
  } else if (daysValid == true) {
    messageContent = `
          <div class="success"><p class="warning-message">Nights selected: ${daysSelected} <i class="bi bi-check-circle"></i></p></div>
        `;
  }

  // Check if guests are valid
  if (guestsSelected == 0 || guestsSelected >= 5) {
    guestsValid = false;
    messageContent2 = `
    <div class="warning"><p class="warning-message"><i class="bi bi-exclamation-triangle"></i>  Please select guests</p></div>
  `;
  } else if (guestsSelected >= 1 || guestsSelected <= 4) {
    guestsValid = true;
    messageContent2 = "";
  }



  if (daysValid == true && guestsValid == true) {

    filterGlamp();
    messageContent = `
          <div class="success"><p class="warning-message">Nights selected: ${daysSelected} <i class="bi bi-check-circle"></i></p></div>
        `;
    messageContent2 = "";
  }
  message.innerHTML = messageContent;
  message2.innerHTML = messageContent2;
}
const selectedGlamp = [];
let selectedGlampType = [];
// console.log(messageContent2);
function filterGlamp() {

  // grab the checked boxes
  const location = document.getElementById('location-btn');
  let locationSelected = location.value.toLowerCase();
  let guestsSelected = number.innerText;
  // declare an array to contain all the checked genres
  selectedGlampType.length = 0;
  for (let i = 0; i < location.length; i++) {
    // grab each individual location value
    selectedGlamp.push(location[i].value);
  }
  accomadationResult.innerHTML = "";

  if (locationSelected == "north") {
    for (let i = 0; i < accomadation.length; i++) {

      if (accomadation[i].location_select.includes("north") && daysSelected >= accomadation[i].minNights && daysSelected <= accomadation[i].maxNights && guestsSelected >= accomadation[i].minGuests && guestsSelected <= accomadation[i].maxGuests) {
        map.flyTo({
          center: [175.83859267516152, -38.1272152880048],
          zoom: 7,

        });
        generateGlamp(i);
        selectedGlampType.push(accomadation[i]);
      }
    } //end of loop statement
  } else if (locationSelected == "south") {
    for (let i = 0; i < accomadation.length; i++) {

      if (accomadation[i].location_select.includes("south") && daysSelected >= accomadation[i].minNights && daysSelected <= accomadation[i].maxNights && guestsSelected >= accomadation[i].minGuests && guestsSelected <= accomadation[i].maxGuests) {
        generateGlamp(i);
        selectedGlampType.push(accomadation[i]);
        map.flyTo({
          center: [168.91115621453855, -44.85413732469042],
          zoom: 7,

        });
      }
    }
  } else if (locationSelected == "anywhere") {
    for (let i = 0; i < accomadation.length; i++) {

      if (daysSelected >= accomadation[i].minNights && daysSelected <= accomadation[i].maxNights && guestsSelected >= accomadation[i].minGuests && guestsSelected <= accomadation[i].maxGuests) {

        generateGlamp(i);
        selectedGlampType.push(accomadation[i]);
        map.flyTo({
          center: [172.49679211728272, -41.14589824546113],

          zoom: 4.5

        });
      }
    }

  } //end of if statement
  let countAll = document.querySelectorAll('.accomdation-list-item').length;

  if (countAll == 0) {
    notifications.innerHTML = `
          <div class="alert"><h5>no results</h5></div>
          `;

  } else if (countAll == 1) {
    notifications.innerHTML = `
            <div class="alert"><h5> found ${countAll} site</h5></div>
            `;
  } else {
    notifications.innerHTML = `
          <div class="alert"><h5> found ${countAll} sites</h5></div>
          `;
  }
  console.log(selectedGlampType);
}
//end of generate results,


function filterGlampChecks() {
  // reset our list of artists
  accomadationResult.innerHTML = "";
  // grab the checked boxes
  let checkedBoxes =
    // look for an checkbox input type and find the ones checked
    document.querySelectorAll("input[name=glamp-checkbox]:checked");

  // declare an array to contain all the checked genres
  const selectedGlampChecks = [];

  for (let i = 0; i < checkedBoxes.length; i++) {
    // grab each individual genre value
    // console.log(checkedBoxes[i].value);
    selectedGlampChecks.push(checkedBoxes[i].value);
  }
  // console.log(selectedGenres);
  if (selectedGlampChecks.length == 0 && selectedGlampType.length >= 1) {
    // reset our list of artists

    filterGlamp();
  } else if (selectedGlampType.length == 0) {
    showAllAccomodation();
    validation();

  } else {
    accomadationResult.innerHTML = "";

    for (let i = 0; i < selectedGlampChecks.length; i++) {

      if (selectedGlampChecks[i] == "treehouse") {
        // console.log("We found out that you were searching for pop music");
        // loop through the artists array and compare the genre that
        // the user chose to the genre of each artist
        for (let i = 0; i < selectedGlampType.length; i++) {
          if (selectedGlampType[i].type == "treehouse") {

            generateCheckedGlamps(i);
            console.log(selectedGlampType[i].type);
          } // end if statement
        } //end loop checking all artists
      } // end of for loop


      if (selectedGlampChecks[i] == "yurt") {
        // console.log("We found out that you were searching for pop music");
        // loop through the artists array and compare the genre that
        // the user chose to the genre of each artist
        for (let i = 0; i < selectedGlampType.length; i++) {
          if (selectedGlampType[i].type == "yurt") {
            generateCheckedGlamps(i);
            console.log(selectedGlampType[i].type);
          } // end if statement
        } //end loop checking all artists
      } // end of for loop

      if (selectedGlampChecks[i] == "tented cabin") {
        // console.log("We found out that you were searching for pop music");
        // loop through the artists array and compare the genre that
        // the user chose to the genre of each artist
        for (let i = 0; i < selectedGlampType.length; i++) {
          if (selectedGlampType[i].type == "tented cabin") {
            generateCheckedGlamps(i);
            console.log(selectedGlampType[i].type);

          } // end if statement
        } //end loop checking all artists
      } // end of for loop cabin
      if (selectedGlampChecks[i] == "low") {
        // console.log("We found out that you were searching for pop music");
        // loop through the artists array and compare the genre that
        // the user chose to the genre of each artist
        for (let i = 0; i < selectedGlampType.length; i++) {
          if (selectedGlampType[i].price <= 100) {
            generateCheckedGlamps(i);
            console.log(selectedGlampType[i].type);
          } // end if statement
        } //end loop checking all artists
      } // end of for loop
      if (selectedGlampChecks[i] == "medium") {
        // console.log("We found out that you were searching for pop music");
        // loop through the artists array and compare the genre that
        // the user chose to the genre of each artist
        for (let i = 0; i < selectedGlampType.length; i++) {
          if (selectedGlampType[i].price >= 100 && selectedGlampType[i].price <= 200) {
            generateCheckedGlamps(i);
            console.log(selectedGlampType[i].type);
          } // end if statement
        } //end loop checking all artists
      } // end of for loop
      if (selectedGlampChecks[i] == "high") {
        // console.log("We found out that you were searching for pop music");
        // loop through the artists array and compare the genre that
        // the user chose to the genre of each artist
        for (let i = 0; i < selectedGlampType.length; i++) {
          if (selectedGlampType[i].price >= 200) {
            generateCheckedGlamps(i);
            console.log(selectedGlampType[i].type);
          } // end if statement
        } //end loop checking all artists
      } // end of for loop
      if (selectedGlampChecks[i] == "wi-fi") {
        // console.log("We found out that you were searching for pop music");
        // loop through the artists array and compare the genre that
        // the user chose to the genre of each artist
        for (let i = 0; i < selectedGlampType.length; i++) {
          if (selectedGlampType[i].aminities_logo_2 == "wifi") {
            generateCheckedGlamps(i);
            console.log(selectedGlampType[i].type);
          } // end if statement
        } //end loop checking all artists
      } // end of for loop
      if (selectedGlampChecks[i] == "bath") {
        // console.log("We found out that you were searching for pop music");
        // loop through the artists array and compare the genre that
        // the user chose to the genre of each artist
        for (let i = 0; i < selectedGlampType.length; i++) {
          if (selectedGlampType[i].aminities_logo_4 == "hot_tub") {
            generateCheckedGlamps(i);
            console.log(selectedGlampType[i].type);
          } // end if statement
        } //end loop checking all artists
      } // end of for loop
    } //end of the else statement
    let countAll = document.querySelectorAll('.accomdation-list-item').length;

    if (countAll == 0) {
      notifications.innerHTML = `
          <div class="alert"><h5>no results</h5></div>
          `;

    } else if (countAll == 1) {
      notifications.innerHTML = `
            <div class="alert"><h5> found ${countAll} site</h5></div>
            `;
    } else {
      notifications.innerHTML = `
          <div class="alert"><h5> found ${countAll} sites</h5></div>
          `;
    }
  } // end of filter genre function

}


function generateGlamp(i) {
  let totalPrice = (accomadation[i].price * daysSelected);


  accomadationResult.innerHTML += `

    <div data-aos="fade-up" class="accomdation-list-item">
      <div class="accomadation-img">
      <div class="swiper mySwiper${accomadation[i].id}">
         <div class="swiper-wrapper">
           <div class="swiper-slide"><img src="${accomadation[i].image_src}" alt=""></div>
           <div class="swiper-slide"><img src="${accomadation[i].image_src_2}" alt=""></div>
            <div class="swiper-slide"><img src="${accomadation[i].image_src_3}" alt=""></div>

         </div>
         <div class="swiper-button-next swiper-button-next${accomadation[i].id}"></div>
         <div class="swiper-button-prev swiper-button-prev${accomadation[i].id}"></div>
       </div>
      </div>
      <div class="accomadation-info">
        <div class="accomadation-title">
          <h3>${accomadation[i].name}</h3>
          <p>${accomadation[i].location}</p>
          <span class="row">
            <h5>$${totalPrice}</h5>
            <p>for ${daysSelected} nights</p>
          </span>
        </div>
        <div class="accomadation-title-aminities">
          <ul>
            <li><span class="material-symbols-outlined">
                groups
              </span>
              <p>${accomadation[i].guests}</p>
            </li>
            <li><span class="material-symbols-outlined">
                king_bed
              </span>
              <p>${accomadation[i].bed}</p>
            </li>
            <li><span class="material-symbols-outlined">
                bathroom
              </span>
              <p>${accomadation[i].bathroom}</p>
            </li>
          </ul>
        </div>
        <div class="accomadation-short-bio">
          <p>${accomadation[i].description}
          </p>
          <a id="more-info-btn-${accomadation[i].id}" onclick="moreInfo${accomadation[i].id}()" href="#/">
            <h5>See More</h5>
          </a>
        </div>
      </div>
      <div id="more-info-expand-${accomadation[i].id}" class="more-info-toggle-${accomadation[i].id} accomadation-more-info-${accomadation[i].id}">
        <div class="filter-title">
          <p>AMINITIES</p>
        </div>
        <ul class="glamping-checkbox">
          <li> <span class="material-symbols-outlined">
              ${accomadation[i].aminities_logo_1}
            </span> ${accomadation[i].aminities_1}</li>
          <li> <span class="material-symbols-outlined">
              ${accomadation[i].aminities_logo_2}
            </span> ${accomadation[i].aminities_2}</li>
          <li> <span class="material-symbols-outlined">
              ${accomadation[i].aminities_logo_3}
            </span> ${accomadation[i].aminities_3}</li>
          <li> <span class="material-symbols-outlined">
              ${accomadation[i].aminities_logo_4}
            </span> ${accomadation[i].aminities_4}</li>
          <li> <span class="material-symbols-outlined">
              ${accomadation[i].aminities_logo_5}
            </span> ${accomadation[i].aminities_5}</li>
          <li> <span class="material-symbols-outlined">
              ${accomadation[i].aminities_logo_6}
            </span> ${accomadation[i].aminities_6}</li>
        </ul>
        <div class="filter-title">
          <p>MEAL OPTIONS</p>
        </div>
        <ul class="glamping-checkbox">
          <li> <span class="material-symbols-outlined">
              breakfast_dining
            </span> ${accomadation[i].breakfast}</li>
          <li> <span class="material-symbols-outlined">
              lunch_dining
            </span> ${accomadation[i].lunch}</li>
          <li> <span class="material-symbols-outlined">
              dinner_dining
            </span>${accomadation[i].dinner}</li>
        </ul>
      </div>
      <div class="visit-website-container">

        <p> <span class="bold">$${accomadation[i].price} a night</span> ${accomadation[i].nights}</p>
        <div class="visit-website-buttons">
          <button onClick="flyMap(${accomadation[i].id}), showMap()"  class="view-on-map" type="button" name="button">
            <h3>VIEW ON MAP</h3>
          </button>
          <button class="visit-website" type="button" name="button">
            <h3>VISIT WEBSITE</h3>
          </button>
        </div>
    `;
  generateSwiper();
}

function sortByLow() {
  $('input[value="high"]').removeAttr("checked");
  accomadationResult.innerHTML = "";
  for (let i = 0; i < selectedGlampType.length; i++) {
    selectedGlampType.sort(function(a, b) {
      return a.price - b.price;

    });
    console.log(selectedGlampType[i].price);
    generateCheckedGlamps(i);
  }
}

function sortByHigh() {
  $('input[value="low"]').removeAttr("checked");
  accomadationResult.innerHTML = "";
  for (let i = 0; i < selectedGlampType.length; i++) {
    selectedGlampType.sort(function(a, b) {
      return b.price - a.price;

    });
    console.log(selectedGlampType[i].price);
    generateCheckedGlamps(i);
  }
}

function generateCheckedGlamps(i) {
  let totalPrice = (selectedGlampType[i].price * daysSelected);
  // const singleGlamp = Array.from(selectedGlampType.reduce((map, obj) => map.set(obj.id, obj), new Map()).values());
  accomadationResult.innerHTML += `

    <div data-aos="fade-up" class="accomdation-list-item">
      <div class="accomadation-img">
      <div class="swiper mySwiper${selectedGlampType[i].id}">
         <div class="swiper-wrapper">
           <div class="swiper-slide"><img src="${selectedGlampType[i].image_src}" alt=""></div>
           <div class="swiper-slide"><img src="${selectedGlampType[i].image_src_2}" alt=""></div>
            <div class="swiper-slide"><img src="${selectedGlampType[i].image_src_3}" alt=""></div>

         </div>
         <div class="swiper-button-next swiper-button-next${selectedGlampType[i].id}"></div>
         <div class="swiper-button-prev swiper-button-prev${selectedGlampType[i].id}"></div>
       </div>
      </div>
      <div class="accomadation-info">
        <div class="accomadation-title">
          <h3>${selectedGlampType[i].name}</h3>
          <p>${selectedGlampType[i].location}</p>
          <span class="row">
            <h5>$${totalPrice}</h5>
            <p>for ${daysSelected} nights</p>
          </span>
        </div>
        <div class="accomadation-title-aminities">
          <ul>
            <li><span class="material-symbols-outlined">
                groups
              </span>
              <p>${selectedGlampType[i].guests}</p>
            </li>
            <li><span class="material-symbols-outlined">
                king_bed
              </span>
              <p>${selectedGlampType[i].bed}</p>
            </li>
            <li><span class="material-symbols-outlined">
                bathroom
              </span>
              <p>${selectedGlampType[i].bathroom}</p>
            </li>
          </ul>
        </div>
        <div class="accomadation-short-bio">
          <p>${selectedGlampType[i].description}
          </p>
          <a id="more-info-btn-${selectedGlampType[i].id}" onclick="moreInfo${selectedGlampType[i].id}()" href="#/">
            <h5>See More</h5>
          </a>
        </div>
      </div>
      <div id="more-info-expand-${selectedGlampType[i].id}" class="more-info-toggle-${selectedGlampType[i].id} accomadation-more-info-${selectedGlampType[i].id}">
        <div class="filter-title">
          <p>AMINITIES</p>
        </div>
        <ul class="glamping-checkbox">
          <li> <span class="material-symbols-outlined">
              ${selectedGlampType[i].aminities_logo_1}
            </span> ${selectedGlampType[i].aminities_1}</li>
          <li> <span class="material-symbols-outlined">
              ${selectedGlampType[i].aminities_logo_2}
            </span> ${selectedGlampType[i].aminities_2}</li>
          <li> <span class="material-symbols-outlined">
              ${selectedGlampType[i].aminities_logo_3}
            </span> ${selectedGlampType[i].aminities_3}</li>
          <li> <span class="material-symbols-outlined">
              ${selectedGlampType[i].aminities_logo_4}
            </span> ${selectedGlampType[i].aminities_4}</li>
          <li> <span class="material-symbols-outlined">
              ${selectedGlampType[i].aminities_logo_5}
            </span> ${selectedGlampType[i].aminities_5}</li>
          <li> <span class="material-symbols-outlined">
              ${selectedGlampType[i].aminities_logo_6}
            </span> ${selectedGlampType[i].aminities_6}</li>
        </ul>
        <div class="filter-title">
          <p>MEAL OPTIONS</p>
        </div>
        <ul class="glamping-checkbox">
          <li> <span class="material-symbols-outlined">
              breakfast_dining
            </span> ${selectedGlampType[i].breakfast}</li>
          <li> <span class="material-symbols-outlined">
              lunch_dining
            </span> ${selectedGlampType[i].lunch}</li>
          <li> <span class="material-symbols-outlined">
              dinner_dining
            </span>${selectedGlampType[i].dinner}</li>
        </ul>
      </div>
      <div class="visit-website-container">

        <p> <span class="bold">$${selectedGlampType[i].price} a night</span> ${selectedGlampType[i].nights}</p>
        <div class="visit-website-buttons">
          <button <button onClick="flyMap(${selectedGlampType[i].id}), showMap()"  class="view-on-map" type="button" name="button">
            <h3>VIEW ON MAP</h3>
          </button>
          <button class="visit-website" type="button" name="button">
            <h3>VISIT WEBSITE</h3>
          </button>
        </div>
    `;
  generateSwiper();
}


function flyMap(i) {
  map.flyTo({
    center: [`${accomadation[i].long}`, `${accomadation[i].lat}`],
    zoom: `${accomadation[i].zoom}`,

  });
}



// Mapbox starts here

mapboxgl.accessToken = 'pk.eyJ1IjoiYmlsbHlyaWRnd2F5IiwiYSI6ImNsNHE4N2h0ZjBlejMzY2xwMTZvdXpkbm4ifQ.qnxhS78V1jnbi0iRqZku_w';

const map = new mapboxgl.Map({

  container: 'map',

  style: 'mapbox://styles/billyridgway/cl4q8i87w000u14o22h15q5yw',

  center: [172.49679211728272, -41.14589824546113],

  zoom: 4.5

});

// ALL THIS CODE IS FROM THE documentation

const customMarkers = {
  // declare the type of data we are giving to mapbox
  type: 'FeatureCollection',
  // declare our list of features
  features: [{
      type: 'Feature',
      geometry: {
        type: 'point',
        coordinates: [
          168.65915114310053, -45.03193444280787
        ]
      },
      properties: {
        title: `Yurt Yoga Retreat`,
        description: "Queenstown, South Island",
        customId: "yurt"
      }
    }, //end of first feature
    {
      type: 'Feature',
      geometry: {
        type: 'point',
        coordinates: [
          169.25216451097418, -44.61039326304767
        ]
      },
      properties: {
        title: `Lakefront Tiny House`,
        description: "Lake Hawea, South Island",
        customId: "tiny-house"
      }
    }, //end of first feature
    {
      type: 'Feature',
      geometry: {
        type: 'point',
        coordinates: [

          176.78761999320182, -37.89366186417842
        ]
      },
      properties: {
        title: `Enchanting Yurt`,
        description: "Whakatane, North Island",
        customId: "yurt"
      }
    }, //end of first feature
    {
      type: 'Feature',
      geometry: {
        type: 'point',
        coordinates: [

          174.67153500003036, -37.27661197667441
        ]
      },
      properties: {
        title: `Tree House Paradise`,
        description: "Waiuku, North Island",
        customId: "tree-house"
      }
    }, //end of first feature
  ]
};


// render the custom markers
function renderMarkers(currentMarker) {
  let newMarkerElement = document.createElement('div');
  newMarkerElement.className = 'marker';

  if (currentMarker.properties.customId == "yurt") {
    newMarkerElement.setAttribute("id", "special-marker");
    newMarkerElement.style.backgroundImage = "url('img/yurt-logo.png')";
    newMarkerElement.style.backgroundSize = "cover";
    newMarkerElement.style.backgroundColor = "contain";
    newMarkerElement.style.backgroundRepeat = "no-repeat";
    newMarkerElement.style.backgroundPosition = "55% 46%";
    newMarkerElement.style.backgroundSize = "100% 100%";
    newMarkerElement.style.width = "75px";
    newMarkerElement.style.height = "75px";
  }

  if (currentMarker.properties.customId == "tiny-house") {
    newMarkerElement.setAttribute("id", "special-marker");
    newMarkerElement.style.backgroundImage = "url('img/tiny-home-logo.png')";
    newMarkerElement.style.backgroundSize = "cover";
    newMarkerElement.style.backgroundColor = "contain";
    newMarkerElement.style.backgroundRepeat = "no-repeat";
    newMarkerElement.style.backgroundPosition = "55% 46%";
    newMarkerElement.style.backgroundSize = "100% 100%";
    newMarkerElement.style.width = "75px";
    newMarkerElement.style.height = "75px";
  }

  if (currentMarker.properties.customId == "tree-house") {
    newMarkerElement.setAttribute("id", "special-marker");
    newMarkerElement.style.backgroundImage = "url('img/treehouse-logo.png')";
    newMarkerElement.style.backgroundSize = "cover";
    newMarkerElement.style.backgroundColor = "contain";
    newMarkerElement.style.backgroundRepeat = "no-repeat";
    newMarkerElement.style.backgroundPosition = "55% 46%";
    newMarkerElement.style.backgroundSize = "100% 100%";
    newMarkerElement.style.width = "75px";
    newMarkerElement.style.height = "75px";
  }



  new mapboxgl.Marker(newMarkerElement)
    .setLngLat(currentMarker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({
        offset: 25
      })
      .setHTML('<h3>' + currentMarker.properties.title + '</h3><p>' + currentMarker.properties.description + '</p>'))
    .addTo(map);
}

customMarkers.features.forEach(renderMarkers);



const mobileMapButton = document.getElementById('mobile-map-button');
const mobileListButton = document.getElementById('mobile-list-button');
const mapContainer = document.getElementById('map');

function showList() {
  mapContainer.classList.toggle("show-map");
  mapContainer.classList.toggle("hide-map");
  mobileListButton.classList.toggle("show-mobile-map-button");
  mobileListButton.classList.toggle("show-mobile-list-button");
  mobileMapButton.classList.toggle("show-mobile-map-button");
  mobileMapButton.classList.toggle("show-mobile-list-button");
}

function showMap() {
  mapContainer.classList.toggle("show-map");
  mapContainer.classList.toggle("hide-map");
  mobileListButton.classList.toggle("show-mobile-map-button");
  mobileListButton.classList.toggle("show-mobile-list-button");
  mobileMapButton.classList.toggle("show-mobile-map-button");
  mobileMapButton.classList.toggle("show-mobile-list-button");
}

mobileListButton.onclick = function() {
  showList();
};

mobileMapButton.onclick = function() {
  showMap();
};

function expandToggleMobile() {
  let dataInput = document.getElementById('data-input-id');
  dataInput.classList.toggle("data-input-toggle");
}

function expandFooterMobile1() {
  let listId = document.getElementById('list-1');
  listId.classList.toggle("footer-list-toggle");
  let listArrow = document.getElementById('list-arrow1');
  listArrow.classList.toggle("list-arrow-rotate");
}

function expandFooterMobile2() {
  let listId = document.getElementById('list-2');
  listId.classList.toggle("footer-list-toggle");
  let listArrow = document.getElementById('list-arrow2');
  listArrow.classList.toggle("list-arrow-rotate");
}

function expandFooterMobile3() {
  let listId = document.getElementById('list-3');
  listId.classList.toggle("footer-list-toggle");
  let listArrow = document.getElementById('list-arrow3');
  listArrow.classList.toggle("list-arrow-rotate");
}

function expandFooterMobile4() {
  let listId = document.getElementById('list-4');
  listId.classList.toggle("footer-list-toggle");
  let listArrow = document.getElementById('list-arrow4');
  listArrow.classList.toggle("list-arrow-rotate");
}

const notifications = document.getElementById("notifications");
