import axios from "axios";

export const AxiosInst = axios.create({
    baseURL: 'https://lewibs-com-backend.herokuapp.com',
    timeout: 10000,
    headers: {'Access-Control-Allow-Origin': true}
  });