<template>
  <div>
    <TopHead :navList="navList" />
    <Welcome />
    <RouterView />
    <!-- <BottomFooter /> -->
  </div>
</template>

<script setup lang="ts">

const navList = ref([
  {
    name: 'navs.home',
    path: '/'
  },
  {
    name: 'navs.researchArea',
    path: '/research-area'
  },
  {
    name:'navs.members',
    path:'/members'
  },
  {
    name: 'navs.intellectualProperty',
    path: '/intellectual-property'
  },
  {
    name:'navs.socialMedia',
    path:'/social-media',
  },
  {
    name: 'navs.contactUs',
    path: '/contact-us'
  }
])
</script>

<style lang="scss" scoped>

</style>
