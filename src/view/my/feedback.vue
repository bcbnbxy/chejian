<template>
	<div class="feedback-wrap">
		<header>
			<span @click="$router.go(-1)"><i class="iconfont icon-fanhui"></i></span>
			<span>意见反馈</span>
			<span></span>
		</header>
		<div class="feedback-textarea">
			<textarea placeholder="请输入您的意见或者建议，我们将为您提供更好的服务"></textarea>
		</div>
		<div class="feedback-email">
			<label>您的邮箱:</label>
			<input type="email"/>
		</div>
		<div class="feedback-email">
			<label>您的电话号码:</label>
			<input type="text"/>
		</div>
		<div class="submit">
			<button>提交意见</button>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
.feedback-wrap{
	width:100%;
	height:100%;
	background: #f7f7f7;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
}
.feedback-wrap>header{
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
.feedback-textarea textarea{
	width:100%;
	height:5rem;
	padding:0 0.5rem;
	background: #fff;
	border:none;
	font-size:0.4rem;
	color:#222;
	line-height:1rem;
	margin-bottom: 0.3rem;
}
.feedback-email{
	height:1.6rem;
	background: #fff;
	padding:0 0.5rem;
	display: flex;
	display: -webkit-flex;
	align-items: center;
	font-size:0.4rem;
	color:#999;
	margin-bottom:0.3rem;
}
.feedback-email>input{
	flex: 1;
	height:100%;
	padding-left:0.5rem;
	border:none;
}
.submit{
	padding:0 0.6rem;
	padding-top:0.2rem;
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