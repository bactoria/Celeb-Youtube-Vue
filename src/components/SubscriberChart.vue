<template>
  <div align="center">
    <line-chart :chart-data="datacollection" :options="options"
                style="width: 80%; height: 150px;"></line-chart>

    <div class="container">
      <div class="d-flex flex-row justify-content-center">
        <div v-bind:class="{ nonSelected: selected !== 'hour'}" class="chartBtn col-2" @click="hour()">1시간</div>
        <div v-bind:class="{ nonSelected: selected !== 'day'}" class="chartBtn col-2" @click="day()">1일</div>
      </div>
    </div>

  </div>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    name: "SubscriberChart",
    components: {
      LineChart
    },
    props: {
      channelLogHour: [],
      channelLogDay: []
    },
    data() {
      return {
        datacollection: null,
        options: null,
        selected: ''
      }
    },
    mounted() {
      this.hour()
    },
    methods: {
      hour() {
        this.selected = 'hour'
        var subscriberList = this.channelLogHour.map(x => x.subscriber).reverse()
        var xList = this.channelLogHour.map(x => x.channelLogPk.hour + '시').reverse()
        this.fillData(subscriberList, xList);
      },
      day() {
        this.selected = 'day'
        var subscriberList = this.channelLogDay.map(x => x.subscriber).reverse()
        var xList = this.channelLogDay.map(x => x.channelLogPk.date.split("-")[2].replace(/(^0+)/, "") + '일').reverse()
        this.fillData(subscriberList, xList);
      },

      fillData(subscriberList, xList) {

        this.datacollection = {
          labels: xList,
          datasets: [
            {
              label: '구독자 수',
              pointBackgroundColor: 'white',
//              backgroundColor: 'rgba(138,43,242, 0.6)',
              borderWidth: 2,
              borderColor: 'violet',
              data: subscriberList
            }
          ]
        }
        this.options = {
          legend: {display: false},
          maintainAspectRatio: false,
          responsive: true,
          responsiveAnimationDuration: 0,
          scales: {
            yAxes: [{
              ticks: {
                //       beginAtZero: true,
                callback: function (value, index, values) {
                  if (parseInt(value) >= 1000) {
                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  } else {
                    return value;
                  }
                }
              }
            }]
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

  .nonSelected {
    opacity: .4;
  }

  .chartBtn {
    background-color: #6c757d;
    color: antiquewhite;

    margin: 5%;
    padding: 1% 0;
    border-radius: 5%;
  }

</style>
