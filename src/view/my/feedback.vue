<template>
	<div class="feedback-wrap">
		<header>
			<span @click="$router.go(-1)"><i class="iconfont icon-fanhui"></i></span>
			<span>意见反馈</span>
			<span></span>
		</header>
		<div class="feedback-textarea">
			<textarea placeholder="请输入您的意见或者建议，我们将为您提供更好的服务" v-model="content"></textarea>
		</div>
		<!--<div class="feedback-email">
			<label>您的邮箱:</label>
			<input type="email"/>
		</div>
		<div class="feedback-email">
			<label>您的电话号码:</label>
			<input type="text"/>
		</div>-->
		<div class="submit">
			<mt-button type="default"  @click="submit">确定</mt-button>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			content:''
		}
	},
	methods:{
		submit:function(){
			if(this.content.trim().length<1){
				this.$toast({
		          message: '内容不能为空',
		          position: 'bottom',
				  duration: 1500
		      });
			}else{
				var that=this;
				this.$api('/Execute.do',{action:"sendFeedback",userseq:JSON.parse(localStorage.getItem('loginInfo')).userseq,content:this.content}).then(function(r){
					console.log(JSON.stringify(r));
					if(r.errorCode=='0'){
						that.$toast({
				          message: '你的反馈我们已经查收！',
				          position: 'bottom',
						  duration: 1500
				      });
					}else{
						that.$toast({
				          message: r.errorMessage,
				          position: 'bottom',
						  duration: 1500
				      });
					}
				})
				
			}
		}
	}
}
</script>

<style scoped>
.feedback-wrap{
	width:100%;
	height:100%;
	background: #f7f7f7;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
}
.feedback-wrap>header{
	height:1.32rem;
	padding:0 0.5rem;
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
	align-items: center;
	font-size:0.56rem;
	color:#fff;
	background-image:url(../../assets/img/faxianimg/headbg.png) ;
	background-size:cover ;
}
.feedback-textarea textarea{
	width:100%;
	height:5rem;
	padding:0 0.5rem;
	background: #fff;
	border:none;
	font-size:0.4rem;
	color:#222;
	line-height:1rem;
	margin-bottom: 0.3rem;
}
.feedback-email{
	height:1.6rem;
	background: #fff;
	padding:0 0.5rem;
	display: flex;
	display: -webkit-flex;
	align-items: center;
	font-size:0.4rem;
	color:#999;
	margin-bottom:0.3rem;
}
.feedback-email>input{
	flex: 1;
	height:100%;
	padding-left:0.5rem;
	border:none;
}
.submit{
	padding:0 0.6rem;
	padding-top:0.2rem;
}

</style>