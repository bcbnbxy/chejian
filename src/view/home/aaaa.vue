<template>
	<div class="aaaa" :style="{'-webkit-overflow-scrolling': scrollMode}">
	    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
	      <ul class="list">
	
	          <li v-for="(item, index) in proCopyright">
	            <div>{{item}}</div>
	          </li>
	
	      </ul>
	
	    </mt-loadmore>
	</div>
</template>

<script>
export default{
	data() {
       return {
       		pageNo:1,
      		pageSize:5,
	       	autoFill:false,
	        bottomStatus: '',
	        bottomPullText: '上拉加载更多...',
	        bottomDropText: '释放更新...',
	        proCopyright:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
	        loading:false,
	        allLoaded: false,
	        totalpage:0,
	        scrollMode:'auto' //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
       }
    },
    methods:{
 		loadBottom:function(){
 			// 上拉加载
     		 this.more();// 上拉触发的分页查询
      		 this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
 		},
 		loadPageList:function (){
	      // 查询数据
	        this.totalpage = Math.ceil(this.proCopyright.length/this.pageSize);
	        if(this.totalpage == 1){
	          this.allLoaded = true;
	        }
	        this.$nextTick(function () {
	          // 是否还有下一页，加个方法判断，没有下一页要禁止上拉
	          this.scrollMode = "touch";
	          this.isHaveMore();
	        });
    	},
    	more:function (){
		      // 分页查询
		      if(this.totalpage == 1){
		        this.pageNo = 1;
		        this.allLoaded = true;
		      }else{
		        this.pageNo = parseInt(this.pageNo) + 1;
		        this.allLoaded = false;
		      }	
		      for(var i=0;i<)
	    },
	    isHaveMore:function(){
	      // 是否还有下一页，如果没有就禁止上拉刷新
	      //this.allLoaded = false; //true是禁止上拉加载
	      if(this.pageNo == this.totalpage){
	        this.allLoaded = true;
	      }
	    }
    }
}
</script>

<style>
.aaaa{
	background:tan;
}
li{
      padding:30px 0;
      background-color: #ccc;
      margin-bottom:20px;
    }
</style>