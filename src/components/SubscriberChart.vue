<template>
  <div align="center">

    <line-chart class="line-chart" :chart-data="datacollection" :options="options"></line-chart>

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
  import {mapActions, mapGetters} from 'vuex';

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
                //beginAtZero: true,
                callback: function (value, index, values) {
                  if (!Number.isInteger(value) || value < 0) {
                    return ''
                  }
                  const str = String(value);
                  const strLen = str.length;
                  let first, last;
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
                      first = str.substring(0, 1);
                      last = str.substring(1, 2);

                      if (last == 0) {
                        return first + "만";
                      }
                      return `${first}.${last}만`
                    case 6:
                    case 7:
                    case 8:
                      return str.substring(0, strLen - 4) + '만';
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

  .line-chart {
    width: 80%;
    height: 150px;
  }

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
