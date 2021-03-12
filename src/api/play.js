// 1 导入axios
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.timeout = 3000

// 添加所有电视剧
export function addPlay(play){
    return axios.post('/player/savePlay',play)
}

// 添加所有电视剧
export function queryPlay(play){
    return axios.post('/player/queryPlay',play)
}
