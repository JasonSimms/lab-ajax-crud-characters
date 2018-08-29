const charactersAPI = new APIHandler("http://localhost:8000");
let x = "";
$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(result => {
      $(".displaybox").html(`Name: ${result.name} Weapon: ${result.weapon}`);
      // console.log(result))
    });
  };

  // router.get('/food', (req, res) => {
  //   Food.find({}).then(foods => {
  //       res.send(foods)
  //   })

  document.getElementById("fetch-one").onclick = function() {
    // console.log(document.getElementById('singleId').value,`<= char id`)
    // console.log($('#singleId').val(),`<= char id Jquery`)
    charactersAPI.getOneRegister($("#singleId").val()).then(result => {
      $(".name").html(`Name: ${result.name}`),
        $(".weapon").html(` Weapon: ${result.weapon}`),
        $(".cartoon").html(`Cartoon?: ${result.cartoon}`),
        $(".occupation").html(`Occupation: ${result.occupation}`),
        // $(".displaybox").html(`Name: ${result.name} Weapon: ${result.weapon}`);
        console.log(result);
    });
  };

  document.getElementById("delete-one").onclick = function() {};

  document.getElementById("edit-character-form").onsubmit = function() {};

  document.getElementById("new-character-form").onsubmit = function() {
    const newChar = {
      id: 1,
      name: "Han Solo",
      occupation: "Smuggler",
      weapon: "Blaster Pistol",
      cartoon: true
    };
    console.log(newChar);
    $("#charactersField").empty();
    // createCharacter(newChar);
  };
});
