<template>
    <div>
      <nav-header class="header"></nav-header>
      <bread-crumb>
      <span>Goods</span>
      </bread-crumb>
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
            }
        },
        components:{
            NavHeader,
            NavFooter,
            BreadCrumb
        }
    }
</script>
