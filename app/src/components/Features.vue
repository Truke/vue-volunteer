<template>
  <div class="features" id="Features">
        <div class="container">
            <div class="features-main">
                <div class="features-top">
                    <h3>Awesome Features</h3>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete</p>
                </div>
                <div class="features-bottom">
                    <div class="features-grid">
                        <div class="col-md-6 features-semi-grid">
                            <span class="f1"><img src="../assets/images/s1.png" alt=""> </span>
                            <div class="fea-text">
                                <h4>Upload</h4>
                                <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                        <div class="col-md-6 features-semi-grid">
                            <span class="f1"><img src="../assets/images/s2.png" alt=""> </span>
                            <div class="fea-text">
                                <h4>Inventore </h4>
                                <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="features-grid">
                        <div class="col-md-6 features-semi-grid">
                            <span class="f1"><img src="../assets/images/s3.png" alt=""> </span>
                            <div class="fea-text">
                                <h4>Donate</h4>
                                <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                        <div class="col-md-6 features-semi-grid">
                            <span class="f1"><img src="../assets/images/s4.png" alt=""> </span>
                            <div class="fea-text">
                                <h4>Nequeporro</h4>
                                <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="features-grid">
                        <div class="col-md-6 features-semi-grid">
                            <span class="f1"><img src="../assets/images/s5.png" alt=""> </span>
                            <div class="fea-text">
                                <h4>Foundation</h4>
                                <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                        <div class="col-md-6 features-semi-grid">
                            <span class="f1"><img src="../assets/images/s6.png" alt=""> </span>
                            <div class="fea-text">
                                <h4>cum soluta</h4>
                                <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                <div class="clearfix"> </div>
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
  .features {
    padding: 3.5em 0em 3.5em 0em;
  }
  .features-top {
    text-align: center;
  }
  .features-top h3 {
    font-size: 2.5em;
    font-weight: 600;
    color: #f17074;
    margin: 0em 0em 0.15em 0em;
     font-family: 'Monda-Regular';
  }
  .features-top p {
    font-size: 1em;
    font-weight: 400;
    color: #000;
    margin: 0em 0em 0.15em 0em;
  }
  .features-top p {
    font-size: 0.96em;
    font-weight: 400;
    color: #949494;
    width: 60%;
    margin: 0em auto 0em;
  }
  .features-bottom {
    padding: 4em 0em 0em 0em;
  }
  .fea-text {
    float: right;
    width: 90%;
  }
  span.f1 {
    width: 32px;
    height: 32px;
    display: block;
    float: left;
  }
  .features-grid {
    margin: 0em 0em 2.5em 0em;
  }
  .fea-text h4 {
    font-size: 1.2em;
    font-weight: 600;
    color: #F17074;
    margin: 0em 0em 0.4em 0em;
     font-family: 'Monda-Regular';
  }
  .fea-text p {
    font-size: 0.96em;
    font-weight: 400;
    color: #949494;
    line-height: 1.6em;
  }
  @media (max-width: 768px) {
    .features-semi-grid {
      float: left;
      width: 50%;
    }
    .fea-text {
      width: 83%;
    }
    .features {
      padding: 2em 0em 1em 0em;
    }
    .features-top p {
      font-size: 0.9em;
    }
    .fea-text p {
      font-size: 0.9em;
    }
  }
  @media(max-width:480px) {
    .features-top h3 {
      font-size: 1.5em;
    }
    .features-top p {
      width: 100%;
    }
    .features {
      padding: 1em 0em 1em 0em;
    }
    .features-bottom {
      padding: 1.5em 0em 0em 0em;
    }
    .features-grid {
      margin: 0em 0em 0em 0em;
    }
    .features-semi-grid {
      float: none;
      width: 100%;
      margin: 0em 0em 1em 0em;
        padding: 0px;
    }
    .fea-text h4 {
      font-size: 1em;
    }
  }
</style>
