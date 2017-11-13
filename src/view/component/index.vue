<template>
    <div>
        <!-- 左侧导航 -->
        <div class="left">
            <div class="aside">
                <h4>组件</h4>
                <ul class="side-nav">
                    <li class="nav-item"><router-link :to="{name:'component/uploadCover'}">封面上传</router-link></li>
                    <li class="nav-item"><router-link :to="{name:'component/assignDialog'}">部门，人员，标签选择</router-link></li>
                </ul>
            </div>  
        </div>

        <!-- 右侧主内容区 -->
        <div  class="right">
            <div class="comMain">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss">
    /* 主内容区 */
    .comMain{
        padding-top: 50px;
        padding-left: 240px;
        width: -moz-calc(100% - 240px);
        width: -webkit-calc(100% - 240px); 
        width: -webkit-calc(100% - 240px);
    }
    .aside{
        width: 220px;
        padding-top: 50px;
        position: fixed;
        overflow-y: hidden;
        height:-moz-calc(100% - 150px); 
        height:-webkit-calc(100% - 150px); 
        height: calc(100% - 150px);
    }
    .aside:hover{
        overflow-y: scroll;
    }
    .side-nav {
        height: 100%;
        padding-left: 0;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-right: 0;
    }
    .side-nav .nav-item{
        list-style: none;
    }
    .side-nav .nav-item a{
        margin: 0 20px;
        font-size: 13px;
        line-height: 40px;
        text-decoration: none;
        position: relative;
        cursor: pointer;
    }
    .side-nav .nav-item a:hover,
    .router-link-exact-active{
        color: #20A0FF;
    }
</style>
