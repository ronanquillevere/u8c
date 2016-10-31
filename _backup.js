var fetch = require('node-fetch')

let getPlayer = function (playerId) {
  let queryStart = `http://www.easports.com/uk/fifa/ultimate-team/api/fut/item?jsonParamObject=%7B"baseid":`
  let queryEnd = `%7D`
  let query = queryStart + playerId + queryEnd

  return fetch(query)
    .then(function (response) {
      var contentType = response.headers.get('content-type')
      if (contentType && contentType.indexOf('application/json') !== -1) {
        return response.json()
      } else {
        throw new Error('Did not receive any json')
      }
    }).then(function (json) {
      if (!json || !json.items || json.items.length === 0) {
        throw new Error('No player with id :' + playerId)
      }
      return json.items[0]
    })
    .catch(function (err) {
      console.log('Error ' + err)
        // return new Promise(
        //     // The resolver function is called with the ability to resolve or
        //     // reject the promise
        //     function (resolve, reject) {
        //       reject(`Error retrieving player : ` + playerId + ` ` + err)
        //     }
        //   )
    })
}

// sleep time expects milliseconds
let sleep = function (time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

let i = 1
  // while (i < 4) {
  //   console.log(new Date().getTime())
console.log(new Date().getTime())
sleep(1000).then(function () {
  console.log(new Date().getTime())
  getPlayer(++i)
    .then(p => console.log(p.firstName + ` ` + p.lastName))
    .then(x => console.log(new Date().getTime()))
    // .catch(x => console.log('should not enter'))
})
