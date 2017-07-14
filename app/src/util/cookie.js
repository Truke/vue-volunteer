export default {
  setCookie (ckname, value, exdays) {
    let d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    let expires = 'expires' + d.toUTCString()
    document.cookie = ckname + '=' + value + '; ' + expires
  },
  getCookie (ckname) {
    let name = ckname + '='
    let ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === '  ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) !== -1) {
        return c.substring(name.length, c.length)
      }
    }
  },
  delCookie (ckname) {
    let e = new Date()
    e.setTime(e.getTime() - 1)
    let c = this.getCookie(ckname)
    if (c != null) {
      document.cookie = ckname + '=' + c + ';expires=' + e.toUTCString()
    }
  }
}
