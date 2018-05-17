<template>
<div class="faxian-wrap">
	<div class="faxian-search-box">
		<div class="faxian-search">
			<i class="iconfont icon-sousuo"></i>
			<input type="text" placeholder="搜索视频、图片">
		</div>
	</div>
	<div class="dynamicslist">
		<Video></Video>
		<Ninepicture></Ninepicture>
		<Fourpicture></Fourpicture>
	</div>
</div>
</template>

<script>
import Video from '../../components/faxian/faxianvideo'
import Ninepicture from '../../components/faxian/ninepicture'
import Fourpicture from '../../components/faxian/fourpicture'
export default{
	components:{Video,Ninepicture,Fourpicture}
}

</script>

<style>
.faxian-wrap{
	height:100%;
}
.faxian-search-box{
	padding:10px 16px;
}
.faxian-search{
		width:100%;
		height:30px;
		border-radius: 5px;
		background:#ececec;
		padding-left:84px;
		display: flex;
		display:-webkit-flex;
		justify-content: flex-start;
		align-items: center;
		overflow: hidden;		
	}
	.faxian-search>i{
		font-size:18px;
		color:#9a9a9a;
		margin-right:20px;
	}
	.faxian-search>input{
		flex:1;
		height:100%;
		background: none;
		color:#999;
		font-size:14px;
	}
	input::-webkit-input-placeholder{
	    color: #999;
	}
</style>