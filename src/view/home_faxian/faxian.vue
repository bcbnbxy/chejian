<template>
<div class="faxian-wrap">
	<div class="dynamicslist">
		<Fourpicture></Fourpicture>
		<Video></Video>
	</div>
    <div v-show="$store.state.faxian.popupmean" class="popupmean" @touchmove.prevent @click.self="popupmeanhidden">
		<dl class="popupmean-report" v-show="$store.state.faxian.report" >
			<dt>请选择举报类型</dt>
			<dd>营销广告</dd>
			<dd>整治反动或敏感话题</dd>
			<dd>淫秽色情</dd>
			<dd>恶意谩骂攻击</dd>
			<dd>垃圾内容</dd>
		</dl>
		<div class="share" v-show="$store.state.faxian.share">
			<ul>
				<li><img src="../../assets/img/faxianimg/wechat.png"><span>微信</span></li>
				<li><img src="../../assets/img/faxianimg/Friendcircle.png"><span>朋友圈</span></li>
				<li><img src="../../assets/img/faxianimg/weibo.png"><span>微博</span></li>
				<li><img src="../../assets/img/faxianimg/QQ.png"><span>QQ</span></li>
				<li><img src="../../assets/img/faxianimg/copy.png"><span>复制链接</span></li>
			</ul>
			<p @click="popupmeanhidden">取消</p>
		</div>
	</div>
</div>
</template>
<script>
import Video from '../../components/faxian/faxianvideo'
import Fourpicture from '../../components/faxian/fourpicture'
export default{
	components:{Video,Fourpicture},
	methods:{
		popupmeanhidden:function(e){
			if(this.$store.state.faxian.popupmean_more){
				this.$store.commit('changepopupmean_more');
			};
			if(this.$store.state.faxian.report){
				this.$store.commit('changereport');
			};
			if(this.$store.state.faxian.pic_text_video){
				this.$store.commit('changepictextvideo');
			};
			if(this.$store.state.faxian.share){
				this.$store.commit('changeshare');
			};
			this.$store.commit('changepopupmean');						
		}
	}
}
</script>

<style>
.faxian-wrap{
	height:100%;
}
.popupmean{
	width:100%;
	height:100%;
	background: rgba(0,0,0,.3);
	position: fixed;
	top:0;
	left:0;
	z-index: 100;
}
.popupmean-report{
	width:100%;
	position: absolute;
	bottom:0;
	background:#fff ;
}
.popupmean-report dt,.popupmean-report dd{
	height:1.46rem;
	line-height:1.46rem;
	border-bottom:1px solid #dcdcdc;
	font-size:0.46rem;
	color:#1161ff;
	text-align: center;
}
.popupmean-report dd:last-child{
	border-bottom:none;
	font-size:0.42rem;
}
.popupmean-report dd{
		color:#666;
}
.share{
	width:100%;
	position: absolute;
	bottom:0;
	background:#f7f7f7;
	z-index: 101;
	padding-bottom:2rem;
}
.share ul{
	width:100%;
	padding:0 0.7rem;
	display: flex;
	display: -webkit-flex;
	flex-wrap: wrap;
}
.share ul li{
	width:2rem;
	padding:0.6rem 0 0.22rem 0;
	margin-right:1rem;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height:3.6rem;
}
.share ul li img{
	display: block;
	width:2rem;
}
.share ul li span{
	font-size:0.38rem;
	color:#666;
}
.share ul li:nth-child(4n){
	margin-right:0;
}
.share p{
	position: absolute;
	bottom:0;
	width:100%;
	text-align: center;
	height:1.56rem;
	line-height:1.56rem;
	background: #fff;
	font-size:0.44rem;
	color:#666;
}
</style>