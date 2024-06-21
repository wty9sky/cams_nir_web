<script setup lang="ts">


</script>

<template>
  <div class="relative z-0">
    <div class="members">
      <img src="@/assets/img/members.png" alt="">
    </div>
    <div class="portfolio">
      <div class="title">
        <span class="font-bold">{{ $t('home.portfolio.title') }}</span>
      </div>
      <div class="desc">
        <span class="content">{{  $t('home.portfolio.content.0')  }}</span>
        <span class="content">{{  $t('home.portfolio.content.1')  }}</span>
        <span class="content">{{  $t('home.portfolio.content.2')  }}</span>
      </div>
      <div></div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

.portfolio{
  background-image: var(--bg-gradient);
  background-color: var(--bg-overlay-color);
  @apply h-[1440px];

  .title{
    @apply text-[57px] font-bold text-center text-white;
  }
  .desc{
    @apply text-[18px] text-center text-[#efdbc4];

    .content{
      @apply font-bold;
    }
  }
}


</style>
