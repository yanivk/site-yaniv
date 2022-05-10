import axios from 'axios'

type ResponsePromise = {
    data: [],
    status: number,
    statusText: string,
    headers: string,
    config: string
}

export function httpGet (url: string): Promise<ResponsePromise> {
  const config = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }
  return axios.get(`${process.env.VUE_APP_API_URL}/${url}`, config)
}
