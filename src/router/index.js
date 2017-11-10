import Vue from 'vue'
import Router from 'vue-router'
import guide from '@/view/guide/index'
import component from '@/view/component/index'
import resource from '@/view/resource/index'
import uploadCover from '@/view/component/uploadCover'
import assignDialog from '@/view/component/assignDialog'


Vue.use(Router)

export default new Router({
  	routes: [
  		{
	      	path: '/',
	      	name: 'guide',
	      	component: guide
	    },
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
