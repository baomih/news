<template>
    <div class="footer">
        <ul>
            <li>
                <a href="">
                    <div class="icon iconfont icon-shouye"></div>首页</a>
            </li>
            <li>
                <a href="">
                    <div class="icon iconfont icon-shoucang"></div>收藏</a>
            </li>
            <li>
                <a href="">
                    <div class="icon iconfont icon-wenzhang"></div>段子</a>
            </li>
            <li>
                <a href="">
                    <div class="icon iconfont icon-wodedangxuan"></div>我的</a>
            </li>
        </ul>
    </div>
</template>
<script>
import '../assets/font/iconfont.css'
export default {
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
}

.footer ul {
    width: 100%;
}

.footer ul li {
    width: 25%;
    height: 40px;
    float: left;
}

.footer ul li a {
    display: block;
    margin-top: 8px;
    width: 100%;
    height: 100%;
    text-align: center;
}

.footer ul li a span {}
</style>
