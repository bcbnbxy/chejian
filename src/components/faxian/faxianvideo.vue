<template>
	<div class="video">
		<div class="video-wrap">
			<p>我发布了新的视频，欢迎分享、评论欢迎转发评论、风驰电池是看奥迪、玛莎拉蒂得见。</p>
			<img width="50" height="50" src="../../assets/img/play.png" class="playbtn"/>
			<div class="video-wrap-bottom">
				<p><i class="iconfont icon-bofangshu"></i><span>38万</span></p>
				<p>关注</p>
			</div>
		</div>
		<div class="video-title">
			<div class="video-title-left">
				<img src="../../assets/img/Avatarsample.png" width="33" height="33"/><span>用户1234</span>				
			</div>
			<div class="video-title-right">
				<p><i class="iconfont icon-dianzan-yuanshijituantubiao"></i><span>3565</span></p>
				<p><i class="iconfont icon-pinglun"></i><span>3565</span></p>
				<p><i class="iconfont icon-fenxiang11"></i><span>3565</span></p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
.video-wrap{
	width:100%;
	height:210px;
	background: url(../../assets/img/video.png) center no-repeat;
	background-size:100% 210px;
	padding:3px 12px;
	position: relative;
}
.video-wrap>p{
	font-size:14px;
	color:#fff;
	line-height:22px;
}
.video-wrap-bottom{
	position: absolute;
	left:0;
	bottom:11px;
	width:100%;
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
	align-items: flex-end;
	padding:0 12px;
}
.video-wrap-bottom>p:nth-child(2){
	padding:5px 15px;
	background:#263a55;
	color:#fff;
	border-radius: 4px;
	font-size:9px;
}
.video-wrap-bottom>p:nth-child(1){
	font-size:12px;
	color:#fff;
}
.video-wrap-bottom>p:nth-child(1) i{
	vertical-align: middle;
	font-size:16px;
	margin-right:2px;
}
.playbtn{
	position: absolute;
	left:0;
	top:0;
	bottom:0;
	right:0;
	margin:auto;
}
.video-title{
	width:100%;
	height:50px;
	background: #fff;
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
	align-items: center;
	padding:0 12px;
}
.video-title-left{
	flex: 1 0 auto;
}
.video-title-left>img{
	vertical-align: middle;
	font-size:11px;
	margin-right:3px;
	color:#333;
}
.video-title-right{
	flex: 1 1 auto;
	display: flex;
	display: -webkit-flex;
	justify-content: flex-end;
	font-size:8px;
}
.video-title-right p{
	margin-left:18px;
	color:#ababab;
}
.video-title-right p i{
	font-size:20px;
	vertical-align: middle;
	margin-right:3px;
}
</style>