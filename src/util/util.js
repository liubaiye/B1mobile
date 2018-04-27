import rc4 from './rc4'
import config from './config'

export default {
  buildUrl(url) {
    // return 'http://192.168.1.128:9002/'+url
    // if (window.DEBUG) {
    //   // return 'http://192.168.1.128:9002/'+url
     return 'http://localhost:25425/' + url
    // }
    
  },
  encrypt(text) {
    return rc4(text, config.encryptKey)
  },
  decrypt(text) {
    return rc4(text, config.encryptKey)
  }
}