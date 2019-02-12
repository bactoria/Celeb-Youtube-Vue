<template>
  <div class="Hanna root">
    <div class="d-lg-flex flex-row-reverse" style="margin-bottom: 2vh;">
      <div class="block col-12 col-lg-6">

        <div class="title"> {{channel.title}}</div>
        <div class="name"> {{channel.name}}</div>
        <div>
          <img class="image" :src="channel.image">
        </div>

        <div>
          <a style="text-decoration: none; color: violet; " target="_blank"
             :href="'https://youtube.com/channel/' + channel.id"> 유튜브 바로가기 Click</a>
        </div>
        <div style="color: antiquewhite;">

          <div class="HannaAir">
            <div> 가입일 : {{channel.joinDate}}</div>
            <div> 구독자 : {{toLocale(channel.subscriber)}} 명</div>
            <div> 총 조회수 : {{toLocale(channel.views)}} 회</div>
            <!--    <span> {{channel.content}}</span>-->
            <!--  <span> 최근 업데이트 : {{channel.updatedTime}}
                </span>-->
          </div>
        </div>
      </div>

      <div class="block col-12 offset-lg-2 col-lg-5">

        <div class="channelInfo">소개 영상</div>
        <youtube-video :video-url="channel.introVideoUrl" :video-width="videoWidth" :video-height="videoHeight"
                       style="margin: 3vh;"/>

        <div class="spacer"></div>

        <div>
          <div class="channelInfo">구독자 변동</div>
          <div>
            <subscriber-chart/>

          </div>
        </div>
      </div>
    </div>

    <div class="d-lg-flex flex-row" style="margin-bottom: 2vh;">
      <div class="block col-12 col-lg-5 offset-lg-1">

      </div>
    </div>
  </div>
</template>

<script>
  import Const from '../Constant'
  import {mapGetters} from 'vuex';
  import YoutubeVideo from "./YoutubeVideo";
  import SubscriberChart from "./SubscriberChart";

  export default {
    name: "Channel",
    data() {
      return {
        videoWidth: window.innerWidth > 991 ? window.innerWidth / 3 : window.innerWidth * 7 / 10,
        videoHeight: window.innerWidth > 991 ? window.innerWidth / 6 : window.innerWidth * 7 / 20
      }
    },
    components: {SubscriberChart, YoutubeVideo},
    beforeCreate() {
      this.$store.dispatch(Const.GET_CHANNEL, this.$route.params.id);
    },
    computed:
      mapGetters({
        channel: 'channel',
      }),
    methods: {
      toLocale(num) {
        return num.toLocaleString()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/HannaFont";

  @media (max-width: 991px) {
    .root {
      font-size: 2vw;
    }
  }

  @media (min-width: 992px) {
    .root {
      font-size: 1vw;
    }
  }

  .channelInfo {
    color: antiquewhite;
    font-size: 2em;
  }

  .block {
    margin-bottom: 2vh;
  }

  .spacer {
    height: 2vh;
  }

  .image {
    width: 60%;
    margin: 3vh;
    border-radius: 50%;
    border: 3px solid antiquewhite;
  }

  .title {
    font-size: 2.5em;
    color: antiquewhite;
  }

  .name {
    font-size: 1.5em;
    color: antiquewhite;
  }

</style>
