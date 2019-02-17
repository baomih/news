<template>
    <ul class="newslist">
        <li class="listBox" v-for="(item,index) in listCon" :key="index" v-if="item.title">
            <h3 class="title" v-html="item.title"></h3>
            <div v-if="item.has_image ? item.image_list.length : false">
                <img v-for="(img, index) in item.image_list" v-lazy="img.url" alt="" :key="index" v-if="index < 3">
            </div>
            <p class="info"><span class="left">{{item.media_name}}  评论  {{item.comment_count}}</span>
                <span class="right">{{item.datetime|dateFormat}}</span></p>
        </li>
    </ul>
</template>
<script>
import moment from 'moment'
import bus from '../common/eventBus.js'

export default {
    props: {

    },
    data() {
        return {
            listCon: [],
            nowpath: this.$route.path
        }
    },
    mounted() {
        var that = this
        this.$axios.get('/news').then(res => {
            this.listCon = res.data.data
        })
        bus.$on("loadingmore", function(msg) {
            that.$axios.get(that.nowpath.replace('/home', '')).then(res => {
                that.listCon = that.listCon.concat(res.data.data)
            })
        })
    },
    watch: {
        $route(to, from) {                
            this.$axios.get(from.path.replace('home', '')).then(res => {
                this.listCon = res.data.data
            })    
        }
    },
    methods: {

    },
    filters: {
        dateFormat(time) {
            return moment(time).startOf('mimute').fromNow()
        }
    }
}
</script>
<style scoped>
.newslist {
    background-color: #fff;
    margin-top: 70px;
    padding: 0 20px;
    color: #465565;
}

.listBox {
    padding: 0 0 30px 0;
    border-bottom: 1px solid #ddd;
}

.listBox img {
    width: 30%;
    margin-right: 2.3333%;
}

.title {
    padding: 10px 0;
}

.info {
    font-size: 14px;
}

.info .left {
    float: left;
}

.info .right {
    float: right;
}
</style>
