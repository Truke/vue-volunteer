<template>
  <div class="events" id="Events">
        <div class="container">
            <div class="events-main">
                <div class="events-top">
                    <h3>事件</h3>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete</p>
                </div>
                <div class="events-bottom">
                    <div class="events-grid">
                        <div class="col-md-6 events-semi-grid">
                            <h5>30-07-2015</h5>
                            <h4>Duis irure dolor reprehend</h4>
                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault</p>
                        </div>
                        <div class="col-md-6 events-semi-grid">
                            <h5>10-01-2014</h5>
                            <h4>Temporibus autem quibusdam </h4>
                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault</p>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="events-grid">
                        <div class="col-md-6 events-semi-grid">
                            <h5>18-9-2014</h5>
                            <h4> Nam libero tempore, cum </h4>
                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault</p>
                        </div>
                        <div class="col-md-6 events-semi-grid">
                            <h5>7-10-2014</h5>
                            <h4>On other hand denounce</h4>
                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault</p>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="events-grid">
                        <div class="col-md-6 events-semi-grid">
                            <h5>11-07-2014</h5>
                            <h4>Itaque earum  tenetur</h4>
                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault</p>
                        </div>
                        <div class="col-md-6 events-semi-grid">
                            <h5>06-04-2014</h5>
                            <h4>Lorem Ipsum passage</h4>
                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault</p>
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
  .events {
    padding: 3em 0em 3em 0em;
    background: rgba(153, 153, 153, 0.11);
  }
  .events-top {
    text-align: center;
    padding: 0em 0em 4em 0em;
  }
  .events-top h3 {
    font-size: 2.5em;
    font-weight: 600;
    color: #F17074;
    margin: 0em 0em 0.2em 0em;
    font-family: 'Monda-Regular';
  }
  .events-top p {
    font-size: 1em;
    font-weight: 400;
    color: #717171;
    line-height:1.6em;
    width: 60%;
    margin: 0em auto 0em;
  }
  .events-grid {
    padding: 0em 0em 2em 0em;
  }
  .events-semi-grid h4 {
    font-size: 1.35em;
    font-weight: 600;
    color: #F17074;
    margin: 0em 0em 0.4em 0em;
  }
  .events-semi-grid p {
    font-size: 1em;
    color: #717171;
    line-height:1.6em;
  }
  .events-semi-grid h5 {
    font-size: 1.1em;
    font-weight: 400;
    color: #fff;
    padding: 0.5em 1em 0.5em 1em;
    background: #90D966;
    width: 26%;
    text-align: center;
    border-radius: 15px 0px 15px 0px;
  }
  @media (max-width: 768px) {
    .events-semi-grid {
      float: left;
      width: 50%;
    }
    .events-semi-grid h5 {
      width: 35%;
      font-size: 1em;
    }
    .events {
      padding: 2em 0em 1.5em 0em;
    }
  }
  @media(max-width:480px) {
    .events {
      padding: 1em 0em 0.5em 0em;
    }
    .events-top h3 {
      font-size: 1.5em;
    }
    .events-top p {
      width: 100%;
    }
    .events-grid {
      padding: 0em 0em 0em 0em;
    }
    .events-semi-grid {
      float: none;
      width: 100%;
      margin: 0em 0em 1.5em 0em;
      text-align: center;
    }
    .events-top {
      padding: 0em 0em 2em 0em;
    }
    .events-semi-grid h5 {
      width: 30%;
      margin: 0 auto 0.3em;
    }
    .events-semi-grid h4 {
      font-size: 1em;
    }
  }
</style>
