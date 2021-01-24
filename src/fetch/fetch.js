fetch('some-url')
  .then(handleResponse)
  .then((data) => console.log(data))
  .catch((error) => console.log(error))

function handleResponse(response) {
  let contentType = response.headers.get('content-type')
  if (contentType.includes('application/json')) {
    return handleJSONResponse(response)
  } else if (contentType.includes('text/html')) {
    return handleTextResponse(response)
  } else {
    // Other response types as necessary. I haven't found a need for them yet though.
    throw new Error(`Sorry, content-type ${contentType} not supported`)
  }
}

function handleJSONResponse(response) {
  return response.json().then((json) => {
    if (response.ok) {
      return json
    } else {
      return Promise.reject(
        Object.assign({}, json, {
          status: response.status,
          statusText: response.statusText,
        })
      )
    }
  })
}
function handleTextResponse(response) {
  return response.text().then((text) => {
    if (response.ok) {
      return text
    } else {
      return Promise.reject({
        status: response.status,
        statusText: response.statusText,
        err: text,
      })
    }
  })
}

const fetch_retry = async (url, options, n) => {
  let error
  for (let i = 0; i < n; i++) {
    try {
      response = await fetch(url, options)
      if (response === 200) {
        return response
      } else {
        throw new Error(response)
      }
    } catch (err) {
      error = err
      //1.
      if (i + 1 === n) throw err
    }
  }
  throw error
}
<<<<<<< HEAD
let response = fetch_retry('/someUrl/json', options, 10)
=======

// https://medium.com/better-programming/deep-insights-into-javascripts-fetch-api-e8e8203c0965
// let controller = new AbortController()
// setTimeout(() => controller.abort(), 1000)

// try {
//   let response = await fetch('/long-operation', {
//     signal: controller.signal,
//   })
// } catch (err) {
//   if (err.name == 'AbortError') {
//     console.log('Aborted!')
//   } else {
//     throw err
//   }
// }
>>>>>>> b942fcc52c2f63e18e57c3ef5cc2822c8cd90b2a
