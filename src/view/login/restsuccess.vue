<template>
	<div class="restsuccess">
		<div class="restsuccess-icon">
			<i class="iconfont icon-queren"></i>
			<span>密码重置成功</span>
		</div>
		<router-link tag="mt-button" type="default" to="/login">去登录</router-link>
	</div>
</template>

<script>
</script>

<style>
.restsuccess{
	padding:95px 32px 0 32px;
}
.restsuccess-icon{
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	align-items: center;
	padding-bottom:70px;
	color:#263a55;
}
.restsuccess-icon i{
	font-size:94px;	
}
.restsuccess-icon span{
	font-size:12px;
}
</style>