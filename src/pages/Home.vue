<template>
    <div>
        <div class="header">
            <span class="title">今日头条</span>
            <router-link class="searchbox" to="/search">
                <span class="icon iconfont icon-search"></span> 搜索
            </router-link>
        </div>
        <c-nav></c-nav>
        <c-news></c-news>
        <c-loadmore class="loadmore"></c-loadmore>
        <div class="topbutton" v-show="show" @click="backTop">top</div>
        <c-footer></c-footer>
    </div>
</template>
<script>
import '../assets/style/common.css'
import '../assets/font/iconfont.css'
import CFooter from '../components/Footer.vue'
import CNav from '../components/HomeNav.vue'
import CNews from '../components/Newslist.vue'
import CLoadmore from '../components/Loadmore.vue'

export default {
    data() {
            return {
                show: false
            }
        },
        components: {
            CFooter,
            CNav,
            CNews,
            CLoadmore
        },
        mounted() {
            var that = this
            document.addEventListener('scroll', function() {
                if ((window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop) > 400) {
                    that.show = true
                } else {
                    that.show = false
                }
            })
        },
        methods: {
            backTop() {
                window.pageYOffset = document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
        }

}
</script>
<style scoped>
.header {
    background-color: red;
    height: 40px;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    line-height: 40px;
    padding: 0 20px 0 20px;
}

.title {
    color: #fff;
    font-size: 20px;
}

.searchbox {
    position: absolute;
    right: 60px;
    top: 7px;
    height: 25px;
    width: 150px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding-left: 25px;
    line-height: 25px;
}

.searchbox span {
    position: absolute;
    left: 3px;
}

.loadmore {
    margin-bottom: 40px;
}

.topbutton {
    position: fixed;
    right: 20px;
    bottom: 60px;
    width: 35px;
    height: 35px;
    background-color: #5d5c5c;
    color: #fff;
    text-align: center;
    line-height: 35px;
}
</style>
