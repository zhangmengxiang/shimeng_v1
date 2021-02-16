// 1 导入axios
import axios from 'axios'

axios.defaults.baseURL = 'http://132.232.48.123:8000'
axios.defaults.timeout = 3000

//保存渠道
export function saveChannel(chann){
    return axios.post('/channel/saveChannel',chann)
}

//查询所有渠道
export function queryChannel(){
    return axios.post('/channel/queryChannel')
}

//删除渠道
export function delChannel(cid){
    return axios.get('/channel/delChannel?cid='+cid)
}

//添加影院
export function savefilm(film){
    return axios.post('/film/saveFilm',film)
}

//分页查询影院
export function queryfilmPage(page){
    return axios.post('/film/queryFilm',page)
}

//分页查询影院
export function delfilm(filmid){
    return axios.get('/film/delFilm?fid='+filmid)
}

//修改查询
export function queryFilmByFid(filmid){
    return axios.get('/film/queryFilmByFid?fid='+filmid)
}

//修改电影
export function updateFilm(film){
    return axios.post('/film/updateFilm',film)
}

//猜你喜欢查询
export function queryFilmType(page){
    return axios.post('/film/queryFilmType',page)
}

//解析渠道
export function queryVideoUrl(source){
    return axios.post('/filmSource/queryVideoUrl',source)
}
