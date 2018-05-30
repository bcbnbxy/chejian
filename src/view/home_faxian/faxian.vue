<template>
<div class="faxian-wrap">
	<header class="home-head">
		<HomeHead></HomeHead>
	</header>
	<div class="faxianlist">
		<Dynamicslist></Dynamicslist>
	</div>
</div>
</template>
<script>
import Dynamicslist from '@/components/search/dynamics'
import HomeHead from '../home/home_head'
export default{
	components:{Dynamicslist,HomeHead},
}
</script>

<style>
.faxian-wrap{
	height:100%;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
}
.faxianlist{
	flex:1;
	overflow: auto;
}
.home-head{
	height:1.32rem;
	background: url(../../assets/img/faxianimg/headbg.png) center no-repeat;
}
</style>