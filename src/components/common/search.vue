<template>
	<div class="search">
		<div class="searchhead">
			<el-input placeholder="搜索用户和动态" prefix-icon="el-icon-search" clearable></el-input><span class="cancel-searchhead" @click="$store.commit('toggleSearchStatus',false)">取消</span>
		</div>
	</div>
</template>

<script>
</script>

<style>
.search{
	position: absolute;
	background:#f7f7f7;
	top:0;
	left:0;
	width:100vw;
	height:100vh;
	z-index: 5;
}
.searchhead{
	height:1.32rem;
	background: url(../../assets/img/faxianimg/headbg.png) center no-repeat;
	padding:0.21rem 0.5rem;
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
	align-items: center;
	font-size:0.42rem;
}
.searchhead input{
	color:#fff;
	background: rgba(0,0,0,.2);
	border:none;
	height:0.9rem;
	line-height:0.9rem;
	font-size:0.42rem;
}
.searchhead .el-input__prefix .el-icon-search{
	position: relative;
	top:-7px;
}
.searchhead input::-webkit-input-placeholder{
	color:#fff;
}
.searchhead .el-icon-search,.searchhead .el-icon-circle-close{
	color:#fff;
	font-size:0.42rem;
}
.searchhead .cancel-searchhead{
	flex: 1 0 1.43rem;
	text-align: right;
}
</style>