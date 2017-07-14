<template>
  <div class="team-mem">
        <div class="container">
            <div class="team-main">
                <h3>Our Team</h3>
                <div class="col-md-4 team-grid">
                    <img src="../assets/images/t1.jpg" alt="" class="img-responsive">
                    <div class="team-details">
                        <h4>undertakes laborious</h4>
                        <p>To take a trivial example, which of us ever undertakes laborious physical </p>
                    </div>
                </div>
                <div class="col-md-4 team-grid">
                    <img src="../assets/images/t2.jpg" alt="" class="img-responsive">
                    <div class="team-details">
                        <h4>undertakes laborious</h4>
                        <p>To take a trivial example, which of us ever undertakes laborious physical </p>
                    </div>
                </div>
                <div class="col-md-4 team-grid">
                    <img src="../assets/images/t3.jpg" alt="" class="img-responsive">
                    <div class="team-details">
                        <h4>undertakes laborious</h4>
                        <p>To take a trivial example, which of us ever undertakes laborious physical </p>
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
  .team-mem {
    padding: 2em 0em 3em 0em;
  }
  .team-main h3 {
    font-size: 2.5em;
    color: #90D966;
    text-align: center;
    margin: 0em 0em 1em 0em;
  }
  .team-grid {
    text-align: center;
  }
  .team-grid img {
    margin: 0 auto;
  }
  .team-details h4 {
    font-size: 1.3em;
    color: #F17074;
    margin: 0.3em 0em 0.3em 0em;
  }
  .team-details p {
    font-size: 0.96em;
    color: #717171;
    line-height: 1.6em;
  }
  @media (max-width: 768px) {
    .team-grid {
      float: left;
      width: 33%;
    }
  }
  @media(max-width:480px) {
    .team-mem {
      padding: 1em 0em 1em 0em;
    }
    .team-main h3 {
      font-size: 1.5em;
      margin: 0em 0em 0.4em 0em;
    }
    .team-grid {
      float: none;
      width: 60%;
      padding: 0px;
      margin: 0 auto 1em;
    }
    .team-details h4 {
      font-size: 1.2em;
      margin: 0.2em 0em 0.1em 0em;
    }
  }
</style>
