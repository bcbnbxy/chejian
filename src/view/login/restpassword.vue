<template>
	<div class="restpassword">
		<h3 class="restpassword-title">重置密码</h3>
		<div class="restpassword-group">
			<div class="login-phonenum">
				<h3>手机号码</h3>
				<div class="phonenum"><p><span>+86</span><i class="iconfont icon-jiantou-copy-copy"></i></p><input type="text" placeholder="请输入您的电话号码"/></div>
			</div>
			<div class="restpassword-yzm">
				<label>登录密码</label>
				<input type="text" placeholder="6~20位数字、字母或字符"/>
			</div>
			<div class="getyzm"><span @click="djs()">获取验证码</span><span v-show="getyzm">{{time}}s</span></div>
			<router-link tag="el-button" to="/login/SetPassword_login" class="el-button--info">下一步</router-link>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			time:'10',
			getyzm:false
		}
	},
	methods:{
		djs:function(){
			this.$data.getyzm=true;
			var timer = setInterval(() => {
            this.$data.time --;
              if(this.$data.time===-1){
              	clearInterval(timer);
              	this.$data.getyzm=false;
              }
        	}, 1000)
		}
	}
}
</script>

<style>
.restpassword{
	padding:0 32px;
}
.restpassword-title{
	height:22px;
	color:#263a55;
	margin:56px 0 77px 0;
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
.restpassword-yzm input{
	height:30px;
	font-size:12px;
	line-height:30px;
	color:#263a55;
	text-align: center;
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
</style>