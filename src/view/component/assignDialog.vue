<template>
    <div>
        <h2>部门，人员，标签选择</h2>
        <p>从接口返回固定数据( 访问接口需要登录权限 )。</p>
        <h3>基础用法</h3>
        <div class="component">
            <p>这里是demo</p>
        </div>
        <div class="code" v-highlight>
            <a class="lookCode" @click="show = !show">查看代码</a>
            <el-collapse-transition>
                <div v-show="show">
                    <ul>
                        <li>使用组件</li>
                    </ul>
                    
            <pre>
                <code>
                &lt;p>这里是demo &lt;/p>
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
    import '@/styles/components.scss'
    export default {
        data () {
            return {
                show:false,
                AttributesData:[],
                MethodsData:[],
                EventsData:[]
            }
        },
        created() {
            
        },
        methods: {

        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
