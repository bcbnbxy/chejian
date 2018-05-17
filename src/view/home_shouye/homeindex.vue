<template>
	<div class="homeindex-wrap">
		<div class="homeindex-wrap-top">
			<div class="homeindex-grade">
				<div class="homeindex-avatar">
					<img width="26" height="26" src="../../assets/img/avatar.png" />
					<span>邓鹏</span>
				</div>
				<div class="homeindex-ranking">
					<p><b>15482名</b><span>当前排名为</span></p>
					<p><b>999999</b><span>车辆安全系数</span></p>
					<p><i class="iconfont icon-arrow-right-copy-copy-copy"></i></p>
				</div>
				<div class="homeindex-mycar">
					当前爱车状态 <span>较差</span>   <span>2</span> 处故障 <span>10</span> 处警告
				</div>
			</div>
			<div class="homeindex-mygarage">
				<h3>我的车库</h3>
				<div class="homeindex-mycarlist">
					<p><img src="../../assets/img/falali.png" width="25" height="30"/></p>
					<p><img src="../../assets/img/falali.png" width="25" height="30"/></p>
					<p><img src="../../assets/img/falali.png" width="25" height="30"/></p>
					<p></p>
				</div>
			</div>
		</div>
		<div class="homeindex-VehicleServices">
			<div class="homeindex-VehicleServices-title">
				<span>车辆服务</span>
				<i class="iconfont icon-fuwu"></i>
			</div>
			<div class="VehicleServices-list">
				<dl>					
					<dt><i class="iconfont icon-icon-test"></i></dt>
					<dd>配件商城</dd>
				</dl>
				<dl>					
					<dt><i class="iconfont icon-jiuyuan"></i></dt>
					<dd>车辆救援</dd>
				</dl>
				<dl>					
					<dt><i class="iconfont icon-fujin"></i></dt>
					<dd>附近车友</dd>
				</dl>
				<dl>					
					<dt><i class="iconfont icon-news"></i></dt>
					<dd>车友动态</dd>
				</dl>
				<dl>					
					<dt><i class="iconfont icon-cheliangweixiubaoyang"></i></dt>
					<dd>附近维修</dd>
				</dl>
				<dl>					
					<dt><i class="iconfont icon-cheliangweixiubaoyang"></i></dt>
					<dd>附近维修</dd>
				</dl>
				<dl>					
					<dt><i class="iconfont icon-cheliangweixiubaoyang"></i></dt>
					<dd>附近维修</dd>
				</dl>
				<dl>					
					<dt><i class="iconfont icon-cheliangweixiubaoyang"></i></dt>
					<dd>附近维修</dd>
				</dl>
			</div>
		</div>
		<div class="homeindex-MyCarfriend">
			<dl>
				<dt><p>我的车友 121</p><p>好友车辆评分</p></dt>
				<dd><p><img src="../../assets/img/Avatarsample.png" width="30" height="30"/><span>用户123</span></p><p>999999</p></dd>
				<dd><p><img src="../../assets/img/Avatarsample.png" width="30" height="30"/><span>小车abc</span></p><p>123456</p></dd>
				<dd><p><img src="../../assets/img/Avatarsample.png" width="30" height="30"/><span>用户456</span></p><p>987654</p></dd>
				<dd><p><img src="../../assets/img/Avatarsample.png" width="30" height="30"/><span>用户123</span></p><p>641349</p></dd>
				<dd><p><img src="../../assets/img/Avatarsample.png" width="30" height="30"/><span>小车abc</span></p><p>867481</p></dd>
			</dl>
		</div>
	</div>
</template>

<script>
</script>

