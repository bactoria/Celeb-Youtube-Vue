import Const from '../Constant'

export default {
  [Const.GET_CHANNELS]: (state, payload) => {
    state.channelList = payload
  },
  [Const.GET_CHANNEL]: (state, payload) => {
    state.channel = payload
  },
  [Const.CLEAR_CHANNEL]: (state) => {
    state.channel = ''
  },

  [Const.GET_CHANNEL_LOG_HOUR]: (state, payload) => {
    state.channelLogHour = payload
  }
}
