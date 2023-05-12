<template>
  <div class="show-app section-pad">
    <div class="container show-app-bg">
      <div class="row min-h-spe">
        <div class="col-md-6 col-12 mb-3">
          <div class="show-app-left">
            <h4 class="color-main mb-4"> {{ $t('common.downloadApp') }} </h4>
            <div class="wakkt-text"> {{ $t('common.avilable') }} </div>
            <div class="wakkt-text mb-4"> {{ $t('common.appGoogle') }} </div>
            <div class="gray-col valid-p2">
              {{ $t('common.smallLorem') }}
            </div>
            <div class="flex-apps mt-4">
              <a href="#" class="google-play app-store">
                <div class="google-right">
                  <div class="goo-te font14">download on the</div>
                  <div class="goo-text font18">App store</div>
                </div>
                <div class="let color-solid">
                  <i class="fa-brands fa-apple fa-2x"></i>
                </div>
              </a>
              <a href="#" class="google-play real-google">
                <div class="google-right">
                  <div class="goo-te font14">available on the</div>
                  <div class="goo-text font18">Google play</div>
                </div>
                <div class="let color-solid">
                  <i class="fa-brands fa-google-play fa-2x"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12 mb-3">
          <div class="app-show-main">
            <div class="animated-imgs position-relative">
              <img :src="require('../assets/imgs/[Change here] Image Layer.png')" alt="" />
              <img :src="require('../assets/imgs/[Change here] Image Layer.png')" alt="" />
              <img :src="require('../assets/imgs/[Change here] Image Layer.png')" alt="" />
              <img :src="require('../assets/imgs/[Change here] Image Layer.png')" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end section show our app -->
</template>

<script>
export default {};
</script>

<style>
</style>