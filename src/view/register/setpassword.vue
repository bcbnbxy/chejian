<template>
<div class="setpassword">
	<div class="setpassword-title">请设置密码</div>
	<div class="setpassword-set">
		<label>设置密码</label>
		<el-input type="password"  placeholder="6~20位数字、字母或字符" v-model="password" clearable></el-input>
	</div>
	<div class="setpassword-sure">
		<label>确认密码</label>
		<el-input type="password" placeholder="请再次输入密码"  v-model="passwordsure" clearable></el-input>
	</div>
	<el-button  type="info"  style="margin-top:35px;" :disabled="isdisabled" @click="gocode">下一步</el-button>
</div>
</template>

<script>
import {regExs} from '../../assets/script/until.js'
let lodash = require('lodash')
	export default{
		data () {
			return {
				password:'',
				passwordsure:'',
				isdisabled:true
			}
		},
		created (){
			this.debouncedSetpassword = lodash.debounce(this.setpassword, 500)
			this.debouncedSurpassword = lodash.debounce(this.surpassword, 500)
		},
		methods:{
			setpassword:function(){
				if(this.$data.password.trim().length<1){
					this.$message({
			          message: '密码不能为空',
			          type: 'error'
			      });
			      this.$data.isdisabled=true;
			   }else if(!regExs.password.test(this.$data.password)){
			   		this.$message({
			           message: '密码格式不正确',
			           type: 'error'
			       });
			       this.$data.isdisabled=true;
			   }else if(this.$data.passwordsure!==this.$data.password){
			    	this.$data.isdisabled=true;
			    }else if(this.$data.passwordsure===this.$data.password){
			    	this.$data.isdisabled=false;
			    	this.$store.commit('getpassword',{"password":this.$data.password,"surepassword":this.$data.passwordsure});
			    }
			},
			surpassword:function(){
				if(this.$data.passwordsure.trim().length<1){
					this.$message({
			          message: '请设置密码',
			          type: 'error'
			      });
			      this.$data.isdisabled=true;
			   }else if(!regExs.password.test(this.$data.passwordsure)){
			   		this.$message({
			           message: '密码格式不正确',
			           type: 'error'
			       });
			       this.$data.isdisabled=true;
			    }else if(this.$data.passwordsure!==this.$data.password){
			    	this.$message({
			           message: '两次密码不一致',
			           type: 'error'
			       });
			    	this.$data.isdisabled=true;
			    }else if(this.$data.passwordsure===this.$data.password){
			    	this.$data.isdisabled=false;
			    	this.$store.commit('getpassword',{"password":this.$data.password,"surepassword":this.$data.passwordsure});
			    }					
			},
			gocode:function(){
				this.$router.push('/register/code')
			}
		},
		watch:{
			'password':function(){
				this.debouncedSetpassword();
			},
			'passwordsure':function(){
				this.debouncedSurpassword();
			}
		}
	}
</script>

<style>
.setpassword{
	height:100%;		
	padding:0 32px;
	padding-top:67px;
}
.setpassword-title{
	font-size:22px;
	color:#263a55;
	height:22px;
	line-height:22px;
	font-weight: 600;
	margin-bottom:57px;
}
.setpassword-set,.setpassword-sure{
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
}
.setpassword-sure{
	margin-top:33px;
}
.setpassword-set label,.setpassword-sure label{
	height:26px;
	font-size:12px;
	color:#263a55;
}
.el-input__inner{
	border:none;
	border-bottom:1px solid #dedede;
	height:31px;
	line-height:31px;
	font-size:12px;
	color:#263a55;
	border-radius: 0;
}
</style>