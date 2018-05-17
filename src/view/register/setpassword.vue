<template>
<div class="setpassword">
	<div class="setpassword-title">请设置密码</div>
	<div class="setpassword-set">
		<label>设置密码</label>
		<input type="password" placeholder="6~20位数字、字母或字符" v-model="password"/>
	</div>
	<div class="setpassword-sure">
		<label>确认密码</label>
		<input type="password" placeholder="请再次输入密码" v-model="passwordsure"/>
	</div>
	<el-button  type="info"  style="margin-top:35px;" @click="gochoosearea">下一步</el-button>
</div>
</template>

<script>
import {buildSign,regExs} from '../../assets/script/until.js'
import qs from 'qs'
	export default{
		data () {
			return {
				password:'',
				passwordsure:''
			}
		},
		methods:{
			gochoosearea:function(){
				if(this.$data.password===''){
					this.$message({
			          message: '请设置密码',
			          type: 'error'
			       });
				}else if(this.$data.passwordsure===''){
					this.$message({
			          message: '请确认密码',
			          type: 'error'
			       });
				}else if(!regExs.password.test(this.$data.password)){
					console.log(regExs.password.test(this.$data.password))
					this.$message({
			          message: '输入的密码格式不正确,请重新输入',
			          type: 'error'
			       });
				}else if(this.$data.password!==this.$data.passwordsure){
					this.$message({
			          message: '两次输入的密码不一致，请重新输入',
			          type: 'error'
			       });
				}else if(this.$data.password===this.$data.passwordsure){
					this.$router.push('/register/choosecity')
					
				}
				
			}
		}
	}
</script>

<style>
.setpassword{
	padding:0 32px;
}
.setpassword-title{
	font-size:22px;
	color:#263a55;
	height:22px;
	line-height:22px;
	margin-top:25px;
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
.setpassword-set input,.setpassword-sure input{
	height:31px;
	line-height:31px;
	font-size:12px;
	color:#263a55;
	border-bottom:1px solid #dedede;
}
</style>