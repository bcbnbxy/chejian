<template>
	<div class="register-wrap">
		<RegLoginHead></RegLoginHead>
		<router-view></router-view>
	</div>	
</template>
<script>
import RegLoginHead from'../../components/regsiter_login/reg_login_head'
export default{
	components:{RegLoginHead},
}
</script>

<style>
.register-wrap{
	width:100%;
	height:100%;
	overflow: auto;	
}
</style>