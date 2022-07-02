<template>
  <div class="home">
    <div class="home-banner">
      <div class="home-banner-left"></div>
      <div class="home-banner-right"></div>
    </div>
    <div class="home-box">
      <div class="home-box-left"></div>
      <div class="home-box-right"></div>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped lang="less">
.home {
  max-width: 1200px;
  min-height: 100%;
  margin: 20px auto;
  .home-banner {
    width: 1200px;
    height: 400px;
    margin: 0 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    background: red;
  }
  .home-box {
    .home-box-left {
    }
  }
}
</style>
