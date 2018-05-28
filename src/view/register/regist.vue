<template>
	<div class="register-container" :class="{'hideLeft':$route.path.split('/').length>2&&$route.path.indexOf('/register')!==-1}">
			<h2 class="register-title">新用户注册</h2>
			<div class="register-form">
				<p>手机号码</p>
				<div class="phonenum">
				 	<span>+86</span><input placeholder="请输入手机号" type="tel" v-model="newUsername" ref="newUsername" autofocus/>
				</div>
				<mt-button type="default" style="margin:17px 0 20px 0;" :disabled="isdisabled" @click="gosetpassword">下一步</mt-button>
				<div class="userAgreement">点击“下一步”即代表您同意《车间服务协议》</div>
			</div>
			<div class="thirdparty">
				<div class="thirdparty-title">
					<i></i>
					<span>或使用其他方式登陆</span>
					<i></i>
				</div>
				<div class="thirdparty-icon">
					<p><svg class="icon" aria-hidden="true"><use xlink:href="#icon-weixin"></use></svg><span>微信登陆</span></p>   
					<p><svg class="icon" aria-hidden="true"><use xlink:href="#icon-QQ"></use></svg><span>QQ登陆</span></p>
				</div>
			</div>
		</div>
</template>

<script>
import {regExs} from '../../assets/script/until.js'
let lodash = require('lodash')
export default{
	created(){
		 this.debouncedCheckUsername = lodash.debounce(this.checkUsername, 1000)
	},
	data(){
		return {
			newUsername:'',
			value:'',
			options:[],
			select: '1',
			isdisabled:true
		}
	},
	
	methods:{
		checkUsername:function(){
			if(this.$data.newUsername.trim()<1){
				this.$toast({
		          message: '账号不能为空!',
		          position: 'bottom',
  			      duration: 1500
		       });
			}else if(!regExs.mobile.test(this.$data.newUsername)){
				this.$toast({
		          message: '手机号格式不正确!',
		          position: 'bottom',
  			      duration: 1500
		       });
			}else{	
				let parm={action:'checkRegister',areacode:this.$store.state.register.userInfo.areaCodes,mobileno:this.$data.newUsername};
				var that=this;
				this.$api('/Execute.do',parm).then(function(r){
					if(r.errorCode=='0'){
				     	if(r.data.checkRegister){
				     		that.$store.commit('getphonenum',that.$data.newUsername);
				     		that.$data.isdisabled=false;
				     	}else{
				     		that.$toast({
					          message: '您的手机号已经被注册，请更换手机号!',
					          position: 'bottom',
  			                  duration: 1500
					        });
				     	}
				     }else{
				     	that.$toast({
				          message: r.errorMessage,
				          position: 'bottom',
  			              duration: 1500
				        });
				     }
				})
			}
		},
		gosetpassword:function(){
			this.$router.push('/register/setpassword')
		}
	},
	watch:{
		'newUsername':function(){
			this.debouncedCheckUsername()
		}
	}
}
</script>

<style>
.register-container{
		height:100%;		
		width:100%;
		padding:0 32px;
		padding-top:118px;
	}
.register-title{
	font-size:24px;
	color:#263a55;
	line-height:24px;
	height:24px;
}
.register-form{
	margin-top:69px;
}
.register-form>p{
	font-size:12px;
	height:27px;
	line-height:27px;
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
.userAgreement{
	text-align: center;
	color:#263a55;
	font-size:12px;
}
.thirdparty{
	padding-top:85px;
}
.thirdparty-title{
	height:12px;
	font-size:12px;
	line-height:12px;
	color:#263a55;
	display: flex;
	display: -webkit-flex;
	align-items: center;
}
.thirdparty-title i{
	height:1px;
	background: #dedede;
	flex:1 1 auto;
}
.thirdparty-title span{
	margin:0 6px;
	color:#949494;
}
.thirdparty-icon{
	display: flex;
	display: -webkit-flex;
	justify-content: space-around;
	margin-top:28px;
}
.thirdparty-icon>p{
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	align-items: center;
	font-size:12px;
	color:#949494;
}
.thirdparty-icon>p svg{
	font-size:33px;
	margin-bottom:8px;
}
	
.phonenum .mint-cell-title{
	width:50px !important;
	border-right:1px solid #dedede;
}
</style>