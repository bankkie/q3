const axios = require('axios').default
const HtmlTableToJson = require('html-table-to-json')

async function postData (url = '', argument) {
  const response = await axios(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      Cookie: 'hasCookie=true'

    }
  })
  const jsonTables = HtmlTableToJson.parse(`${response.data}`)
  console.log(argument)
  console.log(jsonTables.results[0].find(e => e['Fund Name'] === argument).Nav)

  // return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://codequiz.azurewebsites.net/', process.argv[2])
