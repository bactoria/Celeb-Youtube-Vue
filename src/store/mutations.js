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
    state.subscribersInterval = 0
    for (let i = 1; i < state.channelLogHour_Y.length; i++) {
      let interval = state.channelLogHour_Y[i] - state.channelLogHour_Y[i-1];
      if (interval != 0) {
        if(state.subscribersInterval == 0) {
          state.subscribersInterval = interval;
        } else {
          state.subscribersInterval = state.subscribersInterval > interval ? interval : state.subscribersInterval;
        }
      }
    }
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
    state.subscribersInterval = 0
    for (let i = 1; i < state.channelLogDay_Y.length; i++) {
      let interval = state.channelLogDay_Y[i] - state.channelLogDay_Y[i-1];
      if (interval != 0) {
        if(state.subscribersInterval == 0) {
          state.subscribersInterval = interval;
        } else {
          state.subscribersInterval = state.subscribersInterval > interval ? interval : state.subscribersInterval;
        }
      }
    }
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
    state.subscribersInterval = 0
    for (let i = 1; i < state.channelLogWeek_Y.length; i++) {
      let interval = state.channelLogWeek_Y[i] - state.channelLogWeek_Y[i-1];
      if (interval != 0) {
        if(state.subscribersInterval == 0) {
          state.subscribersInterval = interval;
        } else {
          state.subscribersInterval = state.subscribersInterval > interval ? interval : state.subscribersInterval;
        }
      }
    }
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

    let subscribersInterval = 0;
    for (let i = 1; i < state.channelLogWeek_Y.length; i++) {
      let interval = state.channelLogWeek_Y[i] - state.channelLogWeek_Y[i-1];
      if (interval != 0) {
        if(subscribersInterval == 0) {
          subscribersInterval = interval;
        } else {
          subscribersInterval = subscribersInterval > interval ? interval : subscribersInterval;
        }
      }
    }

    let scales = {
      yAxes: [{
        ticks: {
          //beginAtZero: true,
          callback: function (value, index, values) {
            if (!Number.isInteger(value) || value < 0) {
              return ''
            }
            const str = String(value);
            const strLen = str.length;
            let first, last, result;
            switch (strLen) {
              case 1:
              case 2:
              case 3:
                return str;
              case 4:
                first = str.substring(0, 1);
                last = str.substring(1, 2);

                if (last == 0) {
                  return first + "천";
                }
                return `${first}.${last}천`
              case 5:
                if (str.substring(3, 5) != '00') {
                  return '';
                }
                result = str.substring(0, 1) + '.' + str.substring(1,2);

                result = result + str.substring(2, 3);

                if(result.endsWith('00')) {
                  result = result.substring(0, 1);
                }else if(result.endsWith('0')) {
                  result = result.substring(0, 3);
                }

                return result + '만'
              case 6:
              case 7:
              case 8:
                result = str.substring(0, strLen - 4);
                if (String(Math.abs(subscribersInterval)).length == 4) {
                  if (str.substring(strLen-4, strLen-3) != 0) {
                    result = result + '.' + str.substring(strLen-4, strLen-3);
                  }
                }
                return result + '만';
              case 9:
                first = str.substring(0, 1);
                last = str.substring(1, 2);

                if (last == 0) {
                  return first + "억";
                }
                return `${first}.${last}억`
              default:
                return str;
            }
          }
        }
      }]
    }
    ;

    state.options = {...state.options, scales}

    state.subscribersInterval = 0

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
