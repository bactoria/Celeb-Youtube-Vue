<template>
  <div align="center">

    <line-chart :chart-data="datacollection" :options="options"
                style="width: 80%; height: 150px;"></line-chart>

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
      channelLogHour: []
    },
    data() {
      return {
        datacollection: null,
        options: null,
      }
    },
    mounted() {
      this.fillData()
    },
    methods: {
      fillData() {

        var subscriberList = this.channelLogHour.map(x=> x.subscriber).reverse()
        var hourList = this.channelLogHour.map(x=> x.channelLogPk.hour + '시').reverse()

        this.datacollection = {
          labels: hourList,
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

<style>
</style>
