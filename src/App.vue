<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { setupI18n } from '@/modules'

setupI18n()

const { t } = useI18n()

useHead({
  title: t('meta.title'),
  meta: [
    { name: 'description', content: t('meta.description') }
  ]
})
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

<style lang="scss">
// @import '@/styles/base.css';

#app {
  // max-width: 1280px;
  margin: 0 auto;
  // padding: 2rem;
  font-family: madefor-display-extrabold;
  font-weight: normal;
}


</style>
