<template>
	<div class="playvideo">
		<div class="playvideo-wrap">
			<div id="player">
				<i class="iconfont icon-fanhui"></i>
				<img src="../../assets/img/timg.png" />
			</div>
			<div class="playvideo-author">
				<div class="playvideo-author-left">
					<img src="../../assets/img/Avatarsample.png" width="37" height="37"/>
				</div>
				<div class="playvideo-author-right">
					<div class="authorInfo"><p>小车123</p><p><i class="iconfont icon-zan"></i><span>23万</span></p><p><i class="iconfont icon-pinglun1"></i><span>38万</span></p><p><span>加车友</span></p></div>
					<div class="authorcontent">我发布了新的视频，欢迎分享，评论上升到付款打散索多发京东东方嘉定分局。</div>
				</div>
			</div>
		</div>
		<div class="playvideo-talk">
			<div class="playvideo-talklist">
				<div class="talklist-avatar"><img src="../../assets/img/Avatarsample.png" width="37" height="37"/></div>
				<div class="talklist-content">
					<div class="talklist-author">小车123</div>
					<div class="talklist-content">我发布了新的视频，欢迎分享，评论上升到付款打散索多发京东东方嘉定分局。</div>
					<div class="talklist-note">
						<p>16-12-09</p>
						<p>26回复</p>
						<p><i class="iconfont icon-zan"></i><span>1.2K</span></p>
					</div>
				</div>
			</div>
			<div class="playvideo-talklist">
				<div class="talklist-avatar"><img src="../../assets/img/Avatarsample.png" width="37" height="37"/></div>
				<div class="talklist-content">
					<div class="talklist-author">小车123</div>
					<div class="talklist-content">我发布了新的视频，欢迎分享，评论上升到付款打散索多发京东东方嘉定分局。</div>
					<div class="talklist-note">
						<p>16-12-09</p>
						<p>26回复</p>
						<p><i class="iconfont icon-zan"></i><span>1.2K</span></p>
					</div>
				</div>
			</div>
			<div class="playvideo-talklist">
				<div class="talklist-avatar"><img src="../../assets/img/Avatarsample.png" width="37" height="37"/></div>
				<div class="talklist-content">
					<div class="talklist-author">小车123</div>
					<div class="talklist-content">我发布了新的视频，欢迎分享，评论上升到付款打散索多发京东东方嘉定分局。</div>
					<div class="talklist-note">
						<p>16-12-09</p>
						<p>26回复</p>
						<p><i class="iconfont icon-zan"></i><span>1.2K</span></p>
					</div>
				</div>
			</div>
			<div class="playvideo-talklist">
				<div class="talklist-avatar"><img src="../../assets/img/Avatarsample.png" width="37" height="37"/></div>
				<div class="talklist-content">
					<div class="talklist-author">小车123</div>
					<div class="talklist-content">我发布了新的视频，欢迎分享，评论上升到付款打散索多发京东东方嘉定分局。</div>
					<div class="talklist-note">
						<p>16-12-09</p>
						<p>26回复</p>
						<p><i class="iconfont icon-zan"></i><span>1.2K</span></p>
					</div>
				</div>
			</div>
		</div>
		<div class="playvideo-footer">
			<div class="footer2">
				<div class="footer2-top"><p><input type="text" placeholder="优先发表的评论将会展示在最前面"/><i class="iconfont icon-xiaolian" @click="toggleemoji"></i></p><span>发表</span></div>
				<div class="footer2-bottom"><i class="iconfont icon-aite"></i><i class="iconfont icon-shoucang"></i><i class="iconfont icon-zhuanfa"></i></div>
				<div class="emoji" v-show="showemoji"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				showemoji:false
			}
		},
		methods:{
			toggleemoji:function(){
				this.showemoji=!this.showemoji;
			}
		}
	}
</script>

<style>
.playvideo{
	width:100%;
	height:100%;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
}
.playvideo-wrap{
	width:100%;
	border-bottom:1px solid #dedede;
}
#player{	
	position: relative;
}
#player .icon-fanhui{
	font-size:26px;
	color:#fff;
	font-weight: 600;
	position: absolute;
	left:12px;
	top:29px;
}
#player img{
	width:100%;
	height:auto;
	display: block;
}
.playvideo-author{
	background:#fff;
	padding:0 12px;
	padding-top:8px;
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
}
.playvideo-author-left{
	margin-right:3px;
}
.playvideo-author-right{
	flex:1;
}
.authorInfo{
	height:21px;
	display: flex;
	display: -webkit-flex;
	align-items: flex-end;
	font-size:12px;
}
.authorInfo>p:nth-child(1){
	color:#576b8c;
	margin-right:25px;
	font-weight: 800;
}
.authorInfo>p:nth-child(2){
	margin-right:25px;
}
.authorInfo>p:nth-child(3) i{
	vertical-align: middle;
}
.authorInfo>p:nth-child(4) {
	flex: 1;
	height:21px;
	
}
.authorInfo>p:nth-child(4) span{
	display: block;
	padding:0 10px;
	height:21px;
	line-height:21px;
	color:#fff;
	background:#263a55;
	font-size:12px;
	float: right;
}
.authorcontent{
	padding-top:5px;
	line-height:20px;
	font-size:14px;
	color:#333;
	overflow:hidden; 
	text-overflow:ellipsis;
	display:-webkit-box; 
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2; 
}
.playvideo-talk{
	flex:1;
	overflow: auto;
	padding-bottom:10px;
}
.playvideo-talklist{
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
	padding:0 12px;
	padding-top:15px;
}
.talklist-avatar{
	margin-right:3px;
}
.talklist-author{
	height:24px;
	line-height:24px;
	font-size:14px;
	color:#576b8c;
	font-weight: bold;
}
.talklist-content{
	font-size:15px;
	color:#333;
	line-height:20px;
}
.talklist-note{
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
	padding-top:6px;
	align-items: flex-end;
	padding-right:28px;
}
.talklist-note>p:nth-child(1){
	font-size:10px;
	color:#999999;
}
.talklist-note>p:nth-child(2){
	background: #263a55;
	color:#fff;
	padding:0 2px;
	font-size:12px;
	border-radius: 2px;
}
.talklist-note>p:nth-child(3){
	color:#918f8f;
	font-size:9px;
}
.talklist-note>p:nth-child(3) i{
	font-size:13px;
	margin-right:2px;
}
.playvideo-footer{
	height:auto;
	background: #fff;
	border-top:1px solid #dedede;
	padding-top:8px;
}
.footer2-top{
	height:26px;
	margin-bottom:6px;
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
	padding:0 25px;
	align-items: center;
}
.footer2-top>p{
	flex:1;
	background: #ecebeb;
	padding-left:13px;
	border-radius: 4px;
	font-size:12px;
	margin-right:26px;
	height:26px;
	padding-right:8px;
	display: flex;
	display:-webkit-flex ;
	justify-content: space-between;
	align-items: center;
}
.footer2-top>p input{
	height:26px;
	flex:1;
	padding-right:3px;
}
.footer2-top>p i{
	color:#a9a9a9;
}
.footer2-top>span{
	font-size:14px;
	color:#bbb;
}
.footer2-bottom{
	padding:0 36px;
	display: flex;
	display: -webkit-flex;	
	color:#989696;
	margin-bottom:8px;
}
.footer2-bottom i{
	margin-right:20px;
	font-size:15px;
}
.emoji{
	width:100%;
	height:100px;
	background: tan;
}
</style>