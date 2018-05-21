<template>
<div class="code">
	<div class="code-wrap">
		<h3>请输入手机验证码</h3>
		<p>验证码已发送至手机：<span>+{{$store.state.register.userInfo.areaCodes}}  {{$store.state.register.userInfo.phonenum}}</span></p>
		<div class="security-code-wrap">
			 <label for="code" style="width:100%;">
				  <ul class="security-code-container">
					  <li class="field-wrap" v-for="(item, index) in number" :key="index">
					      {{value[index]}}
					  </li>
				  </ul>
			 </label>
		     <input ref="input" class="input-code" @keyup="handleInput($event)" v-model="value"
		   id="code" name="code" type="tel" :maxlength="number"
		   autocorrect="off" autocomplete="off" autocapitalize="off">
		 </div>
		<div class="djs"><span>{{$store.state.register.codetime}}s后</span>重新发送验证码</div>
		<div class="no-code">没有收到验证码？</div>
	</div>
</div>
</template>

<script>
import RegLoginHead from'../../components/regsiter_login/reg_login_head'
import {buildSign} from '../../assets/script/until.js'
import qs from 'qs'
export default{
	props: {
	    number: {
		   type: Number,
		   default: 4
		},
		placeholder: {
		   type: String,
		   default: ''
		}
    },
	data(){
		return {			
			timer:null,
			value: ''
		}		
	},
	created () {
		if(this.$store.state.register.checkcode){
			this.codedjs();
		}
	},
	components:{RegLoginHead},
	methods:{
		codedjs:function() {
	    	var self = this;
	    	this.sendcode();
		    self.$store.commit('setcheckcode');
	        self.$data.timer=setInterval(getTotelNumber,1000)
	        function getTotelNumber() {
		       	self.$store.commit('setcodetime');
	            if(self.$store.state.register.codetime==0){
	          	   clearInterval(self.$data.timer);
	          	   self.$store.commit('setcheckcode');
		        }
	        }
		},
		sendcode:function(){
//			let parm={__uuid__:this.$store.state.common.uuid,__platform__:this.$store.state.common.platform,__timestamp__:new Date().getTime(),__version__:this.$store.state.common.version,action:'sendCheckCode4Register',areacode:this.$store.state.register.userInfo.areaCodes,mobileno:this.$store.state.register.userInfo.phonenum};
//			parm.__sign__=buildSign(parm,this.$store.state.common.uuid);
//          this.$api.post('/Execute.do', qs.stringify(parm), r => {});
		},
		hideKeyboard() {
		  // 输入完成隐藏键盘
		  document.activeElement.blur() // ios隐藏键盘
		  this.$refs.input.blur() // android隐藏键盘
		  this.$store.commit('getcode',this.value)
		  var that=this;
		  setTimeout(function(){that.$router.push('/register/choosecity')},2000)
		},
		handleInput(e) {
		  this.$refs.input.value = this.value
		  if (this.value.length >= this.number) {
		   this.hideKeyboard()
		  }
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
 .security-code-wrap{
	height:27px;
	display:flex;
	display:-webkit-flex;
	margin-top:80px;
	position: relative;
	overflow: hidden;
}
.security-code-container {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between; 
    width:100%;
    height:27px;
 }
.security-code-container .field-wrap {
	  list-style: none;
	  display: block;
	  width: 10%;
	  height: 27px;
	  line-height: 27px;
	  font-size: 16px;
	  border-bottom:1px solid #dedede;
	  color: #263a55; 
	  text-align: center; 
 }
.security-code-container  .field-wrap .char-field {
  		font-style: normal;
}
.input-code {
 position: absolute;
 left: -9999px;
 top: -99999px;
 width: 0;
 height: 0;
 opacity: 0;
 overflow: visible;
 z-index: -1;
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