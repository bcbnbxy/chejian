<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
//let platform="";
//document.addEventListener( "plusready",function(){
//			alert(plus.device.uuid);
//			var u = navigator.userAgent;
//			var isAndroid=true;
//			if(isAndroid){
//				platform="Android";
//			}else{
//				platform="iOS";
//			}		
//	}, false );
export default {
  name: 'App',
  created(){
//	this.checklogin();
		
  },
  methods:{
  	//判断用户的登录状态
  	checklogin:function(){
  		let loginInfo={};
  		if(localStorage.getItem('loginInfo')){
  			loginInfo=JSON.parse(localStorage.getItem('loginInfo'));
  			if(loginInfo.logintrue){
  				this.$router.push('/home');
  			}else{
  				this.$router.push('/');
  			}
  		}else{
  			this.$router.push('/');
  		}
  	}
  }
}
</script>

<style>
	#app{
		height:100%;
	}
</style>
