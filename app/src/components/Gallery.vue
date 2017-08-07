<template>
  <div class="gallery" id="Gallery">
        <div class="container">
            <div class="gallery-main">
                <div class="gallery-top">
                    <h3>公益图片</h3>
                </div>
                <div class="gallery-bottom">
                    <div class="gallery-1">
                        <div class="col-md-3 gallery-left">
                            <a href="#" rel="title">
                                <img class="img-responsive" src="../assets/images/p1.jpg" alt="">
                            </a>
                        </div>
                        <div class="col-md-3 gallery-left">
                            <a href="#" rel="title">
                                <img class="img-responsive" src="../assets/images/p2.jpg" alt="">
                            </a>
                        </div>
                        <div class="col-md-3 gallery-left">
                            <a href="#" rel="title">
                                <img class="img-responsive" src="../assets/images/p3.jpg" alt="">
                            </a>
                        </div>
                        <div class="col-md-3 gallery-left">
                            <a href="#" rel="title">
                                <img class="img-responsive" src="../assets/images/p4.jpg" alt="">
                            </a>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="gallery-1">
                        <div class="col-md-3 gallery-left">
                            <a href="#" rel="title">
                                <img class="img-responsive" src="../assets/images/p5.jpg" alt="">
                            </a>
                        </div>
                        <div class="col-md-3 gallery-left">
                            <a href="#" rel="title">
                                <img class="img-responsive" src="../assets/images/p6.jpg" alt="">
                            </a>
                        </div>
                        <div class="col-md-3 gallery-left">
                            <a href="#" rel="title">
                                <img class="img-responsive" src="../assets/images/p7.jpg" alt="">
                            </a>
                        </div>
                        <div class="col-md-3 gallery-left">
                            <a href="#" rel="title">
                                <img class="img-responsive" src="../assets/images/p8.jpg" alt="">
                            </a>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .gallery {
    padding: 3em 0em 4em 0em;
  }
  .gallery-top h3 {
    font-size: 2.5em;
    font-weight: 600;
    color: #F17074;
    margin: 0em 0em 0.2em 0em;
    font-family: 'Monda-Regular';
  }
  .gallery-top {
    text-align: center;
    padding: 0em 0em 1.5em 0em;
  }
  .gallery-1{
    margin: 2em 0em 0em 0em;
  }
  .gallery-top p {
    font-size: 0.96em;
    font-weight: 400;
    color: #949494;
    width: 65%;
    margin: 0 auto;
  }
  .gallery-left img {
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    .gallery-left {
      float: left;
      width: 25%;
    }
    .gallery {
      padding: 2em 0em 3em 0em;
    }
  }
  @media(max-width:480px) {
    .gallery-top h3 {
      font-size: 1.5em;
    }
    .gallery-top p {
      width: 100%;
    }
    .gallery-1 {
      margin: 1em 0em 0em 0em;
    }
    .gallery-left {
      float: left;
      width: 50%;
      padding: 0px 10px 10px 0px;
    }
    .gallery-1 {
      margin: 0em 0em 0em 0em;
    }
    .gallery {
      padding: 1em 0em 1.5em 0em;
    }
  }
</style>
