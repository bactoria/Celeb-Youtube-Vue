<template>
  <div align="center">
    <line-chart :chart-data="datacollection" :options="options"
                style="width: 80%; height: 150px;"></line-chart>
    <div class="container">
      <div class="d-flex flex-row justify-content-center">
        <div v-bind:class="{ nonSelected: selected !== 'hour'}" class="chartBtn col-2" @click="hour()">1시간</div>
        <div v-bind:class="{ nonSelected: selected !== 'day'}" class="chartBtn col-2" @click="day()">1일</div>
        <div v-bind:class="{ nonSelected: selected !== 'week'}" class="chartBtn col-2" @click="week()">1주</div>
      </div>
    </div>

  </div>
</template>

<script>
  import LineChart from './LineChart.js'
  import Const from '../Constant'
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: "SubscriberChart",
    components: {
      LineChart
    },
    computed: {
      ...mapGetters({
        datacollection: 'datacollection'
      })
    },
    data() {
      return {
        selected: 'week',
        options: {
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
    },
    mounted() {
      const CHANNEL_ID = this.$route.params.id;
      this.GET_CHANNEL_LOG_HOUR(CHANNEL_ID);
      this.GET_CHANNEL_LOG_DAY(CHANNEL_ID);
      this.GET_CHANNEL_LOG_WEEK(CHANNEL_ID);
    },
    methods: {
      ...mapActions(['GET_CHANNEL_LOG_HOUR', 'GET_CHANNEL_LOG_DAY', 'GET_CHANNEL_LOG_WEEK']),
      hour() {
        this.selected = 'hour'
        this.$store.commit(Const.UPDATE_CHANNEL_LOG_HOUR);
      },
      day() {
        this.selected = 'day'
        this.$store.commit(Const.UPDATE_CHANNEL_LOG_DAY);
      },
      week() {
        this.selected = 'week'
        this.$store.commit(Const.UPDATE_CHANNEL_LOG_WEEK);
      },
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
