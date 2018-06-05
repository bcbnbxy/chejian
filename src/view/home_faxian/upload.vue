<template>
	<div class="upload-wrap">
		<div class="upload-head">
			<span>取消</span>
			<span>发布</span>
		</div>
		<div class="upload-container">
			<div class="upload-container-top">
				<textarea placeholder="文字不能超过500个"></textarea>
			</div>
			<div class="upload-container-bottom">
				<div class="upload-button">
					<p></p>
					<input type="file" accept="image/gif, image/jpeg" multiple="multiple"/>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
</script>

<style>
.upload-wrap{
	width:100%;
	height:100%;
	display: flex;
	background: #f7f7f7;
	display: -webkit-flex;
	flex-direction: column;
}
.upload-head{
	height:1.32rem;
	padding:0 0.5rem;
	background:url(../../assets/img/faxianimg/headbg.png) center repeat;
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
	align-items: center;
	font-size:0.44rem;
	color:#fff;
}
.upload-container{
	width:100%;
	background: #fff;
}
.upload-container-top{
	height:4rem;
	padding:0 0.5rem;
}
.upload-container-top textarea{
	width:100%;
	height:100%;
	font-size:0.36rem;
	color:#333;
	line-height:0.8rem;
}
.upload-container-bottom{
	padding:0 0.5rem 0.5rem 0.5rem;
}
.upload-button{
	width:3.48rem;
	height:3.48rem;
	position: relative;
}
.upload-button p{
	position: absolute;
	top:0;
	left:0;
	width:3.48rem;
	height:3.48rem;
	background: url(../../assets/img/faxianimg/addfile.png) center repeat;
	background-size:3.48rem 3.48rem;
}
.upload-button input{
	position: absolute;
	top:0;
	left:0;
	z-index: 10;
	width:3.48rem;
	height:3.48rem;
	opacity: 0;
	filter:Alpha(opacity=0);	
}
</style>