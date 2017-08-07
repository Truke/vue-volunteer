<template>
  <div class="features" id="Features">
        <div class="container">
            <div class="features-main">
                <div class="features-top">
                    <h3>乐捐</h3>
                    <p>乐捐平台项目统计： 募款中项目3577个 执行中项目12762个 已结束项目11569个</p>
                </div>
                <div class="features-bottom">
                    <div class="features-grid" v-for="item,index in listTemp">
                        <div class="col-md-6 features-semi-grid" v-for="cell,j in item">
                            <span class="f1"><img :src="cell.src" alt=""> </span>
                            <div class="fea-text">
                                <h4>{{cell.title}}</h4>
                                <p>{{cell.description}}</p>
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
      list: [{
        id: 1,
        src: require('../assets/images/s1.png'),
        title: '抗战老兵关怀计划',
        description: '已筹：40539278.43元 捐款人数: 2723124人'
      }, {
        id: 2,
        src: require('../assets/images/s2.png'),
        title: '乡村支教美丽中国',
        description: '已筹：41998949.36元 捐款人数: 28641689人'
      }, {
        id: 3,
        src: require('../assets/images/s3.png'),
        title: '未来工程师计划',
        description: '已筹：1491708元 捐款人数: 50229人'
      }, {
        id: 4,
        src: require('../assets/images/s4.png'),
        title: '保护长城加我一个',
        description: '已筹：1434045元 捐款人数: 174472人'
      }, {
        id: 5,
        src: require('../assets/images/s5.png'),
        title: '壹基金净水计划',
        description: '已筹：535570元 捐款人数: 94746人'
      }, {
        id: 6,
        src: require('../assets/images/s6.png'),
        title: '寻四百万份光明之爱',
        description: '已筹：4018530元 捐款人数: 362573人'
      }]
    }
  },
  computed: {
    listTemp () {
      let list = this.list
      let arrTemp = []
      let index = 0
      let sectionCount = 2
      for (let i = 0; i < list.length; i++) {
        index = parseInt(i / sectionCount)
        if (arrTemp.length <= index) {
          arrTemp.push([])
        }
        arrTemp[index].push(list[i])
      }
      return arrTemp
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .features {
    padding: 3.5em 0em 3.5em 0em;
    position: relative;
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
