<template>
	<div class="login">
		<RegLoginHead></RegLoginHead>
		<div class="login-container" :class="{'hideLeft':$route.path.split('/').length>2&&$route.path.indexOf('/login')!==-1}">
			<h2 class="login-title">用户登录</h2>
			<div class="login-phonenum">
				<h3>手机号码</h3>
				<div class="phonenum"><p><span>+86</span><i class="iconfont icon-jiantou-copy-copy"></i></p><input type="text" placeholder="请输入您的电话号码" v-model="username"/></div>
			</div>
			<div class="login-password">
				<label>登录密码</label>
				<input type="text" placeholder="6~20位数字、字母或字符" v-model="password"/>
			</div>
			<router-link tag="p" to="/login/restpassword" class="forgetpassword">忘记密码？</router-link>
			<el-button type="info">登陆</el-button>
		</div>
		<div class="login-box">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
import RegLoginHead from'../../components/regsiter_login/reg_login_head'
export default{
	data(){
		return {
			 username: '',
             password: ''
		}
	},
	components:{RegLoginHead}
}
</script>

<style>
.login{
	height:100%;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;		
}
.login-container{
		height:100%;
		flex: 1;		
		width:100%;
		padding:0 32px;
		transition: 0.5s;
    	position: absolute;
    	top: 44px;
	}
.login-title{
		font-size:24px;
		margin-top:56px;
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
		padding:10px 0;
		border-bottom:1px solid #dedede;
		margin-top:8px;
		display: flex;
		display: -webkit-flex;
	}
.phonenum>p{
	flex:0 0 auto;
	border-right:1px solid #dedede;
	font-size:8px;
	color:#263a55;
}
.phonenum>p>i{
	font-size:12px;
	vertical-align: middle;
	margin:0 16px 0 11px;
}
.phonenum>input{
	flex:1 1 auto;
	background: none;
	padding-left:46px;
	font-size:12px;
	color:#263a55;
	font-weight: 600;
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
.login-password input{
	height:60px;
	font-size:12px;
	line-height:60px;
	color:#263a55;
	text-align: center;
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
.login-box{
	height:100%;
	flex: 1;
	width:100%;
}
</style>