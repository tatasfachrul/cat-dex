import axios from 'axios'

export const getCat = () => {
  return{
    type: 'GET_CAT',
    payload: axios.get('https://jsonplaceholder.typicode.com/users')
  }
}
