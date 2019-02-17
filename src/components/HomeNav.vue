<template>
    <div class="homenav">
        <ul>
            <li v-for="(item, index) in nav">
                <router-link class="link" :to="item.url + '/' +item.type">{{item.text}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nav: [{
                url: '/home',
                type: '__all__',
                text: '推荐'
            }, {
                url: '/home',
                type: 'news_hot',
                text: '热点'
            }, {
                url: '/home',
                type: 'news_society',
                text: '社会'
            }, {
                url: '/home',
                type: 'news_entertainment',
                text: '娱乐'
            }, {
                url: '/home',
                type: 'news_tech',
                text: '科技'
            }, {
                url: '/home',
                type: 'news_car',
                text: '汽车'
            }, {
                url: '/home',
                type: 'news_sports',
                text: '体育'
            }, {
                url: '/home',
                type: 'news_finance',
                text: '财经'
            }, {
                url: '/home',
                type: 'news_military',
                text: '军事'
            }, {
                url: '/home',
                type: 'news_world',
                text: '国际'
            }, {
                url: '/home',
                type: 'news_fashion',
                text: '时尚'
            }]
        }
    }
}
</script>
<style scoped>
.homenav {
    position: fixed;
    top: 40px;
    left: 0;
    background-color: #fff;
    overflow: scroll;
    width: 100%;
}

ul {
    width: 200%;
}

li {
    float: left;
}

li .link {
    font-size: 16px;
    display: block;
    width: 40px;
    height: 20px;
    padding: 5px 5px 10px 5px;
}

.active {
    color: #F8A090;
}
</style>
