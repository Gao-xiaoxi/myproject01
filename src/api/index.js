import axios from 'axios'
import base from './base'

const api = {
      getGoodsList(){
            return axios.get(base.goodsList)
      },
      getGoodsSearch(params){
            return axios.get(base.goodsSearch+params)
      }

}

export default api;