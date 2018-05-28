<template>
	<div class="home-wrap">
		<header class="home-head">
			<HomeHead></HomeHead>
		</header>
		<div class="home-main">
			<router-view></router-view>
		</div>
		<footer class="footer">
			<router-link to="/home" tag="div" ><img src="../../assets/img/faxianimg/home.png"/><span>首页</span></router-link>
			<router-link to="/faxian" tag="div"><img src="../../assets/img/faxianimg/found.png"/><span>发现</span></router-link>
			<div><img src="../../assets/img/faxianimg/carfrend.png"/><span>车友</span></div>
			<div><img src="../../assets/img/faxianimg/my.png"/><span>我的</span></div>
		</footer>
	</div>
</template>
<script>
import HomeHead from './home_head'
export default {
	components:{HomeHead}
}
</script>

<style>
.home-wrap{
	width:100%;
	height:100%;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	background: #f4f4f4;
	overflow: hidden;
}
.home-head{
	height:1.32rem;
	background: url(../../assets/img/faxianimg/headbg.png) center no-repeat;
}
.home-main{
	flex:1;
	overflow: auto;
}
::-webkit-scrollbar{
	display: none;
}
.footer{
	height:1.45rem;
	background: #fff;
	padding:0 0.48rem 0 0.48rem;
	background:#f8f8f8;
	border-top:1px solid #dcdcdc;
}
.footer>div{
	float: left;
	width:25%;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height:1.44rem;
	padding:0.24rem 0 0.12rem 0;
	border-top:1px solid #dcdcdc;
	position: relative;
	top:-1px;
}
.footer>div>img{
	max-width:0.6rem;
	max-height:0.6rem;
}
.footer>div>span{
	font-size:0.24rem;
}
</style>