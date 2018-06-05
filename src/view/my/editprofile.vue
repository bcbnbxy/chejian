<template>
<div class="editprofile-wrap">
	<header>
		<span @click="$router.go(-1)"><i class="iconfont icon-fanhui"></i></span>
		<span>编辑个人资料</span>
		<span></span>
	</header>
	<dl class="editprofile-list">
		<dt><p>修改头像</p><p><img src="../../assets/img/faxianimg/avatar.png"/><i class="iconfont icon-arrow-right-copy-copy-copy"></i><input type="file"/></p></dt>
		<dd><p>修改昵称</p><p><span>婉婉</span><i class="iconfont icon-arrow-right-copy-copy-copy"></i></p></dd>
		<dd><p>性别</p><p><span>女</span><i class="iconfont icon-arrow-right-copy-copy-copy"></i></p></dd>
		<dd><p>生日</p><p><span>1994.05.02</span><i class="iconfont icon-arrow-right-copy-copy-copy"></i></p></dd>
		<dd><p>所在地</p><p><span>广东/深圳</span><i class="iconfont icon-arrow-right-copy-copy-copy"></i></p></dd>
		<dd><p>签名</p><p><span>点击设置签名</span><i class="iconfont icon-arrow-right-copy-copy-copy"></i></p></dd>
	</dl>
	<div class="submit">
		<button>保存</button>
	</div>
</div>
</template>

<script>
</script>

<style scoped>
.editprofile-wrap{
	width:100%;
	height:100%;
	background: #f7f7f7;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;	
}
.editprofile-wrap>header{
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
.editprofile-list{
	background: #fff;
}
.editprofile-list dt{
	height:2.4rem;
	display:flex;
	display: -webkit-flex;
	justify-content: space-between;
	align-items: center;
	font-size:0.44rem;
	color:#222;
	border-bottom:1px solid #ddd;
	padding:0 0.5rem;
	
}
.editprofile-list dt p:last-child{
	position: relative;
}
.editprofile-list dt p:last-child input{
	position: absolute;
	left:0;
	right:0;
	z-index: 10;
	width:100%;
	height:100%;
	opacity: 0;
	filter:Aplpha(opacity=0);
}
.editprofile-list dt img{
	width:1.4rem;
	vertical-align: middle;
}
.editprofile-list i{
	color:#999;
	margin-left:0.5rem;
	font-size:0.6rem;
}
.editprofile-list dd{
	height:1.6rem;
	display:flex;
	display: -webkit-flex;
	justify-content: space-between;
	align-items: center;
	font-size:0.44rem;
	color:#222;
	border-bottom:1px solid #ddd;
	padding:0 0.5rem;
}
.editprofile-list dd:last-child{
	border-bottom:none;
}
.submit{
	padding:0 0.6rem;
	margin-top:0.5rem;
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