<template>
<div class="code">
	<div class="code-wrap">
		<h3>请输入手机验证码</h3>
		<p>验证码已发送至手机：<span>+{{$store.state.register.userInfo.areaCodes}}  {{$store.state.register.userInfo.phonenum}}</span></p>
		<div class="input-group">
			<input type="text"/>
			<input type="text"/>
			<input type="text"/>
			<input type="text"/>
		</div>
		<div class="djs"><span>{{miao}}s后</span>重新发送验证码</div>
		<div class="no-code">没有收到验证码？</div>
	</div>
</div>
</template>

<script>
import RegLoginHead from'../../components/regsiter_login/reg_login_head'
import {buildSign} from '../../assets/script/until.js'
import qs from 'qs'
export default{
	data(){
		return {			
			miao:'',
			timer:null
		}		
	},
	created () {
		console.log(this.$store.state.register.userInfo.checkcode);
		if(this.$store.state.register.userInfo.checkcode){
			this.getidentifyingcode();
		}
	},
	components:{RegLoginHead},
	methods:{
		getidentifyingcode:function() {
			let parm={__uuid__:this.$store.state.common.uuid,__platform__:this.$store.state.common.platform,__timestamp__:new Date().getTime(),__version__:this.$store.state.common.version,action:'sendCheckCode4Register',areacode:this.$store.state.register.userInfo.areaCodes,mobileno:this.$store.state.register.userInfo.phonenum};
			parm.__sign__=buildSign(parm,this.$store.state.common.uuid);
//			this.$api.post('/Execute.do', qs.stringify(parm), r => {
//				if(r.errorCode=='0'){
//					if(r.data.checkRegister){
//					    var self = this;
//					    self.$store.commit('setcheckcode');
//					    self.data.miao=60;
//			            self.$data.timer=setInterval(getTotelNumber,1000)
//			            function getTotelNumber() {
//					       	self.$data.miao --;
//				            if(self.$data.miao===0){
//				          	   clearInterval(self.$data.timer);
//				          	   self.$store.commit('setcheckcode');
//				          	   self.$router.replace('/register/setpassword')
//					        }
//				        }
//					}
//				}else{
//					this.$message({
//			          message: r.errorMessage,
//			          type: 'error'
//			        });
//				}
//			})
		}
	}
}
</script>

<style>
	.code{
		width:100%;
	}
	.code-wrap{
		padding:0 32px;
	}
	.code-wrap>h3{
		height:22px;
		color:#263a55;
		margin:25px 0 11px 0;
		font-size:22px;
		line-height:22px;
	}
	.code-wrap>p{
		height:12px;
		line-height:12px;
		font-size:12px;
		color:#263a55;
	}
	.code-wrap>p>span{
		color:#114182;
	}
	.input-group{
		height:27px;
		display:flex;
		display:-webkit-flex;
		margin-top:85px;
	}
	.input-group>input{
		height:27px;
		line-height:27px;
		color:#263a555;
		font-size:16px;
		width:38px;
		margin-right:32px;
		border-bottom:1px solid #dedede;
	}
	.djs{
		height:10px;
		line-height:10px;
		font-size:10px;
		color:#dedede;
		margin-top:13px;
		margin-bottom:23px;
	}
	.djs>span{
		margin-right:7px;
	}
	.no-code{
		height:12px;
		line-height:12px;
		width:100%;
		text-align: center;
		color:#263a55;
		font-size:12px;
	}
</style>