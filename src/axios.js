import axios from 'axios';



const clienteAxios = axios.create({
  baseURL: "https://myappinow.herokuapp.com/";
})


export default clienteAxios;
