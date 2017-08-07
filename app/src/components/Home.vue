<template>
  <div class="home grab" ref="homeWrapper">
    <div class="contentS">
      <banner></banner>
      <features></features>
      <newsletter></newsletter>
      <gallery></gallery>
      <events></events>
      <team></team>
      <contact :status='logined'></contact>
    </div>
    <a id="toTop" href="javascript:;" @click="toTop">
      <span></span>
    </a>
    <vue-toast ref="toast"></vue-toast>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import VueToast from 'vue-toast'
import 'vue-toast/dist/vue-toast.min.css'
import '@/assets/css/bootstrap.css'
import Banner from './Banner'
import Features from './Features'
import Newsletter from './Newsletter'
import Gallery from './Gallery'
import Events from './Events'
import Team from './Team'
import Contact from './Contact'
import Login from './Login'

export default {
  name: 'home',
  data () {
    return {
      tologin: false,
      logined: false,
      betterscroll: null
    }
  },
  mounted () {
    this.$refs.toast.setOptions({
      position: 'top right'
    })
    this.$nextTick(() => {
      this.tologin = this.$route.params.type === 'login'
      this.logined = this.$route.params.type === 'admin'
      setTimeout(() => {
        this._initScroll()
      }, 200)
    })
  },
  methods: {
    _initScroll () {
      this.betterscroll = new BScroll(this.$refs.homeWrapper, {
        click: true
      })
    },
    toTop () {
      this.betterscroll.scrollTo(0, 0, 300)
    }
  },
  components: {
    Banner,
    Features,
    Newsletter,
    Gallery,
    Events,
    Team,
    Contact,
    VueToast,
    Login
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.home{
  position: absolute;
  width:100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
}
#toTop {
  text-decoration: none;
  position: fixed;
  bottom: 17px;
  right: 10px;
  overflow: hidden;
  width: 36px;
  height: 33px;
  border: none;
  text-indent: 100%;
  background-size: 35px;
  background: url(../assets/images/arrow.png) no-repeat 0px 0px;
}
.grab {
  cursor: -webkit-grabbing;
  cursor: -moz-grab;
  cursor: grab;
}
.grabbing {
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: grabbing;
}
.vue-toast-manager_container{
  z-index: 1;
}

</style>
