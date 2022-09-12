import axios from 'axios'
import base from './base'

const api = {
      getGoodsList(){
            return axios.get(base.goodsList)
      },
      getGoodsSearch(id, good_name){
            const params = {'id':id, 'good_name':good_name}
            return axios.post(base.goodsSearch, params)
      }

}

export default api;