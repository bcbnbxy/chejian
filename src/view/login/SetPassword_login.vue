<template>
	<div class="SetPassword-wrap">
		<h3 class="SetPassword-title">请设置新密码</h3>
		<div class="SetPassword-set">
			<label>设置新密码</label>
			<input type="text" placeholder="6~20位数字、字母或字符"/>
		</div>
		<div class="SetPassword-sure">
			<label>确认新密码</label>
			<input type="text" placeholder="请再次输入密码"/>
		</div>
		<router-link tag="el-button" class="el-button--info" to="/login/restsuccess">确认</router-link>
	</div>
</template>

<script>
</script>

<style>
.SetPassword-wrap{
	padding:0 32px;
}
.SetPassword-title{
	height:22px;
	color:#263a55;
	margin:25px 0 56px 0;
	font-size:22px;
	line-height:22px;
	font-weight: 500;
}
.SetPassword-set{
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
}
.SetPassword-set label{
	height:54px;
	font-size:12px;
	line-height:54px;
	color:#263a55;
	font-weight: 600;
}
.SetPassword-set input{
	height:30px;
	font-size:12px;
	line-height:30px;
	color:#263a55;
	border-bottom:1px solid #dedede;
}
.SetPassword-sure{
	padding-top:33px;
	padding-bottom:36px;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	
}
.SetPassword-sure label{
	height:12px;
	font-size:12px;
	line-height:12px;
	color:#263a55;
	font-weight: 600;
}
.SetPassword-sure input{
	margin-top:16px;
	height:30px;
	font-size:12px;
	line-height:30px;
	color:#263a55;
	border-bottom:1px solid #dedede;
}
</style>