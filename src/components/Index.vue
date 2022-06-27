<template>
   <div class="box">
    <Header />
    <div class="content">
        <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup>
    import Header from './Header.vue';
    import Footer from './Footer.vue';
</script>

<style lang="less" scoped>
    .box{
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        position: relative;
        .content{
            min-height: calc(100vh-146px);
            padding: 46px 0 100px;
        }
    }
</style>
