// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// owl carousel slider js
var owl = $('.project_carousel').owlCarousel({
    loop: false,
    margin: 15,
    center: true,
    startPosition: 2,
    autoplay: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        769: {
            items: 2,
        },
        992: {
            center: true,
            items: 3
        }
    }
})


// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a')
    var $item = $(this);
    var filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})
/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(19.090174, 72.882247),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function readMore(){
    let dots = document.getElementById('dots');
    let more =document.getElementById('more');
    let click = document.getElementById('click');
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        click.innerHTML = "Read more";
        more.style.display = "none";
      } else {
        dots.style.display = "none";
        click.innerHTML = "Read less";
        more.style.display = "inline";
      }

}

// function sendEmail() {
//     Email.send({
//       Host: "smtp.gmail.com",
//       Username: "creativeattires4u@gmail.com",
//       Password: "ayub@1234",
//       To: 'kayub4947@gmail.com',
//       From: "creativeattires4u@gmail.com",
//       Subject: "Sending Email using javascript",
//       Body: "Well that was easy!!",
//     //   Attachments: [
//     //     {
//     //       name: "File_Name_with_Extension",
//     //       path: "Full Path of the file"
//     //     }]
//     })
//       .then(function (message) {
//         alert("Mail has been sent successfully")
//       });
//   }