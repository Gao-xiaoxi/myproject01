import axios from 'axios'
import base from './base'

const api = {
      getGoodsList(){
            return axios.get(base.goodsList)
      },
      getGoodsSearch(id, good_name){
            const params = {id:id, good_name:good_name}
            return axios.post(base.goodsSearch, params)
      },
      addGoods(form){
            const params = form
            return axios.post(base.goodsAdd, params)
      },
      getCategoryList(){
            return axios.get(base.categoryList)
      },
      ParentCategoryList(){
            return axios.get(base.ParentCategoryList)
      },
      ChildCategoryList(params){
            return axios.post(base.ChildCategoryList, params)
      },

}

export default api;