import produce from 'immer'
import api from '../lib/api'
import storage from '../lib/storage'

// ==============================
// Actions
// ==============================
const SET_LOCATION = 'example/weather/SET_LOCATION'
const CLEAR_LOCATION = 'example/weather/CLEAR_LOCATION'
const SET_FETCHING = 'example/weather/SET_FETCHING'
const CREATE_QUERY_RESPONSE = 'example/weather/CREATE_QUERY_RESPONSE'
const SET_LOCATION_TEMP = 'example/weather/SET_LOCATION_TEMP'

const initialState = {
  location: storage.load('location'),
  locationTemp: null
}

export default produce(
  (draft, action) => {
    switch (action.type) {
      case SET_LOCATION:
        draft.location = action.location
        storage.save('location', action.location)
        return

      case CLEAR_LOCATION:
        draft.location = null
        storage.delete('location')
        return

      case SET_LOCATION_TEMP:
        draft.locationTemp = action.temp
        return
    }
  }, initialState
)

// ==============================
// Action Creators
// ==============================
export const setLocation = location => ({
  type: SET_LOCATION,
  location
})

export const setLocationTemp = temp => ({
  type: SET_LOCATION_TEMP,
  temp
})

export const clearLocation = () => ({
  type: CLEAR_LOCATION
})


// ==============================
// SIDE EFFECTS
// ==============================
export const fetchWeather = query => async dispatch => {

  // Formik requires a response in order to set submitting as false
  return new Promise((resolve, reject) => {
    api.request.get(`/query/${query}`)
      .then(response => {
        if (response.data.temp) {
          dispatch(setLocation(query))
          dispatch(setLocationTemp(response.data.temp))
          resolve()
        } else {
          throw new Error("No temp found in response")
        }
      })
      .catch(error => {
        console.error(error)
        reject(error.message)
      })
  })
}
