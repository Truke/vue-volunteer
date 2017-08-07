<template>
  <div class="events" id="Events">
        <div class="container">
            <div class="events-main">
                <div class="events-top">
                    <h3>推荐活动</h3>
                </div>
                <div class="events-bottom">
                    <div class="events-grid">
                        <div class="col-md-6 events-semi-grid">
                            <h5>2020年12月31日 星期四 21:00</h5>
                            <h4>衣暖人心 旧衣捐赠 再利用环保公...</h4>
                            <p>旧衣物捐赠，帮扶贫困山区，将家中将要废弃过时，用不了，穿不着的春夏衣裤，鞋袜，棉被，教科书籍，书包文具等，捐赠到聚爱公益服务平台，我们将收集的物资统一清洗消毒后送往需要的贫困地区！……</p>
                        </div>
                        <div class="col-md-6 events-semi-grid">
                            <h5>2024年07月31日 星期三 12:00</h5>
                            <h4>志愿志服务队招募志愿者...</h4>
                            <p>三门都市网青年志愿者服务队是三门有志于社会公益事业的义务工作志愿者，依照法律和政策自愿组成的自律性地区、非营利性组织。该组织的一切合法权益受国家法律保护。……</p>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="events-grid">
                        <div class="col-md-6 events-semi-grid">
                            <h5>2022年09月30日 星期五 20:00</h5>
                            <h4>拓展总队启扬分队宣传部...</h4>
                            <p>拓展总队启扬分队宣传部通知：中国梦，我们的志愿梦，您是否想要一个展现平台吗？您是否想看到启扬分队通过您精心策划更多创新的公益活动吗？那么就加入启扬分队宣传吧、现启扬宣传部招募工作人员：只要你平时方便电脑上网的可以到厚街论坛、厚街莞易、新浪微博、东莞阳光网、博客、莞人社区、天涯社区 、腾讯、微信公众平台，等等...</p>
                        </div>
                        <div class="col-md-6 events-semi-grid">
                            <h5>2019年10月17日 星期四 11:30</h5>
                            <h4>蒲公英爱心水饺走进敬老...</h4>
                            <p>1、爱心水饺费用150.00（100元的猪肉，50元的面粉），
    2、爱心摄影师1名-2名，指定摄影师！大家不要随意拍照！有肖像不乐意公开的要删掉！蒲公英公益照片属于协会，任何人不得作他用！
    3、爱心理发师2名；
    4、自愿捐物：糖果，饼干，火腿肠牛奶水果等，老人可以穿的8成新衣服等（许多老人需要衣物）</p>
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
    width: 50%;
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
