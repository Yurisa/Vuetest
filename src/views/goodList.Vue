<template>
    <div>
      <nav-header class="header"></nav-header>
      <bread-crumb>
      <span>Goods</span>
      </bread-crumb>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter"  :class="{'filterby-show':filterBy}">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)" :class="{'cur':priceChecked == 'all'}" @click="priceChecked = 'all'">All</a></dd>
                <dd v-for="(item,index) in priceFilter" :key="item.startPrice" >
                  <a href="javascript:void(0)" :class="{'cur':priceChecked == index}" @click="setPriceFiter(index)">{{item.startPrice}} - {{item.endPrice}}</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="(item,index) in goodList" :key="item.productId">
                    <div class="pic">
                      <a href="#"><img v-lazy="'static/'+item.prodcutImg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">{{item.prodcutPrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="overlayFlag" @click="closePop"></div>
      <nav-footer class="footer"></nav-footer>
    </div>
</template>

<script>
    import '../assets/css/base.css'
    import '../assets/css/product.css'
    import NavHeader from '../components/header'
    import NavFooter from '../components/footer'
    import BreadCrumb from '../components/breadCrumb'
    export default {
        data() {
            return {
              key:"",
              goodList:[],
              priceChecked:'all',
              priceFilter:[{
                startPrice:0,
                endPrice:100
              },
              {
                startPrice:100,
                endPrice:500
              },
              {
                startPrice:500,
                endPrice:1000
              },
              {
                startPrice:1000,
                endPrice:2000
              }],
              filterBy:false,
              overlayFlag:false
            }
        },
        components:{
            NavHeader,
            NavFooter,
            BreadCrumb
        },
        mounted:function () {
            this.getGoodsList();
        },
        methods:{
            getGoodsList(){
               this.$http.get("goods").then(res => {
                   console.log(res);
                   this.goodList = res.data.result;
               }).catch(err => {
                 console.log(err);
               })
            },
            showFilterPop(){
              this.filterBy = true;
              this.overlayFlag = true;
            },
            setPriceFiter(index){
              this.priceChecked = index
              this.closePop();
            },
            closePop(){
              this.filterBy = false;
              this.overlayFlag =false;
            }
        }
    }
</script>
