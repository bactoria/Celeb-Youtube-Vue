<template>
  <div>
    <youtube :video-id="getId()" :width="videoWidth" :height="videoHeight" ref="youtube"
             @playing="playing" style="transform: translateX(-22px)"></youtube>
  </div>
</template>

<script>
  export default {
    name: "YoutubeVideo",
    props: {
      videoUrl: String, videoWidth: Number, videoHeight: Number
    },
    methods: {
      getId () {
        return this.$youtube.getIdFromUrl(this.videoUrl)
      },
      playing() {
        console.log('\o/ we are watching!!!')
      }
    }
  }
</script>

<style scoped>
</style>
