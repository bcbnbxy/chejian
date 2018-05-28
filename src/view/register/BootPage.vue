<template>
	<div class="bootpage">
		<div class="bootpage-wrap">
			<RegLoginHead></RegLoginHead>
			<div class="bootpage-container">
				<p>HI,欢迎使用车间</p>
				<div class="bootpage-btngroup">
					<router-link tag="mt-button" to="/register">注册</router-link>
					<p>或</p>
					<router-link tag="mt-button"  to="/login">登陆</router-link>
				</div>				
			</div>
		</div>
	</div>
</template>
<script>
import RegLoginHead from'../../components/regsiter_login/reg_login_head'
export default{
	components:{RegLoginHead},
	methods:{
		goregister:function(){
			this.$router.push({path:'/register'});
		}
	}
}
</script>
<style>
.bootpage{
	height:100%;
}
.bootpage-wrap{
	height:100%;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	width:100%;
	background: #fff;
}
.bootpage-head{
	width:100%;
	height:44px;
	text-align: center;
	font-size:16px;
	padding:0 12px;
	color:#263a55;
	line-height:44px;
	font-weight: bold;
}
.bootpage-container{
	height:100%;
	flex:1;
}
.bootpage-container>p{
	height:16px;
	font-size:16px;
	line-height:16px;
	color:#263a55;
	text-align: center;
	margin-top:108px;
}
.bootpage-btngroup{
	padding:0 32px;
	margin-top:91px;
}
.bootpage-btngroup >p{
	height:40px;
	text-align: center;
	font-size:16px;
	line-height:40px;
}
</style>