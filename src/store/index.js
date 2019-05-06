import Vue from 'vue';
import Vuex from 'vuex';
// import state from './state';
// import mutations from './mutations';
// import actions from './actions';

Vue.use(Vuex);

const getters = {
  breadcrumb :state => state.app.breadcrumb
} 
const app = {
  // 状态
  state:{
    breadcrumb:[],
  },
  // mutations方法
  mutations:{
    //面包屑导航
    SET_BREADCRUMB(state,breadcrumb){
      state.breadcrumb = breadcrumb
    },
  },
  // 提交mutations的方法
  actions:{
    setBreadcrumb(context,breadcrumb){
      context.commit('SET_BREADCRUMB',breadcrumb)
    }
  }
}
const store = new Vuex.Store({
  modules:{
    app
  },
  getters
});

export default store;