<template>
	<div class="fourpicture">
		<div class="fourpicture-avatar">
			<div class="fourpicture-avatar-left"><img src="../../assets/img/faxianimg/avatar.png" width="46" height="46" style="border-radius: 50%;"/><p><b>婉婉婉</b><span>5月22日</span></p></div>
			<div class="fourpicture-avatar-right"><p style="">+关注</p><p style='display:none;background: #fff;border:1px solid #ff481d;color:#ff481d;'>已关注</p></div>
		</div>
		<div class="fourpicture-content">
			<div class="video-box">
				<img src="../../assets/img/faxianimg/playbtn.png" class="playbtn"/>
				<img src="../../assets/img/faxianimg/car1.png"/>
			</div>
			<p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
		</div>
		<div class="fourpicture-title">
			<p><i class="iconfont icon-xin"></i><span>236</span></p>
			<p><i class="iconfont icon-pinglun"></i><span>365</span></p>
			<p><b style="font-size:30px;position: relative;top:-16px;" @click="more">...</b></p>
		</div>
		<ul v-show="$store.state.faxian.popupmean_more" class="popupmean-more" @touchmove.prevent>
			<li @click="showshare">转发</li>
			<li @click="popupmeanreport">举报</li>
			<li>减少推荐此类内容</li>
		</ul>
	</div>
</template>

<script>
export default{
	methods:{
		more:function(){
			this.$store.commit('changepopupmean');
			this.$store.commit('changepopupmean_more');
		},
		popupmeanreport:function(){
			this.$store.commit('changepopupmean_more');
			this.$store.commit('changereport');
		},
		showshare:function(){
			this.$store.commit('changepopupmean_more');
			this.$store.commit('changeshare');
		}
	}
}
</script>

<style>
.fourpicture{
	background: #fff;
	padding:0 0.48rem;
	margin-bottom:0.3rem;
}
.fourpicture-avatar{
	padding-top:0.81rem;
	height:2.7rem;
}
.fourpicture-avatar-left{
	float: left;
	display: flex;
	display: -webkit-flex;
}
.fourpicture-avatar-left img{
	margin-right:0.51rem;
}
.fourpicture-avatar-left p{
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	font-size:0.42rem;
	color:#222;
	font-weight: 500;
	justify-content: space-around;
}
.fourpicture-avatar-left p span{
	font-size:0.3rem;
	color:#666;
}
.fourpicture-avatar-right{
	float:right;
	padding-top:0.3rem;
}
.fourpicture-avatar-right p{
	padding:0.15rem 0.36rem;
	background: #ff481d;
	color:#fff;
	font-size:0.3rem;
	border-radius: 15px;
}
.fourpicture-content p{
	line-height:0.54rem;
	font-size:0.36rem;
	color:#333;
	margin:0;
	padding:0;
	overflow:hidden;
	text-overflow:ellipsis;
	display:-webkit-box;
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2;
}
.video-box{
	width:100%;
	margin-bottom:0.24rem;
	position: relative;
}
.video-box .playbtn{
	position: absolute;
	left:50%;
	top:50%;
	margin-left:-0.8rem;
	margin-top:-0.8rem;
	width:1.6rem;
	height:1.6rem;
	display: block;
}
.video-box img{
	width:100%;
	display: block;
}
.fourpicture-title{
	height:1.5rem;
	display: flex;
	display: -webkit-flex;
	justify-content: flex-end;
	padding-top:0.36rem;
}
.fourpicture-title p{
	font-size:0.3rem;
	color:#666;
	margin-left:0.6rem;
}
.fourpicture-title p i{
	vertical-align: middle;
	font-size:0.6rem;
	margin-right:0.12rem;
}
</style>