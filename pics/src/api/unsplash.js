import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        authorization: 'Client-ID Z3wqrBVsoYGTi47E8Q0O99ND1Fu8eB3c1ZBiiztTUfU'
      }
})