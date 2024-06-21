<template>

  <div>
    <a-dropdown @select="setLocale" trigger="click">
      <div class="w-[20px] text-[#efdbc4]">
        <LangIcon />
      </div>
      <template #content>
        <div class="bg-[#594133]">
          <a-doption :value="language.value" v-for="language, index in languageList" :key="index">
            <span class="text-sm text-[#efdbc4]">{{ language.label }}</span>
          </a-doption>
        </div>
      </template>
    </a-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { type LanguageOptions, languageList as languageListRaw } from '@/common'
import { useHead } from '@vueuse/head';
const { t } = useI18n();

// const [show, toggle] = useToggle(false)
// const open = () => toggle(true)
// const hide = () => toggle(false)

// const open = (status: any)=>{
// }

const languageList = ref<LanguageOptions>(languageListRaw)
const { locale } = useI18n()
function setLocale(lang: any) {
  locale.value = lang
  useHead({
    title: t('meta.title'),
    meta: [
      { name: 'description', content: t('meta.description') }
    ]
  })
  // hide()
}
</script>

<style lang="scss">
.lang-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  background-color: var(--c-bg-mask);

  .lang-list {
    width: 75%;
    padding: 16px 20px;
    list-style-type: none;
    border-radius: 6px;
    background-color: var(--c-bg-card);

    .lang-item {
      padding: 8px 0;
    }
  }
}

:deep(.arco-trigger-content>.arco-dropdown){
  padding: 0;

}

.arco-dropdown{
  padding: 0;
  // @apply border-[#cacaca];
  @apply border-[#cacaca] rounded-none;

  .arco-dropdown-option{
    @apply hover:bg-[#270e02] px-[5px] text-center block text-[12px];
  }
}
</style>
