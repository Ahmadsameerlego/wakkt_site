<template>
  <div class="home">
    <!-- header  -->
    <pageHeader />

    <!-- join wakkt  -->
    <joinWakkt />

    <!-- why wakkt  -->
    <whyWakkt />
  </div>
</template>

<script>
import pageHeader from '../components/page_header.vue'
import joinWakkt from '../components/join_wakkt.vue'
import whyWakkt from '../components/why_wakkt.vue'
export default {
  name: 'HomeView',
  components: {
    pageHeader,
    joinWakkt,
    whyWakkt
  }
}
</script>
