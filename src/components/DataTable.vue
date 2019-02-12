<template>
  <div class="root container">

    <!--Mobile-->
    <div class="d-xs-block d-md-none">
      <div class="d-flex flex-row justify-content-center" v-for="i in Math.ceil(channelList.length / 3)">
        <div style="width: 30%; margin: 1.5%;" v-for="channel in channelList.slice((i - 1) * 3, i * 3)"
             :key="channel.id">
          <router-link v-bind:to="'/channel/'+channel.id">
            <div class="channelCard" v-lazy-container="{ selector: 'img' }">


              <div class="channelName">{{channel.name}}</div>

              <div class="channelTitle HannaAir">{{channel.title}}</div>

              <img class="channelImage" :data-src="channel.image"/>

              <div class="channelSubscriber">
                구독자 {{channel.subscriber_string}}
              </div>

            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!--Desktop-->
    <div class="d-none d-md-block">
      <div class="d-md-flex flex-row justify-content-center" v-for="i in Math.ceil(channelList.length / 5)">
        <div style="width: 18%; margin: 1%;" v-for="channel in channelList.slice((i - 1) * 5, i * 5)" :key="channel.id">
          <router-link v-bind:to="'/channel/'+channel.id">
            <div class="channelCard" v-lazy-container="{ selector: 'img' }">


              <div class="channelName">{{channel.name}}</div>

              <div class="channelTitle HannaAir">{{channel.title}}</div>

              <img class="channelImage" :data-src="channel.image"/>

              <div style="height: 10px;"/>

              <div class="channelSubscriber">
                구독자 {{channel.subscriber_string}}
              </div>

            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Const from '../Constant'
  import {mapGetters} from 'vuex';


  export default {
    name: "DataTable",
    mounted() {
      this.$store.dispatch(Const.GET_CHANNELS);
    },
    computed:
      mapGetters({
        channelList: 'channelList'
      }),
  }
</script>

<style lang="scss" scoped>
  @import "../assets/HannaFont";

  @media (max-width: 543px) {
    .root {
      font-size: 2vw;
    }
    .channelImage {
      border: 1px solid antiquewhite;
    }

    .channelCard {
      border: 1px solid antiquewhite;
    }
  }

  @media (min-width: 544px) {
    .root {
      font-size: 1.7vw;
    }
    .channelImage {
      border: 2px solid antiquewhite;
    }

    .channelCard {
      border: 2px solid antiquewhite;
    }
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    .root {
      font-size: 1vw;
    }

    .channelImage {
      border: 3px solid antiquewhite;
    }

    }

  .channelCard {

    &:hover {
      transform: scale(1.05);
      transition: .4s all ease-in-out;
    }
  }

  .channelImage {
    border-radius: 50%;

    width: 70%;
    height: auto;

    margin: 3%;
  }

  .channelName {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    color: $title-color;
    font-size: 1.5em;
  }

  .channelTitle {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    font-size: 1em;
    margin-bottom: 2%;

    color: antiquewhite;
  }

  .channelSubscriber {
    background-color: red;
    opacity: 0.85;
    font-size: 1em;
  }

</style>
