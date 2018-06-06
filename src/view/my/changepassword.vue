<template>
<div class="changepassword-wrap">
	<header>
		<span @click="$router.go(-1)"><i class="iconfont icon-fanhui"></i></span>
		<span>修改密码</span>
		<span></span>
	</header>
	<ul class="changepassword-list">
		<li>
			<label>原密码</label>
			<input type="text" placeholder="请输入原6-18位密码"/>
		</li>
		<li>
			<label>新密码</label>
			<input type="text" placeholder="请输入新6-18位密码"/>
		</li>
		<li>
			<label>确认密码</label>
			<input type="text" placeholder="请确认6-18位密码"/>
		</li>
	</ul>
	<div class="submit">
		<button>确定</button>
	</div>
</div>
</template>

<script>
</script>

<style scoped>
.changepassword-wrap{
	width:100%;
	height:100%;
	background: #f7f7f7;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;	
}
.changepassword-wrap>header{
	height:1.32rem;
	padding:0 0.5rem;
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
	align-items: center;
	font-size:0.56rem;
	color:#fff;
	background-image:url(../../assets/img/faxianimg/headbg.png) ;
	background-size:cover ;
}
.changepassword-list{
	background: #fff;
}
.changepassword-list li{
	height:1.6rem;
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
	align-items: center;
	font-size:0.38rem;
	color:#222;
	background: #fff;
	padding:0 0.5rem;
	border-bottom:1px solid #ddd;
}
.changepassword-list li:last-child{
	border-bottom:none;
}
.changepassword-list li input{
	flex: 1;
	height:100%;
	padding-left:0.5rem;
	border:none;
}
.changepassword-list li input::-webkit-input-placeholder{
	color:#999;
}
.submit{
	padding:0 0.6rem;
	padding-top:0.5rem;
}
.submit>button{
	width:100%;
	text-align: center;
	background:#369cf9;
	line-height:1.6rem;
	height:1.6rem;
	border:none;
	font-size:0.48rem;
	color:#fff;
	border-radius: 5px;
}
</style>