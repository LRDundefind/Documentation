import Vue from 'vue'
import Router from 'vue-router'
import guide from '@/view/guide/index'  //指南
import component from '@/view/component/index'  //组件
import resource from '@/view/resource/index'  //资源
import uploadCover from '@/view/component/uploadCover'  //上传封面组件
import assignDialog from '@/view/component/assignDialog'  //选择人员，部门，标签组件


Vue.use(Router)

export default new Router({
  	routes: [
  	
	    {
	      	path: '/guide',
	      	name: 'guide',
	      	component: guide
	    },
	    {
	      	path: '/component',
	      	name: 'component',
	      	redirect: '/component/uploadCover',
	      	component: component,
	      	children:[
	      		{
			      	path: '/',
			      	component: guide
			    },
                {
                    path:"uploadCover",
                    name: 'component/uploadCover',
                    component:uploadCover
                },
                {
                    path:"assignDialog",
                    name: 'component/assignDialog',
                    component:assignDialog
                }
            ]
	    },
	    {
	      	path: '/resource',
	      	name: 'resource',
	      	component: resource
	    }
	 ]
})
