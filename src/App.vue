<template>
  <templateHeader  />

  <router-view/>
  <div class="no-bottom no-top" id="content">
    <mainSlide/>
    <sectionIntro/>
  </div>
  <templateFooter />
</template>

<script>
import templateHeader from '@/components/header.vue'
import templateFooter from '@/components/footer.vue'
import mainSlide from '@/components/mainSlide.vue'
import sectionIntro from '@/components/sectionIntro.vue'

export default {
  components: {
    templateHeader,
    templateFooter,
    mainSlide,
    sectionIntro
  },
  data() {
      return {
          token: null
      }
  },
  methods : {
      // setToken(event){
      //   this.token = event
      //   console.log("tokeniii" + this.token)
      // },
  },
}

</script>

<style lang="scss">

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>