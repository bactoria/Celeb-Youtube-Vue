<template>
  <div class="root">
    <vue-typed-js :strings="['연예인의 유튜브 개인 채널을 알려드리는 사이트 입니다.']"
                  :loop="true"
                  :loopCount="2"
                  :typeSpeed="30"
                  :startDelay="100"
                  :fadeOutDelay="300"
                  :fadeOut="true"
    >
      <span class="typing"></span>
    </vue-typed-js>
  </div>
</template>

<script>
  export default {
    name: "TypedText"
  }
</script>

<style scoped>
  .root {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-height: 1.3rem;
    color: floralwhite;
    font-family: BM-HANNA-Air;
  }
</style>
