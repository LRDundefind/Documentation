<template>
    <div id="app">
          <!-- 头部导航 -->
        <header class="header">
            <div class="container">
                <img src="./assets/logo.png" alt="logo" class="logo">
                <ul class="nav">
                    <li class="nav-item"><el-input placeholder="搜索文档"></el-input></li>
                    <li class="nav-item"><router-link :to="'/guide'">指南</router-link></li>
                    <li class="nav-item"><router-link :to="'/component'">组件</router-link></li>
                    <li class="nav-item"><router-link :to="'/resource'">资源</router-link></li>
                </ul>
            </div>
        </header>

        <main>
            
            <div class="page-container">
                <router-view>
                    
                </router-view>
                
            </div>
        </main>
     </div>
</template>

<script>
    import Vue from 'vue'
    import Element from 'element-ui'
    import 'element-ui/lib/theme-default/index.css'

    Vue.use(Element)

    export default {
        name: 'app',
        data: function (){
            return {
              active:true
            }
        },
        created() {
            require('@/styles/common.scss');
        },
    }
</script>

<style>
    body{margin: 0;}
    a{
        text-decoration: none;
        color: #888;
        display: block;
    }
    header{
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 1500;
    }
    #app {
        min-width: 1200px;
        margin: 0 auto;
    }
    /* 头部导航 */
    .logo{width: 100px;}
    .header{
        background: #fff;
    }
    .header .nav{
        
        float: right;
        line-height: 50px;
        padding: 0;
        margin: 0;
    }
    .header .nav-item{
        margin: 0 20px;
        color: #333;
        float: left;
        list-style: none;
        position: relative;
        cursor: pointer;
    }
    .header .nav .router-link-active{
        border-bottom: 4px #20A0FF solid;
    }
    /* 主内容区 */
    .container, .page-container {
        width: 1140px;
        padding: 0;
        margin: 0 auto;
    }
    .page-container{
        margin-top: 80px;
    }
    ::-webkit-scrollbar-thumb {
        min-height: 20px;
        border-radius: 5px;  
        background-clip: content-box;
        box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.2) inset;
    }
    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/  
    ::-webkit-scrollbar  
    {  
        width: 6px;  
        height: 6px;  
        background-color: #F5F5F5;  
    }  
  
</style>