import Const from '../Constant'

export default {
  [Const.GET_CHANNELS]: (state, payload) => {

    const filteredChannelList = payload.filter(word => word.title != null)
    state.channelList = filteredChannelList
  },
  [Const.GET_CHANNEL]: (state, payload) => {
    state.channel = payload
  },
  [Const.CLEAR_CHANNEL]: (state) => {
    state.channel = ''
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
  [Const.UPDATE_CHANNEL_LOG_WEEK]: (state) => {
    console.log("UPDATE_CHANNEL_LOG_WEEK")
    state.datacollection = {
      labels: state.channelLogWeek_X,
      datasets: [
        {
          label: '구독자 수',
          pointBackgroundColor: 'white',
//              backgroundColor: 'rgba(138,43,242, 0.6)',
          borderWidth: 2,
          borderColor: 'violet',
          data: state.channelLogWeek_Y
        }
      ]
    }
  },
  [Const.GET_CHANNEL_LOG_HOUR]: (state, payload) => {
    state.channelLogHour_X = payload.map(x => x.hour + '시').reverse()
    state.channelLogHour_Y = payload.map(x => x.subscriber).reverse()
    state.channelLogHour = payload

  },
  [Const.GET_CHANNEL_LOG_DAY]: (state, payload) => {
    state.channelLogDay_X = payload.map(x => x.date.split("-")[2].replace(/(^0+)/, "") + '일').reverse()
    state.channelLogDay_Y = payload.map(x => x.subscriber).reverse()
    state.channelLogDay = payload
  },
  [Const.GET_CHANNEL_LOG_WEEK]: (state, payload) => {
    state.channelLogWeek_X = payload.map(x => x.date.split("-")[1].replace(/(^0+)/, "") + '/' + x.date.split("-")[2].replace(/(^0+)/, "")).reverse()
    state.channelLogWeek_Y = payload.map(x => x.subscriber).reverse()
    state.channelLogWeek = payload

    state.datacollection = {
      labels: state.channelLogWeek_X,
      datasets: [
        {
          label: '구독자 수',
          pointBackgroundColor: 'white',
//              backgroundColor: 'rgba(138,43,242, 0.6)',
          borderWidth: 2,
          borderColor: 'violet',
          data: state.channelLogWeek_Y
        }
      ]
    }
  }
}
