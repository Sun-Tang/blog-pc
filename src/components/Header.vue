<template>
    <div class="header">
        <div class="header-box">
            <div class="left-log">
                <a class="logo" href="/"></a>
                <span class="logo-text">Sun's blog</span>
            </div>
            <div class="right-menu">
                <div class="menu-search">
                     <el-input
                        v-model="input"
                        class="w-50 m-2"
                        placeholder=""
                        :suffix-icon="Search"
                        />
                </div>
                <div class="menu-box">
                    <a class="item">
                        <span class="iconfont icon-home_nav_home_selected home-icon"></span>
                        首页
                    </a>
                    <a class="item">
                        <span class="iconfont icon-jishurenyuan jishu-icon"></span>
                        技术
                    </a>
                    <a class="item">
                        <span class="iconfont icon-sheying sheying-icon"></span>
                        视频
                    </a>
                    <a class="item">
                        <span class="iconfont icon-shenghuo shenghuo-icon"></span>
                        生活
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "@vue/reactivity";
    import { Search } from '@element-plus/icons-vue'
    let input = ref('')
</script>

<style scoped lang="less">
    .header{
        width: 100%;
        height: 46px;
        overflow: hidden;
        background-color: #fff;
        box-shadow: 0 1px 4px rgb(89 90 89 / 28%);
        position: fixed;
        top: 0;
        z-index: 1000;
        color: #333;
        transition: all 0.3s;
        .header-box{
            height: 46px;
            transition: transform 0.4s;
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left-log{
                display: flex;
                align-items: center;
                .logo{
                    width: 36px;
                    height: 36px;
                    display: block;
                    background-image: url('./../assets/logo.png');
                    background-size: cover;
                }
                .logo-text{
                    margin-left: 10px;
                    font-size: 16px;
                }
            }
            .right-menu{
                display: flex;
                .menu-search{
                    display: flex;
                    align-items: center;
                    margin-right: 40px;
                    /deep/.el-input__wrapper{
                        border-radius: 25px;
                    }
                }
                .menu-box{
                    display: flex;
                    font-size: 16px;
                    .item{
                        display: flex;
                        margin: 0;
                        width: 80px;
                        height: 46px;
                        justify-content: center;
                        align-items: center;
                        span{
                            margin-right: 5px;
                            font-size: 18px;
                        }
                    }
                }
            }
        }
    }
    .home-icon{
        color: rgb(253, 73, 83)!important;
    }
    .jishu-icon{
        color: rgb(27, 179, 166)!important;
    }
    .sheying-icon{
        color: rgb(245, 94, 85)!important;
    }
    .shenghuo-icon{
        color: rgb(152, 205, 90)!important;
    }
</style>