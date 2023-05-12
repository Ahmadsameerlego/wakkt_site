<template>
  <div class="home">
    <!-- header  -->
    <pageHeader />

    <!-- join wakkt  -->
    <joinWakkt />

    <!-- why wakkt  -->
    <whyWakkt />

    <!-- best choice  -->
    <bestChoice />

    <!-- download app -->
    <downloadApp />

    <!-- pricing  -->
    <pricingComp />

    <!-- footer  -->
    <pageFooter />
  </div>
</template>

<script>
import pageHeader from '../components/page_header.vue'
import joinWakkt from '../components/join_wakkt.vue'
import whyWakkt from '../components/why_wakkt.vue'
import bestChoice from '../components/best_choice.vue'
import downloadApp from '../components/download_app.vue'
import pricingComp from '../components/pricing_com.vue'
import pageFooter from '../components/page_footer.vue'
export default {
  name: 'HomeView',
  components: {
    pageHeader,
    joinWakkt,
    whyWakkt,
    bestChoice,
    downloadApp,
    pricingComp,
    pageFooter
  }
}
</script>
