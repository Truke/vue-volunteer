<template>
  <div class="banner" id="Home">
    <menuel></menuel>
  </div>
</template>

<script>
import Menuel from './Menuel'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Menuel
  }
}
</script>

<style scoped>
  .banner {
    background: url(../assets/images/kids.jpg)no-repeat center;
    min-height: 800px;
    background-size: cover;
  }
  @media (max-width: 768px) {
    .banner {
      min-height: 440px;
    }
  }
  @media (max-width: 480px) {
    .banner {
      min-height: 220px;
    }
  }
</style>
