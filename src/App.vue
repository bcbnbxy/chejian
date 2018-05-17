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
  name: 'App'
}
</script>

<style>
	#app{
		height:100%;
	}
</style>
