// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VueLazyload, {
  loading: 'static/loading-svg/loading-bars.svg',
})

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
      nickName:'',
      cartCount:0
    },
    mutations:{
      updateUserInfo(state, nickName){
        state.nickName = nickName;
      },
      updateCartCount(state, cartCount){
        state.cartCount += cartCount;
      }
    }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  methods:{
    methods:{
      checkLogin(){
        axios.get("users/checkLogin").then(res=> {
          var res = res.data;
          if (res.status == "0") {
            this.$store.commit("updateUserInfo", res.result);
          }else{
            if(this.$route.path!="/goods"){
              this.$router.push("/goods");
            }
          }
        });
      },
      getCartCount(){
        axios.get("users/getCartCount").then(res=>{
          var res = res.data;
          if(res.status=="0"){
            this.$store.commit("updateCartCount",res.result);
          }
        });
      }
    },
  },
  components: { App },
  template: '<App/>'
})
