<template>
    <div class="loading" @click="loadmore">
        <span>点击加载更多...</span>
    </div>
</template>
<script>
import bus from '../common/eventBus.js'
export default {
    data() {
            return {}
        },
        methods: {
            loadmore() {
                bus.$emit('loadingmore', 'need to load')
            }
        }
}
</script>
<style scoped>
.loading {
    text-align: center;
    cursor: pointer;
    padding: 10px;
}
</style>
