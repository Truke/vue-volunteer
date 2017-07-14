<template>
  <div class="contact" id="Contact">
      <div class="container">
          <div class="contact-main">
              <div class="contact-top">
                  <h3>联系我们</h3>
                  <p>如果您有相关事宜需要联系我们，请填写以下表单，谢谢您对volunteer的支持。</p>
              </div>
              <div class="contact-bottom">
                  <div>
                      <input type="text" placeholder="请输入姓名" name="name" v-model="post.name">
                      <input type="text" placeholder="请输入邮箱" name="email" v-model="post.email">
                  </div>
                  <textarea placeholder="请输入反馈内容" name="message" v-model="post.message"></textarea>
                  <input type="submit" @click="send()" value="发 送">
              </div>
          </div>
      </div>
      <div class="contactEdit">
        <ul>
          <li v-for="item in contactList">{{item.name}} {{item.email}} {{item.message}} {{item.create_time}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      post: {
        name: '',
        email: '',
        message: ''
      },
      currentPage: 1,
      contactList: []
    }
  },
  mounted () {
    this.getContactList()
  },
  methods: {
    send () {
      if (this.post.name === '') {
        this.$parent.$refs.toast.showToast('姓名不能为空', {
          theme: 'error',
          timeLife: 1000
        })
      } else if (this.post.email === '') {
        this.$parent.$refs.toast.showToast('邮箱不能为空', {
          theme: 'error',
          timeLife: 1000
        })
      } else if (this.post.message === '') {
        this.$parent.$refs.toast.showToast('内容不能为空', {
          theme: 'error',
          timeLife: 1000
        })
      } else {
        axios.post('http://localhost:3031/api/contact/sendContact', this.post).then((response) => {
          if (!response.success) {
            this.$parent.$refs.toast.showToast(response.msg, {
              theme: 'success',
              timeLife: 1000
            })
          } else {
            this.$parent.$refs.toast.showToast(response.msg, {
              theme: 'error',
              timeLife: 1000
            })
          }
        })
      }
    },
    getContactList () {
      axios.get('http://localhost:3031/api/contact/getContactList?currentPage=' + this.currentPage + '&itemsPerPage=5').then((response) => {
        this.contactList = this.contactList.concat(response.data.data)
      })
    },
    getMoreContactList () {
      this.currentPage = this.currentPage + 1
    }
  }
}
</script>

<style scoped>
  .contact {
    padding: 3em 0em 4em 0em;
    background: url(../assets/images/con-bann.jpg)no-repeat;
    min-height: 400px;
    background-size: cover;
  }
  .contact-bottom {
    margin: 3em 0em 0em 0em;
  }
  .contact-top h3 {
    font-size: 2.5em;
    font-weight: 600;
    color: #90D966;
    text-align: center;
    margin: 0em 0em 0.1em 0em;
  }
  .contact-top p {
    font-size: 0.96em;
    color: #fff;
    line-height: 1.6em;
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }
  .contact-bottom input[type="text"] {
    width: 100%;
    margin: 0px 0px 15px 0px;
    color: #F17074;
    padding: 10px 10px;
    outline: none;
    border: 1px solid #fff;
    font-size: 15px;
    background: none;
  }
  .contact-bottom textarea {
    width: 100%;
    height: 15em;
    color: #F17074;
    outline: none;
    resize: none;
    font-size: 0.8em;
    padding: 10px 15px;
    margin-bottom: 1em;
    border: 1px solid #fff;
    -webkit-appearance: none;
    background:none;
    font-weight: 400;
    font-family: 'Basic-Regular';
  }
  .contact-bottom input[type="submit"] {
    color: #FFFFFF;
    padding: 9px 42px;
    font-size: 15px;
    cursor: pointer;
    font-weight: 500;
    background: #F17074;
    outline: none;
    border: none;
    float: right;
  }
  .contact-bottom input[type="submit"]:hover {
    background: #90D966;
    color:#fff;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
  }
  @media (max-width: 768px) {
    .contact-top h3 {
      font-size: 2em;
    }
  }
  @media(max-width:480px) {
    .contact-top h3 {
      font-size: 1.5em;
    }
    .contact {
      padding: 1em 0em 1em 0em;
    }
    .contact-top p {
      width: 100%;
      font-size: 0.9em;
    }
    .contact-bottom input[type="submit"] {
      padding: 4px 16px;
      font-size: 14px;
    }
    .contact-bottom textarea {
      height: 8em;
      margin-bottom: 0.5em;
    }
  }
</style>
