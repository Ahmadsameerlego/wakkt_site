<template>
  <div class="main-landing">
    <div class="container">
      <div class="header mb-4">
        <img class="logo-img" :src="require('../assets/imgs/Vector (1).png')" alt="" />
        <ul class="links">
          <li><a > {{ $t('nav.Home') }} </a></li>
          <li><a href="#services"> {{ $t('nav.Services') }} </a></li>
          <li><a href="#"> {{ $t('nav.About') }} </a></li>
          <li><a href="#"> {{ $t('nav.Plans') }} </a></li>
          <li><a href="#"> {{ $t('nav.Contact') }} </a></li>
        </ul>
        <div class="auth-btns">
          <a href="#" class="main-btn up"> {{ $t('nav.joinUs') }} </a>
          <div class="drop-doen-lang-btn">
            <img :src="require('../assets/imgs/lang.png')" alt="lang" />
            <div class="lang-text">En</div>
            <i class="fa-solid fa-chevron-down"></i>
            <div class="drop-down-content">
              <button @click="setEnglish()" class="web-lang active">EN</button>
              <button @click="setArabic()" class="web-lang">AR</button>
            </div>
          </div>
        </div>
      </div>
      <div class="land-info">
        <div class="row align-items-center">
          <div class="col-md-6 col-12 mb-3">
            <h2 class="mb-2 arrow-img"> {{ $t('nav.easy') }} </h2>
            <h2 class="mb-3 color-main tl"> {{ $t('nav.emplyee') }} </h2>
            <p class="land-p tl">
              {{ $t('nav.lorem') }}
            </p>
            <a href="" class="main-btn up"> {{ $t('nav.getStart') }} </a>
          </div>
          <div class="col-md-6 col-12">
            <div class="app-phone">
              <div class="imgs-container">
                <img
                  :src="require('../assets/imgs/Minor Layer.png')"
                  class="back-ground-phone"
                  alt=""
                />

                <!-- <img src="imgs/[Change here] Image Layer.png" class="upper-phone" alt=""> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        scrollTOServices(){
          this.$refs.services.scrollIntoView({ behavior: 'smooth' });
        },
        // change language and local 
        setArabic(){
            localStorage.setItem("locale", 'ar');
            this.$i18n.locale = 'ar'
            location.reload();
        },
        setEnglish(){
            localStorage.setItem('locale', 'en');
            this.$i18n.locale = 'en'
            location.reload()
        },
    }
};
</script>

<style>
</style>