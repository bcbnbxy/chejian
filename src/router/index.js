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
import Nonetwork from '@/view/home/nonetwork'
import Nologin from '@/view/home/nologin'
import Homeindex from '@/view/home_shouye/homeindex'
import Faxian from '@/view/home_faxian/faxian'
import Search from '@/components/common/search'
import Detailpage from '@/view/home_faxian/detailpage'
import Praise from '@/view/home_faxian/praise'
import Phonebook from '@/view/home_faxian/phonebook'
import Homepage from '@/view/home/homepage'
import Fensi from '@/view/home_faxian/fensi'
import Upload from '@/view/home_faxian/upload'
import Personal from '@/view/my/personal'
import Devicebind from '@/view/my/Devicebinding'
import ContactService from '@/view/my/contactservice'
import Feedback from '@/view/my/feedback'
import Intercalate from '@/view/my/intercalate'
import Accountandsecurity from '@/view/my/accountandsecurity'
import Changepassword from '@/view/my/changepassword'
import Newmessage from '@/view/my/newmessage'
import SystemMessage from '@/view/my/systemmessage'
import EditProfile from '@/view/my/editprofile'
import ManageAddress from '@/view/my/manageaddress'
import Editaddress from '@/view/my/editaddress'
//import aaaa from '@/view/home/aaaa'
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
    	},,{
    		path:'/personal',
    		component:Personal
    	},{
    		path:'/nonetwork',
    		component:Nonetwork
    	},{
    		path:'/search',
    		component:Search
    	},{
    		path:'/detailpage',
    		component:Detailpage
    	},{
    		path:'/praise',
    		component:Praise
    	},{
    		path:'/phonebook',
    		component:Phonebook
    	}]
    },{
		path:'/homepage',
		component:Homepage
	},{
		path:'/fensi',
		component:Fensi
	},{
		path:'/upload',
		component:Upload
	},{
		path:'/devicebinding',
		component:Devicebind
	},{
		path:'/contactservice',
		component:ContactService
	},{
		path:'/feedback',
		component:Feedback
	},{
		path:'/intercalate',
		component:Intercalate
	},{
		path:'/accountandsecurity',
		component:Accountandsecurity
	},{
		path:'/changepassword',
		component:Changepassword
	},{
		path:'/newmessage',
		component:Newmessage
	},{
		path:'/systemmessage',
		component:SystemMessage
	},{
		path:'/editprofile',
		component:EditProfile
	},{
		path:'/manageaddress',
		component:ManageAddress
	},{
		path:'/editaddress',
		component:Editaddress
	}	
  ]
})
