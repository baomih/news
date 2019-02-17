<template>
    <div class="search">
        <a class="back" href="javascript:history.back();">
            <span class="icon iconfont icon-zuojiantou"></span>
        </a>
        <div class="searchInput">
            <input type="search" placeholder="请输入关键字">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.back {
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
}

.back span {
    font-size: 20px;
    font-weight: bold;
}

.searchInput {
    width: 100%;
    height: 40px;
    background-color: red;
}

.searchInput input {
    width: 200px;
    height: 30px;
    padding: 5px 10px;
    margin: 5px 0px 0px 60px;
}
</style>
