<template>
    <ul class="newslist">
        <li class="listBox" v-for="(item,index) in listCon" :key="index" v-if="item.title" @click="getparams">
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

export default {
    props: {

    },
    data() {
        return {
            listCon: [],
        }
    },
    mounted() {
        this.$axios.get('/news_hot').then(res => {
            this.listCon = res.data.data
            console.log(res.data)
        })
        console.log(this.$route)
    },

    methods: {
        getparams: function() {
            console.log(this.$route.params)

        }
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
    margin-bottom: 40px;
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
