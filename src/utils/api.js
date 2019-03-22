//@flow

const baseUrl = 'https://swapi.co/api'

export default {

  getPeople: (callback: (json: any)=> any, errorCallback: (error: any)=> any) => {
    fetch(`${baseUrl}/people`, {
      method: 'GET'
    }).then((response) => response.json())
    .then((responseJson) => {
        callback(responseJson)
    })
    .catch((error) => {
        errorCallback(error)
    })
  },

  getPerson: (personNumber: string, callback: (json: any)=> any, errorCallback: (error: any)=> any) => {
    fetch(`${baseUrl}/people/${personNumber}`, {
      method: 'GET'
    }).then((response) => response.json())
    .then((responseJson) => {
        callback(responseJson)
    })
    .catch((error) => {
        errorCallback(error)
    })
  }
  
}