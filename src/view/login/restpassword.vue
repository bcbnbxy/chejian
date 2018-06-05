<template>
	<div class="restpassword">
		<h3 class="restpassword-title">重置密码</h3>
		<div class="restpassword-group">
			<div class="login-phonenum">
				<h3>手机号码</h3>
				<div class="phonenum">
				  <span>+86</span><input placeholder="请输入手机号" type="tel" v-model="loginname" @keydown="LoginName"/>
				</div>
			</div>
			<div class="restpassword-yzm">
				<label>手机验证码</label>
				<input class="loginpassword" type="text" placeholder="手机验证码"  v-model="yzm" @keydown="YZM"/>
			</div>
			<div class="getyzm"><span @click="sendcode">{{$store.state.login.sendmessage}}</span><span v-show="$store.state.login.yzmtrue">({{$store.state.login.sendcodetime}} s)</span></div>
			<mt-button type="default" :disabled="isdisabled" @click="gosetpassword">下一步</mt-button>
		</div>
	</div>
</template>

<script>
import {regExs} from '../../assets/script/until.js'
let lodash = require('lodash')
export default{
	data(){
		return {
			loginname: '',
			loginnametrue:false,
			yzm:'',
			yzmtrue:false,
			select:'1'			
		}
	},
	computed:{
		isdisabled:function(){
			if(this.loginnametrue&&this.yzmtrue){
				return false;
			}else{
				return true;
			}
		}
	},
	methods:{
		sendcode:function(){
			if(this.$store.state.login.sendcodetrue){
				var self=this;
				self.$api('Execute.do',{action:"sendCheckCode4Reset",mobileno:this.loginname,areacode:'86'}).then(function(r){
					if(r.errorCode==0){
						self.$store.commit('sendcodetime');
						self.$store.commit('changesendmsg',"验证码已发送");
						self.$store.commit('changeyzmtrue');
						self.$store.state.login.sendcodetimer=setInterval(getTotelNumber,1000)
					}else{
						self.$toast({
				          message: r.errorMessage,
				          position: 'bottom',
					      duration: 1500
				       });
					}
				})				
			}
			function getTotelNumber() {
		       	self.$store.commit('sendcodedjs');
	        }
		},
		YZM:lodash.debounce(function(){
				if(this.yzm.trim().length<1){
					this.$toast({
			          message: '验证码不能为空',
			          position: 'bottom',
  					  duration: 1500
			       });
			       this.yzmtrue=false;
				}else if(!regExs.yzm.test(this.yzm)){
					this.$toast({
			          message: '手机号格式不正确!',
			          position: 'bottom',
  					  duration: 1500
			       });
			       this.yzmtrue=false;
				}else if(regExs.yzm.test(this.yzm)){
					this.$toast({
			          message: '验证码格式正确',
			          position: 'bottom',
  					  duration: 1500
			       });
					this.yzmtrue=true;
					this.$store.commit('changesendmsg','获取验证码')
				}
			},1500),
		LoginName:lodash.debounce(function(){
				if(this.loginname.trim().length<1){
					this.$toast({
			          message: '手机号不能为空',
			          position: 'bottom',
  					  duration: 1500
			       });
			       this.loginnametrue=false;
				}else if(!regExs.mobile.test(this.loginname)){
					this.$toast({
			          message: '手机号格式不正确!',
			          position: 'bottom',
  					  duration: 1500
			       });
			       this.loginnametrue=false;
				}else if(regExs.mobile.test(this.loginname)){
					this.$toast({
			          message: '手机号输入正确!',
			          position: 'bottom',
  					  duration: 1500
			       });
					this.loginnametrue=true;
					this.$store.commit('changesendmsg','获取验证码')
				}
			},1000),
		gosetpassword:function(){
			this.$store.commit('restpasswordInfo',{checkcode:this.yzm,mobileno:this.loginname});
			this.$router.push('/login/SetPassword_login')
		}
	}
}
</script>

<style>
.restpassword{
	height:100%;		
	padding:0 32px;
	padding-top:100px;
}
.restpassword-title{
	height:22px;
	color:#263a55;
	margin:0 0 77px 0;
	font-size:22px;
	line-height:22px;
}
.restpassword-yzm{
	padding-top:18px;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
}
.restpassword-yzm label{
	height:12px;
	font-size:12px;
	line-height:12px;
	color:#263a55;
	font-weight: 600;
}
.restpassword-yzm .loginpassword{
	height:40px;
	font-size:12px;
	line-height:40px;
	color:#263a55;
	text-align: center;
	border:none;
	border-bottom:1px solid #dedede;
}
.getyzm{
	height:56px;
	line-height:56px;
	color:#263a55;
	text-align: right;
	font-size:12px;
	margin-bottom:11px;
}
.login-phonenum h3{
	height:12px;
	font-size:12px;
	line-height:12px;
	color:#263a55;
	font-weight: 600;
}
.phonenum{
	height:36px;
	margin-top:8px;
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
</style>