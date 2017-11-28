<template>
    <div>
        <h2>封面上传</h2>
        <p>从接口返回固定的几张封面图片，可以左右切换，也可以上传封面( 访问接口需要登录权限 )。</p>
        <h3>基础用法</h3>
        <div class="main">
            <mobo-upload-cover ref="UploadCover" :remark="true" :remarkC="remarkC" :width="200" :height="100"></mobo-upload-cover>
        </div>   
            <div class="code" v-highlight>
                <a class="lookCode" @click="show = !show">查看代码</a>
                <el-collapse-transition>
                    <div v-show="show">
                        <ul>
                            <li>使用&lt;mobo-upload-cover>组件</li>
                            <li>import MoboUploadCover from '@/components/uploadCover/UploadCover' 引入组件</li>
                            <li>components: {MoboUploadCover} 注册组件</li>
                        </ul>
                        
            <pre>
                <code>
            &lt;mobo-upload-cover      
                ref="UploadCover"
                :remark="true" 
                :remarkC="remarkC" 
                :width="200" 
                :height="100">
            &lt;/mobo-upload-cover>
            &lt;script>
            import MoboUploadCover from '@/components/uploadCover/UploadCover';
            export default {
                data () {
                    return {
                        remarkC:"这里是自定义内容"
                    }
                },
                components: { MoboUploadCover }
            }
            &lt;/script>
                </code>
            </pre>
                    </div>
                </el-collapse-transition>
            </div>
        <h3>Attributes</h3>
        <el-table style="width: 100%" :data="AttributesData">
            <el-table-column
                label="参数"
                prop="parameter"
                width="150">
            </el-table-column>
            <el-table-column
                label="说明"
                width="150"
                prop="explain">
            </el-table-column>
            <el-table-column
                label="类型"
                width="150"
                prop="type">
            </el-table-column>
            <el-table-column
                label="可选值"
                width="150"
                prop="option">
            </el-table-column>
            <el-table-column
                label="默认值"
                prop="default">
            </el-table-column>
        </el-table>
        <h3>Methods</h3>
        <el-table style="width: 100%" :data="MethodsData">
            <el-table-column
                label="方法名"
                prop="parameter"
                width="150">
            </el-table-column>
            <el-table-column
                label="说明"
                prop="explain">
            </el-table-column>
            <el-table-column
                label="参数"
                prop="type">
            </el-table-column>
        </el-table>
        <h3>Events</h3>
        <el-table style="width: 100%" :data="EventsData">
            <el-table-column
                label="事件名称"
                prop="parameter"
                width="150">
            </el-table-column>
            <el-table-column
                label="说明"
                prop="explain">
            </el-table-column>
            <el-table-column
                label="回调参数"
                prop="type">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    import Vue from 'vue';
    import MoboUploadCover from '@/components/uploadCover/UploadCover';
    //代码高亮显示
    
    console.log(MoboUploadCover);
    export default {

        data () {
            return {
                remarkC:"这里是自定义内容",
                show: true,
                AttributesData:[{
                    parameter:'remark',
                    explain:'是否显示提示说明',
                    type:'Boolean',
                    option:'true / false',
                    default:'true'
                },{
                    parameter:'remarkC',
                    explain:'提示说明的内容',
                    type:'String',
                    option:'----',
                    default:'建议图片宽高为2:1，建议800*400，支持jpg、jpeg、png格式，最大2M'
                },{
                    parameter:'width',
                    explain:'封面图的宽度',
                    type:'Number',
                    option:'----',
                    default:'200'
                },{
                    parameter:'height',
                    explain:'封面图的高度',
                    type:'Number',
                    option:'----',
                    default:'100'
                }],
                MethodsData:[],
                EventsData:[]
            }
        },
        created() {
            //hljs.highlightCode()
        },
        components: {MoboUploadCover},
        methods: {

        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
.main{
    border: 1px solid #ebebeb;
    padding: 20px;
}
.code{
    background: #fafafa;
    padding: 20px;
    border: 1px solid #ebebeb;
}
.lookCode{
    cursor: pointer;
    font-size: 12px;
}
.lookCode:hover{
    color: #409EFF;
}
.code ul{
    margin-top: 20px;

    background: #fff;
    border: 1px solid #ebebeb;
    padding: 20px 40px;
}
pre{
    line-height: 24px;
    font-size: 16px;
    color: #333;

}
</style>
