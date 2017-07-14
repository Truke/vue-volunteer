<template>
  <div class="container">
    <div class="header">
      <div class="logo">
        <a href="/">
          <img src="../assets/images/logo.png" alt="">
        </a>
      </div>
      <div class="header-right clearfix">
        <div class="top-nav clearfix">
          <span class="menu">
            <img @click="toggleRes" src="../assets/images/icon.png" alt="">
          </span>
          <transition name="fade">
            <ul class="res" v-if="resstate">
              <li v-for="item,index in list"><a @click="menuclick(index, $event)" href="javascript:;">{{item.name}}</a></li>
            </ul>
          </transition>
        </div>
      </div>
      <div class="clearfix"> </div>
    </div>
    <div class="banner-bottom">
      <flexslider></flexslider>
    </div>
  </div>
</template>

<script>
import Flexslider from './Flexslider'
export default {
  data () {
    return {
      resstate: null,
      list: [{
        name: 'Home'
      }, {
        name: 'Features'
      }, {
        name: 'Gallery'
      }, {
        name: 'Events'
      }, {
        name: 'Contact'
      }],
      listHeight: []
    }
  },
  mounted () {
    this.resstate = this.$el.clientWidth >= 750
    setTimeout(() => {
      this._calculateHeight()
    }, 100)
  },
  methods: {
    _calculateHeight () {
      for (let i = 0, l = this.list.length; i < l; i++) {
        let dom = this.$parent.$parent.$el.querySelector('#' + this.list[i].name)
        this.listHeight.push(dom.offsetTop)
      }
    },
    menuclick (index, event) {
      if (!event._constructed) {
        return
      }
      if (this.$el.clientWidth < 750) {
        this.resstate = false
      }
      this.$parent.$parent.betterscroll.scrollTo(0, -this.listHeight[index], 300)
    },
    toggleRes () {
      if (!event._constructed) {
        return
      }
      this.resstate = !this.resstate
    }
  },
  components: {
    Flexslider
  }
}
</script>

<style scoped>
  span.menu {
    display: none;
  }
  .header {
    background:#f17074;
    padding: 1em 1em 1em 1em;
    margin: 3em 0em 0em 0em;
    position: relative;
  }
  .top-nav ul{
    padding: 0px;
    list-style: none;
    margin: 0.8em 0em 0em 0em;
  }
  .top-nav ul li {
    display: inline-block;
    margin: 0em 1.5em 0em 0em;
  }
  .top-nav ul li a {
    font-size: 1em;
    font-weight: 400;
    color:#fff;
    padding:3px 0px 3px 0px;
    text-decoration:none;
    border-bottom: 2px solid #F17074;
    border-top: 2px solid #F17074;
  }
  .top-nav ul li a:hover {
    text-decoration:none;
    border-bottom: 2px solid #90D966;
    border-top: 2px solid #90D966;
  }
  .logo {
    float: left;
    width: 50%;
  }
  .header-right {
    float: right;
    width: 50%;
    text-align: right;
  }
  .top-navg {
     float: left;
  }
  @media (max-width: 768px) {
    span.menu{
      display: block;
      text-align: left;
      padding: 1px 0px 0px 0px;
      cursor: pointer;
      color: #E74C3C;
      font-size: 16px;
      font-weight: 700;
      position:relative;
      margin-left: -1rem;
    }
    .top-nav ul.res {
      padding: 0;
      margin: 1.5em 0em 0em 0em;
      z-index: 999;
      position: absolute;
      width: 100%;
      left:0;
    }
    .top-nav ul.res li {
      display: block;
      text-align: center;
      background:#90D966;
      margin: 0;
    }
    .top-nav ul.res li a {
        font-size: 16px;
        padding: 1em 0;
        color: #fff;
        display: block;
          border: none;
    }
    ul.res li a:hover,ul.res li a.active{
      color:#000;
      border: none;
    }
  }
  @media(max-width:480px) {
    .header {
      margin: 1em 0em 0em 0em;  
    }
    .logo img {
      width: 55%;
    }
    span.menu img {
      width: 12%;
    }
    .top-nav ul.res li a {
      font-size: 14px;
      padding: 0.5em 0;
    }
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
