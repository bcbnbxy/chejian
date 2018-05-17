<template>
	<div class="home-wrap">
		<header class="home-head">
			<HomeHead></HomeHead>
		</header>
		<div class="home-main">
			<router-view></router-view>
		</div>
		<footer class="footer">
			<router-link to="/" tag="div" ><i class="iconfont icon-shouye"></i><span>首页</span></router-link>
			<router-link to="/faxian" tag="div"><i class="iconfont icon-faxian"></i><span>发现</span></router-link>
			<div><i class="iconfont icon-pengyou"></i><span>车友</span></div>
			<div><i class="iconfont icon-weibiaoti-_huabanfuben"></i><span>我的</span></div>
		</footer>
	</div>
</template>
<script>
import HomeHead from './home_head'
export default{
	components:{HomeHead},
}
</script>

<style>
.home-wrap{
	height:100%;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	background: #f4f4f4;
}
.home-head{
	height:44px;
}
.home-main{
	flex:1;
	overflow: auto;
}
::-webkit-scrollbar{
	display: none;/*隐藏滚轮*/	
}
.footer{
	height:50px;
	background: #fff;
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
	padding:0 35px;
	padding-top:6px;
	border-top:1px solid #dedede;
}
.footer>div{
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	align-items: center;
	font-size:12px;
	color:#a9a9a9;
}
.footer>div>i{
	font-size:20px;
}
</style>