<template>
	<div class="head">
		<div class="faxianhead">
			<p @click="$store.commit('toggleSearchStatus',true)"><i class="iconfont icon-sousuo"></i></p>
			<p><span style="margin-right:16px;">最新</span><span>关注</span></p>
			<p @click="showpictextvideo"><i class="iconfont icon-zhaoxiangji"></i></p>
			<div class="pic-text-video" v-show="$store.state.faxian.pic_text_video">
				<p>文图</p>
				<p>视频</p>
			</div>
			<Search v-show="$store.state.common.searchstatus"></Search>
		</div>
	</div>
</template>
<script>
	import Search from '../../components/common/search'
export default {
	components:{Search},
	methods:{
		showpictextvideo:function(){
			this.$store.commit('changepopupmean');
			this.$store.commit('changepictextvideo');
		}
	}
}
</script>

<style>
.head{
	height:100%;
}
.head .faxianhead{
	height:100%;
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
	padding:0 0.48rem;
	align-items: center;
	color:#fff;
	font-size:0.48rem;
	position: relative;
}
.head p i{
	font-size:0.66rem;
}
.head p span{
	padding:0 0.36rem;
	display: inline-block;
	height:1.32rem;
	line-height:1.32rem;	
}
.pic-text-video{
	width:6rem;
	background:#fff;
	position: absolute;
	right:0.48rem;
	top:100%;
	z-index: 101;
	border-radius: 5px;
}
.pic-text-video p{
	border-bottom:1px solid #dcdcdc;
	color:#666;
	height:1.6rem;
	line-height:1.6rem;
	text-align: center;
	font-size:0.42rem;
}
.pic-text-video p:last-child{
	border-bottom:none;
}
</style>