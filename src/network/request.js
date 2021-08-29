import axios from 'axios'


export function request(config) {
  const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })


  instance1.interceptors.request.use(caa => {
    return caa
  },err => {
    // console.log(err)
  });

  return instance1(config)
}