<style>
.homeindex-wrap{
	height:100%;
}
.homeindex-wrap-top{
	padding:2px 1px 8px 1px;
}
.homeindex-grade{
	height:139px;
	background:url('../../assets/img/pingfenbg.png') center no-repeat;
	background-size:100% 139px ;
}
.homeindex-avatar{
	padding:14px 0 5px 32px;
	display: flex;
	display: -webkit-flex;
	align-items: center;
	color:#fff;
	font-size:16px;
}
.homeindex-avatar>img {
	margin-right:7px;
}
.homeindex-ranking{
	height:59px;
	background:url('../../assets/img/pingfenbg1.png') center no-repeat;
	background-size:100% 59px ;
	padding:12px 11px 9px 30px;
	color:#fff; 
	display: flex;
	display: -webkit-flex;
	align-items: flex-end;
}
.homeindex-ranking>p{
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	font-size:16px;
	margin-right:45px;
}
.homeindex-ranking>p span{
	font-size:10px;
	color:#7a8188;
}
.homeindex-ranking>p i{
	font-size:18px;
}
.homeindex-ranking>p:nth-child(2){
	flex: 1;
}
.homeindex-ranking>p:nth-child(3){
	text-align: right;
	margin-right:0;
	margin-top:-5px;
}
.homeindex-mycar{
	height:35px;
	line-height:35px;
	font-size:12px;
	color:#fff;
	padding-left:30px;
	font-weight:600 ;
}
.homeindex-mycar span{
	color:#ff0000;
	font-size:14px;
}
.homeindex-mygarage{	
	height:95px;
	background:url('../../assets/img/mygarage.png') center no-repeat;
	background-size:100% 95px ;
	margin-top:3px;
}.homeindex-mygarage>h3{
	height:35px;
	line-height:35px;
	padding-left:15px;
	font-size:16px;
	color:#fff;
}
.homeindex-mycarlist{
	height:52px;
	background:url('../../assets/img/pingfenbg1.png') center no-repeat;
	background-size:100% 52px ;
	display: flex;
	display: -webkit-flex;
	align-items: center;
	padding-left:14px;
}
.homeindex-mycarlist p{
	height:30px;
	padding:0 16px;
	border-right:1px solid #d6d6d6;
}
.homeindex-mycarlist>p:nth-last-child(1),.homeindex-mycarlist>p:nth-last-child(2){
	border-right:0;
}
.homeindex-mycarlist p:nth-last-child(1){
	width:27px;
	height:27px;
	background: url(../../assets/img/jia.png) center no-repeat;
	background-size: 27px 27px;
	margin-left:12px;
}
.homeindex-VehicleServices{
	background: #fff;
	padding:0 14px;
	padding-top:5px;
}
.homeindex-VehicleServices-title{
	height:28px;
	border-bottom:1px solid #dedede;
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
	font-size:16px;
	font-weight: 600;
	color:#263a55;
	align-items: center;
	padding:0 6px;
}
.homeindex-VehicleServices-title i{
	font-size:20px;
}
.VehicleServices-list{
	padding-top:20px;
	padding-bottom:6px;
	display: flex;
	display: -webkit-flex;
	flex-wrap: wrap;
}
.VehicleServices-list dl{
	width:25%;
	color:#333;
	margin-bottom:20px;
}
.VehicleServices-list dl dd{
	font-size:12px;	
	text-align: center;
}
.VehicleServices-list dl dt{	
	text-align: center;
	border-right:1px solid #dedede;
}
.VehicleServices-list dl dt i{
	font-size:25px;
}
.VehicleServices-list dl:nth-child(4n) dt{
	border-right:none;
}
.homeindex-MyCarfriend{
	background: #fff;
	margin-top:5px;
}
.homeindex-MyCarfriend dt{
	height:30px;
	border-bottom:1px solid #dedede;
	padding:0 35px 0;
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
	font-size:15px;
	color:#898e93;
	align-items: center;
}
.homeindex-MyCarfriend dd{
	height:43px;
	border-bottom:1px solid #dedede;
	padding:0 35px 0;
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
	font-size:12px;
	color:#333;
	align-items: center;
}
.homeindex-MyCarfriend dd p:nth-child(1) img{
	vertical-align: middle;
	margin-right:10px;
}
</style>