<template>
	<div class="loginindex">
		<div class="login-container" :class="{'hideLeft':$route.path.split('/').length>2&&$route.path.indexOf('/login')!==-1}">
			<h2 class="login-title">用户登录</h2>
			<div class="login-phonenum">
				<h3>手机号码</h3>
				<div class="phonenum">
				  <span>+86</span><input placeholder="请输入手机号" type="tel" v-model="LoginName" ref="newUsername" autofocus/>
				</div>			
			</div>
			<div class="login-password">
				<label>登录密码</label>
				<input class="loginpassword" type="password" placeholder="6~20位数字、字母或字符"  v-model="PassWord"/>
			</div>
			<router-link tag="p" to="/login/restpassword" class="forgetpassword">忘记密码？</router-link>
			<mt-button type="default" :disabled="isdisabled" @click="login">登陆</mt-button>
		</div>
	</div>
</template>

<script>
import {regExs} from '../../assets/script/until.js'
let lodash = require('lodash')
export default {
	data(){
		return {
			 loginname: '',
			 loginnametrue:false,
             password: '',
             passwordtrue:false,
             select:'1'
		}
	},
	computed:{
		LoginName:{
			set:lodash.debounce(function(value){
				if(value.trim().length<1){
					this.$toast({
			          message: '手机号不能为空',
			          position: 'bottom',
  					  duration: 1500
			       });
			       this.loginnametrue=false;
				}else if(!regExs.mobile.test(value)){
					this.$toast({
			          message: '手机号格式不正确!',
			          position: 'bottom',
  					  duration: 1500
			       });
			       this.loginnametrue=false;
				}else if(regExs.mobile.test(value)){
					this.$toast({
			          message: '手机号输入正确!',
			          position: 'bottom',
  					  duration: 1500
			       });
					this.loginnametrue=true;
					this.loginname=value;
				}
			},1000),
			get:function(){
				return this.loginname;
			}
		},
		PassWord:{
			set:lodash.debounce(function(value){
				if(value.trim().length<1){
					this.$toast({
			          message: '密码不能为空',
			          position: 'bottom',
  					  duration: 1500
			       });
			       this.passwordtrue=false;
				}else if(!regExs.password.test(value)){
					this.$toast({
			          message: '密码格式不正确!',
			          position: 'bottom',
  					  duration: 1500
			       });
			       this.passwordtrue=false;
				}else if(regExs.password.test(value)){
					this.$toast({
			          message: '密码输入正确!',
			          position: 'bottom',
  					  duration: 1500,
			       });
			       this.passwordtrue=true;
			       this.password=value;
				}
			},1000),
			get:function(){
				return this.password;
			}
		},
		isdisabled:function(){
			if(this.loginnametrue&&this.passwordtrue){
				return false;
			}else{
				return true;
			}
		}
	},
	methods:{
		login:function(){
			var that=this;
			this.$api('/Execute.do',{loginname:this.loginname,password:this.password,action:'login'}).then(function(r){
				if(r.errorCode==0){
					that.$toast({
			          message: '登录成功',
			          position: 'bottom',
  					  duration: 1500
			       });
			       that.$store.commit('getloginInfo',r.data.login)
			       that.$router.push('/home');
			       localStorage.setItem("loginInfo",JSON.stringify({logintrue:true,time:new Date().getTime()}))
				}else{
					that.$toast({
			          message: r.errorMessage,
			          position: 'bottom',
  					  duration: 1500
			       });
				}
			})
		}
	}
}
</script>

<style>
.loginindex{
	height:100%;
}
.login-container{
	height:100%;		
	padding:0 32px;
	padding-top:100px;
}
.login-title{
	font-size:24px;
	color:#263a55;
	line-height:24px;
	height:24px;
}
.login-phonenum{
	margin-top:77px;
}
.login-phonenum>h3{
	font-size:12px;
	height:12px;
	line-height:12px;
	color:#263a55;
}
.phonenum{
	height:38px;
	display:flex;
	display: -webkit-flex;
	justify-content: space-between;
	padding:10px 0;
	border-bottom:1px solid #dedede;
	align-items:center ;
	font-size:12px;
	color:#263a55;
}
.phonenum span{
	flex: 0 0 50px;
	border-right:1px solid #dedede;
}
.phonenum input {
	flex: 1 1 auto;
	text-align: center;
}
.login-password{
	padding-top:18px;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
}
.login-password label{
	height:12px;
	font-size:12px;
	line-height:12px;
	color:#263a55;
	font-weight: 600;
}
.login-password .loginpassword{
	height:30px;
	font-size:12px;
	line-height:30px;
	color:#263a55;
	text-align: center;
	border:none;
	border-bottom:1px solid #dedede;
}
.forgetpassword{
	height:57px;
	line-height:57px;
	font-size:12px;
	color:#263a55;
	text-align: right;
	margin-bottom:10px;
}
</style>