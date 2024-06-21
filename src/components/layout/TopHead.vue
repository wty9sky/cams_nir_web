<template>
  <div class="top-head">
    <div class="logo my-[30px]">
      <img src="@/assets/img/index_logo.jpg" class="w-[80px] h-[80px] rounded-full border-[#cacaca] border" alt="">
    </div>
    <div class="navs">
      <div class="border-t border-[#cacaca] border-b flex flex-row justify-around items-center h-[35px] w-[835px]">
        <div class="flex flex-row justify-around items-center w-full">
          <RouterLink :to="{ path: nav.path }" v-for="nav, index in navList" :key="index"
            class="text-[#efdbc4] text-sm hover:text-[#000] transition-all duration-300 block px-[10px]">{{ $t(nav.name)
            }}</RouterLink>
        </div>
        <ToggleLanguage class="w-[20px] mx-[10px] text-center" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Nav {
  name: string;
  path: string;
}

interface Props {
  navList: Array<Nav>;
}

const { navList } = defineProps<Props>()
</script>

<style lang="scss" scoped>
.top-head{
  @apply w-full m-auto flex flex-col items-center justify-start;
}

.router-link-exact-active{
  color: #bda894;
}
</style>
