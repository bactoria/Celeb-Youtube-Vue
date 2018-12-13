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
  [Const.UPDATE_CHANNEL_LOG_DAY]: (state) => {
    console.log("UPDATE_CHANNEL_LOG_DAY")
    state.datacollection = {
      labels: state.channelLogDay_X,
      datasets: [
        {
          label: '구독자 수',
          pointBackgroundColor: 'white',
//              backgroundColor: 'rgba(138,43,242, 0.6)',
          borderWidth: 2,
          borderColor: 'violet',
          data: state.channelLogDay_Y
        }
      ]
    }
  },
  [Const.UPDATE_CHANNEL_LOG_HOUR]: (state) => {
    console.log("UPDATE_CHANNEL_LOG_HOUR")
    state.datacollection = {
      labels: state.channelLogHour_X,
      datasets: [
        {
          label: '구독자 수',
          pointBackgroundColor: 'white',
//              backgroundColor: 'rgba(138,43,242, 0.6)',
          borderWidth: 2,
          borderColor: 'violet',
          data: state.channelLogHour_Y
        }
      ]
    }
  },
  [Const.GET_CHANNEL_LOG_HOUR]: (state, payload) => {
    state.channelLogHour_X = payload.map(x => x.channelLogPk.hour + '시').reverse()
    state.channelLogHour_Y = payload.map(x => x.subscriber).reverse()
    state.channelLogHour = payload

    state.datacollection = {
      labels: state.channelLogHour_X,
      datasets: [
        {
          label: '구독자 수',
          pointBackgroundColor: 'white',
//              backgroundColor: 'rgba(138,43,242, 0.6)',
          borderWidth: 2,
          borderColor: 'violet',
          data: state.channelLogHour_Y
        }
      ]
    }
  },
  [Const.GET_CHANNEL_LOG_DAY]: (state, payload) => {
    state.channelLogDay_X = payload.map(x => x.channelLogPk.date.split("-")[2].replace(/(^0+)/, "") + '일').reverse()
    state.channelLogDay_Y = payload.map(x => x.subscriber).reverse()
    state.channelLogDay = payload
  }
}
