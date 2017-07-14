<template>
  <div class="dialog">
    <div class="overlay"></div>
    <div class="dialogBox">
      <div class="title">{{title}}</div>
      <div class="content">
        <div class="login">
          <input type="text" name="userName" placeholder="用户名" v-model="post.userName">
          <input type="password" name="password" placeholder="密码" v-model="post.password">
          <button type="submit" @click="login()">登 录</button>
          <p>忘记密码请联系<a href="https://github.com/Truke">@Truke</a>，寻求解决方案</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import cookie from '@/util/cookie'

export default {
  data () {
    return {
      title: '管理员登录入口',
      post: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (!event._constructed) {
        return
      }
      if (this.post.userName === '') {
        this.$parent.$refs.toast.showToast('姓名不能为空', {
          theme: 'error',
          timeLife: 1000
        })
      } else if (this.post.password === '') {
        this.$parent.$refs.toast.showToast('密码不能为空', {
          theme: 'error',
          timeLife: 1000
        })
      } else {
        axios.post('http://localhost:3031/api/user/login', this.post).then((response) => {
          if (!response.success) {
            cookie.setCookie('isLogin', '1', 7)
            this.$parent.$refs.toast.showToast(response.msg, {
              theme: 'success',
              timeLife: 1000
            })
            setTimeout(() => {
              this.$router.push({path: '/'})
            }, 1000)
          } else {
            this.$parent.$refs.toast.showToast(response.msg, {
              theme: 'error',
              timeLife: 1000
            })
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.dialog{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  overflow: hidden;
}
.overlay{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}
.dialogBox{
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 5px;
}
.title{
  line-height: 2;
  padding:1rem 1rem 0;
}
.login{
  padding: 1rem;
}
.login input{
  display: block;
  width: 100%;
  margin: 0px 0px 15px 0px;
  color: #F17074;
  padding: 10px 10px;
  outline: none;
  border: 1px solid #ddd;
  font-size: 14px;
  background: none;
}
.login button {
  display: block;
  width: 100%;
  color: #FFFFFF;
  padding: 9px 42px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 500;
  background: #F17074;
  outline: none;
  border: none;
}
.login button:hover {
  background: #90D966;
  color:#fff;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
}
.login p {
  line-height: 1.6;
  padding: 1rem 0;
  font-size: 12px;
  color:#aaa;
}
</style>
