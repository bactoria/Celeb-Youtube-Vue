import axios from 'axios'
import Const from '../Constant'

var server = "http://13.209.201.43"

export default {

  [Const.GET_CHANNELS]: (store) => {
    var url = server + '/channels'

    axios.get(url)
      .then((response) => {
        store.commit(Const.GET_CHANNELS, response.data)
      })
  },

  [Const.GET_CHANNEL]: (store, payload) => {
    store.commit(Const.CLEAR_CHANNEL)

    var url = server + "/channels/" + payload

    axios.get(url)
      .then((response) => {
        store.commit(Const.GET_CHANNEL, response.data)
      })
  },

  [Const.GET_CHANNEL_LOG_HOUR]: (store, payload) => {
    var url = server + "/channelLog/" + payload + "/hour"

    axios.get(url)
      .then((response) => {
        store.commit(Const.GET_CHANNEL_LOG_HOUR, response.data)
      })
      .catch(() => {
      });

  }

}
