<template>
	<div class="fourpicture">
		<div class="fourpicture-avatar">
			<div class="fourpicture-avatar-left"><img src="../../assets/img/Avatarsample.png" width="34" height="34"/><p><b>用户1234</b><span>26分钟前</span></p></div>
			<div class="fourpicture-avatar-right"><p>关注</p></div>
		</div>
		<div class="fourpicture-content">
			<p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试<span>全文</span></p>
			<ul class="fourpicture-box">
				<li><img src="../../assets/img/fourcar1.jpg"/></li>
				<li><img src="../../assets/img/fourcar2.jpg"/></li>
				<li><img src="../../assets/img/fourcar3.jpg"/></li>
				<li><img src="../../assets/img/fourcar4.jpg"/></li>
			</ul>
		</div>
		<div class="fourpicture-title">
			<p><i class="iconfont icon-dianzan-yuanshijituantubiao"></i><span>3565</span></p>
			<p><i class="iconfont icon-pinglun"></i><span>3565</span></p>
			<p><i class="iconfont icon-fenxiang11"></i><span>3565</span></p>
		</div>
	</div>
</template>
<script>
</script>

<style>
.fourpicture{
		background: #fff;
		padding:0 12px;
		margin-top:5px;
	}
	.fourpicture-avatar{
		padding-top:7px;
		display:flex;
		display:-webkit-flex;
		justify-content: space-between;
		align-items: center;
		height:45px;
	}
	.fourpicture-avatar-left{
		flex:1;
		display: flex;
		display: -webkit-flex;
		
	}
	.fourpicture-avatar-left img{
		margin-right:3px;
	}
	.fourpicture-avatar-left p{
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		font-size:11px;
		color:#333;
	}
	.fourpicture-avatar-left p span{
		font-size:8px;
		color:#a9a9a9;
	}
	.fourpicture-avatar-right p{
		padding:4px 16px;
		border-radius: 4px;
		background: #263a55;
		font-size:9px;
		color:#fff;
	}
	.fourpicture-content p{
		line-height:22px;
		font-size:14px;
		color:#333;
		padding-bottom:5px;
	}
	.fourpicture-content p span{
		color:#31a2fe;
	}
	.fourpicture-box{
		width:100%;
		display:flex;
		display: -webkit-flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.fourpicture-box li{
		width:50%;
		padding:2px;
		overflow: hidden;
	}
	.fourpicture-box li:nth-child(2n){
		padding-right:0;
	}
	.fourpicture-box li img{
		width:100%;
		height:100%;
		display: block;
	}
	.fourpicture-title{
		height:50px;
		display: flex;
		display: -webkit-flex;
		justify-content: flex-end;
		align-items: center;
	}
	.fourpicture-title p{
		font-size:9px;
		color:#ababab;
		margin-left:20px;
	}
	.fourpicture-title p i{
		vertical-align: middle;
		font-size:20px;
		margin-right:4px;
	}
</style>