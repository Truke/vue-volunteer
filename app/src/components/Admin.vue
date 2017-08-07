<template>
  <div class="contact">
      <div class="contactEdit">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th width="10%">姓名</th>
              <th width="20%">邮箱</th>
              <th width="40%">信息</th>
              <th width="20%">时间</th>
              <th width="5%" align="center"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in contactList">
              <td>{{item.name}}</td>
              <td>{{item.email}}</td>
              <td>{{item.message}}</td>
              <td>{{item.create_time | timetype}}</td>
              <td align="center"><a href="javascript:;" class="btn btn-danger btn-xs" @click="removeContact(item._id)"><span class="glyphicon glyphicon-trash"></span></a></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="5" align="center"><a href="javascript:;" @click="getMoreContactList()" class="btn btn-success">加载更多</a><a href="javascript:;" class="btn btn-danger" @click="logout()">退出</a></td>
            </tr>
          </tfoot>
        </table>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th width="40%">邮箱</th>
              <th width="40%">时间</th>
              <th width="20%" align="center"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in emailList">
              <td>{{item.email}}</td>
              <td>{{item.create_time | timetype}}</td>
              <td align="center"><a href="javascript:;" class="btn btn-danger btn-xs" @click="removeEmail(item._id)"><span class="glyphicon glyphicon-trash"></span></a></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="5" align="center"><a href="javascript:;" @click="getMoreEmailList()" class="btn btn-success">加载更多</a></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <vue-toast ref="toast"></vue-toast>
  </div>
</template>

<script>
import VueToast from 'vue-toast'
import 'vue-toast/dist/vue-toast.min.css'
import axios from 'axios'

export default {
  data () {
    return {
      currentPage: 1,
      contactList: [],
      currentEmailPage: 1,
      emailList: []
    }
  },
  filters: {
    timetype (value) {
      return value.replace(/(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2}).\w+/g, '$1 $2')
    }
  },
  mounted () {
    axios.defaults.withCredentials = true
    this.$refs.toast.setOptions({
      position: 'top right'
    })
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      axios.get('http://localhost:3031/api/user/checklogin').then((response) => {
        if (response.data.success) {
          this.getContactList()
          this.getEmailList()
        } else {
          this.$refs.toast.showToast(response.data.msg, {
            theme: 'error',
            thimeLife: 1000
          })
          setTimeout(() => {
            this.$router.push({path: '/login'})
          }, 500)
        }
      })
    },
    getContactList () {
      axios.get('http://localhost:3031/api/contact/getContactList?currentPage=' + this.currentPage + '&itemsPerPage=5').then((response) => {
        if (response.data.success) {
          if (response.data.data.length) {
            this.contactList = this.contactList.concat(response.data.data)
          } else {
            this.$refs.toast.showToast('没有更多了', {
              theme: 'error',
              timeLife: 1000
            })
          }
        } else {
          this.$refs.toast.showToast(response.data.msg, {
            theme: 'error',
            thimeLife: 1000
          })
        }
      })
    },
    getMoreContactList () {
      this.currentPage = this.currentPage + 1
      this.getContactList()
    },
    removeContact (id) {
      axios.delete('http://localhost:3031/api/contact/' + id).then((response) => {
        if (response.data.success) {
          this.$refs.toast.showToast(response.data.msg, {
            theme: 'success',
            timeLife: 1000
          })
          this.contactList.splice(this.contactList.indexOf(this.contactList.find((t) => t._id === id)), 1)
        } else {
          this.$refs.toast.showToast(response.data.msg, {
            theme: 'error',
            timeLife: 1000
          })
        }
      })
    },
    getEmailList () {
      axios.get('http://localhost:3031/api/email/getEmailList?currentPage=' + this.currentEmailPage).then((response) => {
        if (response.data.success) {
          if (response.data.data.length) {
            this.emailList = this.emailList.concat(response.data.data)
          } else {
            this.$refs.toast.showToast('没有更多了', {
              theme: 'error',
              timeLife: 1000
            })
          }
        } else {
          this.$refs.toast.showToast(response.data.msg, {
            theme: 'error',
            thimeLife: 1000
          })
        }
      })
    },
    getMoreEmailList () {
      this.currentEmailPage = this.currentEmailPage + 1
      this.getEmailList()
    },
    removeEmail (id) {
      axios.delete('http://localhost:3031/api/email/' + id).then((response) => {
        if (response.data.success) {
          this.$refs.toast.showToast(response.data.msg, {
            theme: 'success',
            timeLife: 1000
          })
          this.emailList.splice(this.emailList.indexOf(this.emailList.find((t) => t._id === id)), 1)
        } else {
          this.$refs.toast.showToast(response.data.msg, {
            theme: 'error',
            timeLife: 1000
          })
        }
      })
    },
    logout () {
      axios.get('http://localhost:3031/api/user/logout').then((response) => {
        if (response.data.success) {
          this.$refs.toast.showToast(response.data.msg, {
            theme: 'success',
            timeLife: 1000
          })
          setTimeout(() => {
            this.$router.push({path: '/login'})
          }, 500)
        } else {
          this.$refs.toast.showToast(response.data.msg, {
            theme: 'error',
            timeLife: 1000
          })
        }
      })
    }
  },
  components: {
    VueToast
  }
}
</script>

<style scoped>
  .contactEdit table{
    width: 80%;
    margin:0 auto;
  }
  </style>
