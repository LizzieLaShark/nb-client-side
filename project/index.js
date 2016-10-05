var request = require('superagent')
var $ = require('jquery')
//var app = require('express')

// app.get('/hello', function (req, res) {
//   res.send('Nationbuilder bitchez')
// })

/////////////////////////////////////////////
//////////Create New Person From Form///////
///////////////////////////////////////////


// $('document').ready(function() {
//   console.log("ready!")

// var newPerson = $('.createNewPerson').on( "submit", function( event ) {
//   event.preventDefault();
//   console.log( $( this ).serialize() );
// })
//
// var JSONdNewPerson = JSON.stringify(newPerson)
//
// $(".submitButton").click(function(e) {
//   e.preventDefault()
//   console.log(JSONdNewPerson)
//   })

// })


/////////////////////////////////////////////
/////////Update event from form/////////////
///////////////////////////////////////////


$('document').ready(function() {
  console.log("ready!")

  var newPerson = $('.createNewPerson').on( "submit", function( event ) {
    event.preventDefault();
    console.log( $( this ).serialize() );
  })

  var JSONdNewPerson = JSON.stringify(newPerson)

  $(".submitButton").click(function(e) {
    e.preventDefault()
    console.log(JSONdNewPerson)

    request
  .post('https://kristingillies.nationbuilder.com/api/v1/people?access_token='+'access_token')
  .withCredentials()
  .set('Accept', 'application/json')
  .send(JSONdNewPerson)
  .end(function(err, res){
    if (err) {
      console.log("I'm sorry, there's been an error creating a person: ", err)
    } else {
      console.log("success: ", res)
    }
  })
})



// var eventData = $('.editEventForm').on( "submit", function( event ) {
//   event.preventDefault();
//   console.log( $( this ).serialize() );
//
// });
//
// var editedEventData = JSON.stringify(eventData)
//
//
//   $(".submitButton").click(function(e) {
//     e.preventDefault()
//     console.log(editedEventData)
//
//     request
//       .put('https://sandbox1455.nationbuilder.com/api/v1/sites/sandbox1455/pages/events/16?access_token='+'access_token')
//       .withCredentials()
//       .set('Accept', 'application/json')
//       .send(editedEventData)
//       .end(function(err, res){
//         if (err) {
//           console.log("I'm sorry, there's been an error editing your event: ", err)
//         } else {
//           console.log("success: ", res.body, "res status: ", res.status)
//         }
//       })
//   })
//
//

}) //ends doc ready


//
//
//
//
//
//
//
//
//
//
//
//
// ////////////////////////////////////
// /////////create an event///////////
// //////////////////////////////////
//
// request
//   .post('https://sandbox1455.nationbuilder.com/api/v1/sites/sandbox1455/pages/events?access_token=' + 'access_token')
//   .set('Accept', 'application/json')
//   .send({
//     "event": {
//       "status": "unlisted",
//       "name": "Eventington (test)",
//       "intro": "Come see Tycho at the Trash Fence!",
//       "time_zone": "Pacific Time (US & Canada)",
//       "start_time": "2016-10-08T17:00:00-00:00",
//       "end_time": "2015-10-08T19:00:00-00:00",
//       "contact": {
//         "name": "Earl Grey",
//         "contact_phone": "1234567890",
//         "show_phone": true,
//         "contact_email": "contact@EG.com",
//         "email": "contact@EG.org",
//         "show_email": false
//     }
//   }
// })
//   .end(function(err, res){
//     if (err) {
//       console.log("I'm sorry, there's been an error creating your event: ", err)
//     } else {
//       console.log("success: ", res.body, "res status: ", res.status)
//     }
//   })
