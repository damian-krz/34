<template>
    <Navigation />
    <router-view/>
</template>

<style lang="scss">
  #app {
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow: hidden;
  }

  @font-face {
      font-family: Sarpanch-Black;
      src: url('@/assets/fonts/Sarpanch-Black.ttf');
  }
  @font-face {
      font-family: Sarpanch-Bold;
      src: url('@/assets/fonts/Sarpanch-Bold.ttf');
  }
    @font-face {
      font-family: Sarpanch-ExtraBold;
      src: url('@/assets/fonts/Sarpanch-ExtraBold.ttf');
  }
    @font-face {
      font-family: Sarpanch-Medium;
      src: url('@/assets/fonts/Sarpanch-Medium.ttf');
  }
    @font-face {
      font-family: Sarpanch-Regular;
      src: url('@/assets/fonts/Sarpanch-Regular.ttf');
  }
    @font-face {
      font-family: Sarpanch-SemiBold;
      src: url('@/assets/fonts/Sarpanch-SemiBold.ttf');
  }

#scene-container {
   position: fixed;
   width: 100%;
   height: 100%;
   left: 0;
   top: 0;
}

</style>


<script>
  import { RouterLink, RouterView } from 'vue-router'
  import Navigation from './components/Navigation.vue'

export default {
    components: {
        Navigation,
    },
}

</script>