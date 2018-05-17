<template>
	<div class="ninepicture">
		<div class="ninepicture-avatar">
			<div class="ninepicture-avatar-left"><img src="../../assets/img/Avatarsample.png" width="34" height="34"/><p><b>用户1234</b><span>26分钟前</span></p></div>
			<div class="ninepicture-avatar-right"><p>关注</p></div>
		</div>
		<div class="ninepicture-content">
			<p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试<span>全文</span></p>
			<ul class="ninepicture-box">
				<li><img src="../../assets/img/car1.jpg"/></li>
				<li><img src="../../assets/img/car2.jpg"/></li>
				<li><img src="../../assets/img/car3.jpg"/></li>
				<li><img src="../../assets/img/car1.jpg"/></li>
				<li><img src="../../assets/img/car2.jpg"/></li>
				<li><img src="../../assets/img/car3.jpg"/></li>
				<li><img src="../../assets/img/car1.jpg"/></li>
				<li><img src="../../assets/img/car2.jpg"/></li>
				<li><img src="../../assets/img/car3.jpg"/></li>
			</ul>
		</div>
		<div class="ninepicture-title">
			<p><i class="iconfont icon-dianzan-yuanshijituantubiao"></i><span>3565</span></p>
			<p><i class="iconfont icon-pinglun"></i><span>3565</span></p>
			<p><i class="iconfont icon-fenxiang11"></i><span>3565</span></p>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.ninepicture{
		background: #fff;
		padding:0 12px;
		margin-top:5px;
	}
	.ninepicture-avatar{
		padding-top:7px;
		display:flex;
		display:-webkit-flex;
		justify-content: space-between;
		align-items: center;
		height:45px;
	}
	.ninepicture-avatar-left{
		flex:1;
		display: flex;
		display: -webkit-flex;
		
	}
	.ninepicture-avatar-left img{
		margin-right:3px;
	}
	.ninepicture-avatar-left p{
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		font-size:11px;
		color:#333;
	}
	.ninepicture-avatar-left p span{
		font-size:8px;
		color:#a9a9a9;
	}
	.ninepicture-avatar-right p{
		padding:4px 16px;
		border-radius: 4px;
		background: #263a55;
		font-size:9px;
		color:#fff;
	}
	.ninepicture-content p{
		line-height:22px;
		font-size:14px;
		color:#333;
		padding-bottom:5px;
	}
	.ninepicture-content p span{
		color:#31a2fe;
	}
	.ninepicture-box{
		width:100%;
		display:flex;
		display: -webkit-flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.ninepicture-box li{
		width:33.3%;
		padding:2px;
		overflow: hidden;
	}
	.ninepicture-box li img{
		width:100%;
		height:100%;
		display: block;
	}
	.ninepicture-title{
		height:50px;
		display: flex;
		display: -webkit-flex;
		justify-content: flex-end;
		align-items: center;
	}
	.ninepicture-title p{
		font-size:9px;
		color:#ababab;
		margin-left:20px;
	}
	.ninepicture-title p i{
		vertical-align: middle;
		font-size:20px;
		margin-right:4px;
	}
</style>