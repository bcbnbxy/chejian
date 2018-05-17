<template>
	<div class="register-wrap">
		<RegLoginHead></RegLoginHead>
		<div class="register-container" :class="{'hideLeft':$route.path.split('/').length>2&&$route.path.indexOf('/register')!==-1}">
			<h2 class="register-title">新用户注册</h2>
			<div class="register-form">
				<p>手机号码</p>
				<div class="phonenum"><p><span>+86</span><i class="iconfont icon-jiantou-copy-copy"></i></p><input type="text" placeholder="请输入您的电话号码" v-model="newUsername"/></div>
				<el-button type="info"  style="margin:17px 0 20px 0;" @click="gocode">下一步</el-button>
				<div class="userAgreement">点击“下一步”即代表您同意《车间服务协议》</div>
			</div>
			<div class="thirdparty">
				<div class="thirdparty-title">
					<i></i>
					<span>或使用其他方式登陆</span>
					<i></i>
				</div>
				<div class="thirdparty-icon">
					<p><svg class="icon" aria-hidden="true"><use xlink:href="#icon-weixin"></use></svg><span>微信登陆</span></p>   
					<p><svg class="icon" aria-hidden="true"><use xlink:href="#icon-QQ"></use></svg><span>QQ登陆</span></p>
				</div>
			</div>
		</div>
		<div class="register-box">
			<router-view></router-view>
		</div>
	</div>	
</template>

<script>
import RegLoginHead from'../../components/regsiter_login/reg_login_head'
import {buildSign,regExs} from '../../assets/script/until.js'
import qs from 'qs'
export default{
	data(){
		return {
			newUsername:''			
		}
	},
	components:{RegLoginHead},
	methods:{
		gocode:function(){
			if(this.$data.newUsername===""){
				this.$message({
		          message: '账号不能为空!',
		          type: 'error'
		        });
			}else if(!regExs.mobile.test(this.$data.newUsername)){
				this.$message({
		          message: '手机号格式不正确!',
		          type: 'error'
		        });
			}else{	
				let parm={__uuid__:'863064010002246',__platform__:'android',__timestamp__:new Date().getTime(),__version__:"1.0.0",action:'checkRegister',areacode:'86',mobileno:this.newUsername};
				parm.__sign__=buildSign(parm,'863064010002246')
				this.$api.post('/Execute.do', qs.stringify(parm), r => {
			     if(r.errCode==='0'&&r.data.checkRegister){
			     	this.$router.push({
						name:'code',
						params:{
							phonenum:this.newUsername
						}
					})
			     }else{
			     	this.$message({
				          message: r.errMessage,
				          type: 'error'
				        });
			     }
			    })
			}		
		}
	}
}
</script>

<style>
	.register-wrap{
		height:100%;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;		
	}
	.register-container{
		/*height:100%;*/
		flex: 1;		
		width:100%;
		padding:0 32px;
		transition: 0.5s;
    	position: absolute;
    	top: 44px;
	}
	.register-box{
		flex: 1;
		width:100%;
	}
	.register-title{
		font-size:24px;
		margin-top:74px;
		color:#263a55;
		line-height:24px;
		height:24px;
	}
	.register-form{
		margin-top:77px;
	}
	.register-form>p{
		font-size:12px;
		height:12px;
		line-height:12px;
		color:#263a55;
	}
	.phonenum{
		height:38px;
		padding:10px 0;
		border-bottom:1px solid #dedede;
		margin-top:8px;
		display: flex;
		display: -webkit-flex;
	}
	.phonenum>p{
		flex:0 0 auto;
		border-right:1px solid #dedede;
		font-size:8px;
		color:#263a55;
	}
	.phonenum>p>i{
		font-size:12px;
		vertical-align: middle;
		margin:0 16px 0 11px;
	}
	.phonenum>input{
		flex:1 1 auto;
		background: none;
		padding-left:46px;
		font-size:12px;
		color:#263a55;
		font-weight: 600;
	}
	.userAgreement{
		text-align: center;
		color:#263a55;
		font-size:12px;
	}
	.el-button.is-disabled{
		background: #ccc;
		color:#fff;
	}
	.thirdparty{
		padding-top:85px;
	}
	.thirdparty-title{
		height:12px;
		font-size:12px;
		line-height:12px;
		color:#263a55;
		display: flex;
		display: -webkit-flex;
		align-items: center;
	}
	.thirdparty-title i{
		height:1px;
		background: #dedede;
		flex:1 1 auto;
	}
	.thirdparty-title span{
		margin:0 6px;
		color:#949494;
	}
	.thirdparty-icon{
		display: flex;
		display: -webkit-flex;
		justify-content: space-around;
		margin-top:28px;
	}
	.thirdparty-icon>p{
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		align-items: center;
		font-size:12px;
		color:#949494;
	}
	.thirdparty-icon>p svg{
		font-size:33px;
		margin-bottom:8px;
	}
</style>