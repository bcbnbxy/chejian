import Vue from 'vue'
import Router from 'vue-router'
import BootPage from '@/view/register/BootPage'
import Register from '@/view/register/register'
import Regist from '@/view/register/regist'
import Code from '@/view/register/code'
import Setpassword from '@/view/register/setpassword'
import ChooseCity from '@/view/register/choosecity'
import Login from '@/view/login/login'
import LoginIndex from '@/view/login/loginindex'
import Restpassword from '@/view/login/restpassword'
import Setpassword_login from '@/view/login/SetPassword_login'
import RestSuccess from '@/view/login/restsuccess'
import Home from '@/view/home/home'
import Homeindex from '@/view/home_shouye/homeindex'
import Faxian from '@/view/home_faxian/faxian'
import PlayVideo from '@/view/home_faxian/playvideo'
Vue.use(Router)
export default new Router({
	linkActiveClass:'v-link-active',
  routes: [
    {
      path: '/',
      component: BootPage
    },{
      path: '/register',
      component: Register,
      children:[{
      	path: '/',
      	component: Regist
      },{
      	path: '/register/code',
      	name:'code',
      	component: Code
      },{
      	path: '/register/setpassword',
      	component: Setpassword
      },{
      	path: '/register/choosecity',
      	component: ChooseCity
      }]
    },{
      path: '/login',
      component: Login,
      children:[{
      	path: '/',
      	component: LoginIndex
      },{
      	path: '/login/SetPassword_login',
      	component: Setpassword_login
      },{
      	path: '/login/restpassword',
      	component: Restpassword
      },{
      	path: '/login/restsuccess',
      	component: RestSuccess
      }]
    },{
    	path:'/home',
    	component:Home,
    	children:[{
    		path:'/',
    		component:Homeindex
    	},{
    		path:'/faxian',
    		component:Faxian
    	}]
    },{
    	path:'/faxian/playvideo',
    	component:PlayVideo
    }
  ]
})
