<template>
	<div class="SetPassword-wrap">
		<h3 class="SetPassword-title">请设置新密码</h3>
		<div class="SetPassword-set">
			<label>设置新密码</label>
			<el-input  type="password" placeholder="6~20位数字、字母或字符"  clearable v-model="SetPassword"></el-input>
		</div>
		<div class="SetPassword-sure">
			<label>确认新密码</label>
			<el-input  type="password" placeholder="6~20位数字、字母或字符"  clearable v-model="SurePassword"></el-input>
		</div>
		<!--<router-link tag="el-button" class="el-button--info" to="/login/restsuccess">确认</router-link>-->
		<el-button type="info" :disabled="isdisabled" @click="resetPassword">确认</el-button>
	</div>
</template>

<script>
import {regExs} from '../../assets/script/until.js'
let lodash = require('lodash')
export default{
	data () {
		return {
			setpaswordtrue:false,
			setpasword:'',
			confirmpaswordtrue:false,
			confirmpasword:''
		}
	},
	computed:{
		SetPassword:{
			set:lodash.debounce(function(value){
				if(value.trim().length<1){
					this.$message({
			          message: '密码不能为空',
			          type: 'error'
			      });
			      this.setpaswordtrue=false;
				}else if(!regExs.password.test(value)){
					this.$message({
			          message: '密码格式不正确!',
			          type: 'error'
			      });
			      this.setpaswordtrue=false;
				}else if(regExs.password.test(value)){
					this.$message({
			          message: '密码正确!',
			          type: 'success'
			      });
			      this.setpaswordtrue=true;
			      this.setpasword=value;
				}
			},1000),
			get:function(){
				return this.setpasword;
			}
		},
		SurePassword:{
			set:lodash.debounce(function(value){
				if(value.trim().length<1){
					this.$message({
			          message: '密码不能为空',
			          type: 'error'
			      });
			      this.confirmpaswordtrue=false;
				}else if(!regExs.password.test(value)){
					this.$message({
			          message: '密码格式不正确!',
			          type: 'error'
			      });
			      this.confirmpaswordtrue=false;
				}else if(regExs.password.test(value)){
					this.$message({
			          message: '密码正确!',
			          type: 'success'
			      });
			      this.confirmpaswordtrue=true;
			      this.confirmpasword=value;
				}
			},1000),
			get:function(){
				return this.confirmpasword;
			}
		},
		isdisabled:function(){
			if(this.confirmpaswordtrue&&this.setpaswordtrue){
				if(this.confirmpasword==this.setpasword){
					return false;
				}else{
					this.$message({
				          message: '两次密码输入不一致',
				          type: 'error'
				      });
					return true;
				}
			}else{
				return true;
			}
		}
	},
	methods:{
		resetPassword:function(){
			let parm=this.$store.state.login.restpassword;
			parm.password=this.confirmpasword;
			parm.action='resetPassword';
			var that=this;
			this.$api("Execute.do",parm).then(function(r){
				if(r.errorCode==0){
					that.$router.push('/login/restsuccess');
				}
			})
		}
	}
}
</script>

<style>
.SetPassword-wrap{
	height:100%;		
	padding:0 32px;
	padding-top:70px;
}
.SetPassword-title{
	height:22px;
	color:#263a55;
	margin:0 0 56px 0;
	font-size:22px;
	line-height:22px;
	font-weight: 500;
}
.SetPassword-set{
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	border-bottom:1px solid #dedede;
}
.SetPassword-set label{
	height:54px;
	font-size:12px;
	line-height:54px;
	color:#263a55;
	font-weight: 600;
}
.SetPassword-set input{
	height:30px;
	font-size:12px;
	line-height:30px;
	color:#263a55;
	border:none;
}
.SetPassword-sure{
	padding-top:33px;
	padding-bottom:36px;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;	
}
.SetPassword-sure label{
	height:12px;
	font-size:12px;
	line-height:12px;
	color:#263a55;
	font-weight: 600;
}
.SetPassword-sure input{
	margin-top:16px;
	height:30px;
	font-size:12px;
	line-height:30px;
	color:#263a55;
	border:none;
	border-bottom:1px solid #dedede;
	border-radius: 0;
}
</style>