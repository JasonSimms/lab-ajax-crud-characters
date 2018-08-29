// class APIHandler to deal with the Axios calls.
// only responsability of this class is to display the JSON result  from the API,
// or give the needed information to the API via a function argument.
// START server: json-server --watch db.json --port 8000
const charApi = axios.create({
  baseURL: "http://localhost:8000"
});

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    console.log("fetching shit from the backend-----------");
    return charApi
      .get(`/characters`)
      .then(response => response.data)
      .catch(err => toggleButtonColour("#fetch-all", "red"));
  }

  getOneRegister(id) {
    return charApi
      .get(`/characters/${id}`)
      .then(response => response.data)
      .catch(err => toggleButtonColour("#fetch-all", "red"));
  }

  /*
  router.get('/food/:index', (req, res) => {
    Food.findOne({ index: req.params.index }).then(food => {
        if (food) return res.send(food)
        else res.send({ err: 404 })
    })
}) */

  createOneRegister(characterInfo) {
    return charApi.post('/characters',characterInfo).then(response => response.data ).catch(err => toggleButtonColour('#send-data','red'));
  }

  /*
  // create a new food
router.post('/food', (req, res) => {
    const { title, cuisine, calories, type } = req.body

    if (!title || !cuisine || !calories || !type) {
        return res.status(400).send({ error: 'Please provide all required fields.' })
    }

    let index = 1

    Food.findOne({})
        .sort({ index: -1 })
        .then(highestFood => {
            if (highestFood) index = highestFood.index + 1

            return new Food({ title, cuisine, calories, type, index }).save()
        })
        .then(newFood => {
            res.send(newFood)
        })
})
*/

  updateOneRegister() {}

  deleteOneRegister() {}
}
