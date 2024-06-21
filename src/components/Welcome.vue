<template>
  <div class="bg-[#270e02] w-full z-10">
    <div class="w-[1060px] mx-auto py-[100px]">
      <div class="welcome flex flex-row justify-center items-start w-[1060px]">
        <span class="text-[72px] font-bold text-white animate__animated animate__fadeIn">{{ $t('meta.welcome') }}</span>
        <img src="@/assets/img/logo.jpg" alt="logo" class="w-[359px] h-[80px] animate__animated animate__fadeIn animate__delay-1s" />
      </div>
      <div class="flex flex-col justify-center items-center">
        <div class="flex flex-col justify-center items-start mt-[30px]">
          <span class="text-[#EFDBC4] text-[26px] font-bold leading-[50px] block">{{ $t('meta.welecomeDescLine1') }}</span>
        <span class="text-[#EFDBC4] text-[26px] font-bold leading-[50px] block">{{ $t('meta.welecomeDescLine2') }}</span>
        <span class="text-[#EFDBC4] text-[26px] font-bold leading-[50px] block">{{ $t('meta.welecomeDescLine3') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
