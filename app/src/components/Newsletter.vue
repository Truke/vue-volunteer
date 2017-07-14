<template>
  <div class="newsletter">
        <div class="container">
            <div class="newsletter-main">
                <h3>邮件订阅</h3>
                <p>我们会定期向您推送相关资讯，以便您能够及时的关注。</p>
                <form>
                    <input type="text" value="" placeholder="请输入邮箱">
                    <input type="submit" value="订 阅">
                </form>
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
  .newsletter {
    padding: 2em 0em 3em 0em;
    background: rgba(153, 153, 153, 0.11);
      text-align: center;
  }
  .newsletter h3 {
    font-size: 2.5em;
    font-weight: 600;
    color: #90D966;
    margin: 0em 0em 0.2em 0em;
    font-family: 'Monda-Regular';
  }
  .newsletter p {
    font-size: 1em;
    font-weight: 400;
    color: #6E6E6E;
    line-height: 1.8em;
    width: 60%;
    margin: 0 auto;
  }
  .newsletter p {
   font-size: 0.96em;
    font-weight: 400;
    color: #949494;
    width: 60%;
    margin: 0em auto 2em;
  }
  .newsletter-main input[type="text"] {
    font-size: 1em;
    font-weight: 400;
    color: #888;
    padding: 0.5em 0.5em 0.5em 0.5em;
    width: 30%;
    border: 1px solid #F17074;
    outline: none;
  }
  .newsletter-main input[type="submit"] {
    font-size: 1em;
    font-weight: 400;
    color: #fff;
    border: none;
    padding: 0.6em 0em;
    width: 10%;
    background:#F17074;
    outline: none;
  }
  .newsletter-main input[type="submit"]:hover {
    background: #90D966;
  }
</style>
