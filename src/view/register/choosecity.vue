<template>
	<div class="choosecity">
		<div class="choosecity-title">填写基本信息</div>
		<div class="nickname">
			<label>昵称</label>
			<el-input type="text" placeholder="用户123" clearable @blur="checknickname" v-model="nickname" autofocus="true" ref="nickname"></el-input>
		</div>
		<div class="area-wrap">
			<label>所在地区</label>
			<p><span @click="choosecity">{{provincename}} {{cityname}}</span><i class="iconfont icon-arrow-right-copy-copy-copy" :class="{activei:showChose}"></i></p>
		    <section class="showChose" v-show="showChose">
		        <section class="title">
		          <h4>居住地址</h4>
		          <i class="iconfont icon-close" @click="closeAdd()"></i>
		        </section>
		        <section class="subhead">
		          <div class="area"  :class="Province?'':'active'">{{Province?Province:'请选择'}}</div>
		          <div class="area"  :class="City?'':'active'" v-show="Province">{{City?City:'请选择'}}</div>
		        </section>
		        <div class="listbox">
		        	<ul>
			          <li class="addList" v-for="(v,k) in info" @click="getProvinceId(v.pid, v.pname, k)" v-show="showProvince" :class="v.selected ? 'active' : ''">{{v.pname}}</li>
			        </ul>
			        <ul>
			        	<li class="addList" v-for="(v,k) in showCityList" @click="getCityId(v.cid, v.cname, k)" v-show="showCity" :class="v.selected ? 'active' : ''">{{v.cname}}</li>
			        </ul>
		        </div>
		    </section>
		</div>
		<el-button type="info" style="margin-top:36px;" :disabled="isdisabled" @click="aaa">进入车间</el-button>
	</div>
</template>

<script>
	import {buildSign,regExs} from '../../assets/script/until.js'
	import qs from 'qs'
	export default{
		data () {
    return {
      provincename:'',
      cityname:'',
      nickname:'',
      isdisabled:true,
      checknick:false,
      showChose: false,
      showProvince: true,
      showCity: false,
      showCityList: false,
      Province: false,
      City: false,
      // v-for循环判断是否为当前
      selected: false,
      info:[]
    }
  },
  created () {
  	this.getprovince();
  },
  methods: {
    choseAdd: function() {
      this.showChose = true;
    },
    closeAdd: function() {
      this.showChose = false;
    },
    _filter(add,name,code) {
      let result = [];
      for(let i=0;i<add.length;i++) {
        if(code == add[i].pid){
          result = add[i][name];
        }
      }
      return result;
    },
    choosecity:function(){
    	if(this.checknick){
    		this.$data.showChose = !this.$data.showChose;
    	}else{
    		return ; 
    	}
    },
    getprovince:function(){
    	let parm={__uuid__:'863064010002246',__platform__:'android',__timestamp__:new Date().getTime(),__version__:"1.0.0",action:'provinces'};
    	parm.__sign__=buildSign(parm,'863064010002246');
    	this.$api.post('/Execute.do', qs.stringify(parm), r => {
    		if(r.errorCode==='0'){
    			this.info=r.data.provinces
    		}else {
    			this.$message({
		          message: r.errorMessage,
		          type: 'error'
		        });
    		}    		
    	})
    },
    getProvinceId: function(code,input,index) {
      this.province = code;
      this.Province = input;
      this.provincename=input;
      this.cityname='';
      this.City = false;
      this.showCity=true;
      this.showCityList=this._filter(this.info,'cities',this.province)
      // 点击选择当前
      this.info.map( a => a.selected = false );
      this.info[index].selected = true;
      if(this.provincename&&this.cityname){
      	this.isdisabled=false;
      	this.showChose=false;
      }
    },
    getCityId: function(code, input, index) {
      this.city = code;
      this.City = input;
      this.cityname=input;
      // 选择当前添加active
      this.showCityList.map( a => a.selected = false );
      this.showCityList[index].selected = true;
      if(this.provincename&&this.cityname){
      	this.isdisabled=false;
      	this.showChose=false;
      }
    },
    checknickname:function(){
    	if(this.nickname.trim().length<1){
    		this.$message({
	          message: '昵称不能为空！',
	          type: 'error'
	        });
	        this.$refs.nickname.$el.children[0].focus();
    	}else if(!regExs.nickname.test(this.nickname)){
    		this.$message({
	          message: '输入的昵称格式不正确,请重新输入',
	          type: 'error'
	       });
	       this.nickname='';
	       this.$refs.nickname.$el.children[0].focus();
    	}else if(regExs.nickname.test(this.nickname)){
    		let parm={__uuid__:'863064010002246',__platform__:'android',__timestamp__:new Date().getTime(),__version__:"1.0.0",action:'checkNickname',nickname:this.nickname};
    		parm.__sign__=buildSign(parm,'863064010002246');
    		this.$api.post('/Execute.do', qs.stringify(parm), r => {
    			console.log(JSON.stringify(r));
    			if(r.errorCode==='0'){
    				if(r.data.checkNickname){
    					this.checknick=true;
    				}else{
    					this.$message({
				          message: '该昵称已经被注册,请重新输入',
				          type: 'error'
				       });
				        this.nickname='';
	       				this.$refs.nickname.$el.children[0].focus();
    				}
    			}else{
					this.$message({
				          message: r.errorMessage,
				          type: 'error'
				       });
    			}
    		})
    	}
    },
    aaa:function(){
    	alert(1111);
    }
  }
}
</script>
<style>
	.choosecity{
		flex:1;		
		height:100%;
		padding:0 32px;
		padding-top:25px;
	}
	.choosecity-title{
		height:22px;
		line-height:22px;
		font-size:22px;
		color:#263a55;
		font-weight: 600;
		margin-bottom:57px;
	}
	.nickname{
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
	}
	.nickname>label{
		height:12px;
		line-height:12px;
		font-size:12px;
		color:#263a55;
		margin-bottom:22px;
	}
	.nickname input{
		width:100%;
		height:25px;
		color:#263a55;
		font-size:12px;
		border:none;
		border-bottom: 1px solid #dedede;
		line-height:25px;
	}
	.area-wrap{
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		padding-top:10px;
		position: relative;		
	}
	.area-wrap>label{
		font-size:12px;
		color:#263a55;
		height:55px;
		line-height:55px;
	}
	.area-wrap>p{
		width:100%;
		border-bottom: 1px solid #dedede;
		font-size:14px;
		display: flex;
		display: -webkit-flex;
		height:25px;
		align-items: center;
	}
	.area-wrap>p>span{
		height:25px;
		flex:1;
		text-align: center;
	}
	.citypicker{
		width:100vw;
		height:270px;
		background: tan;
		position: absolute;
		left:-32px;
		top:90px;
		padding-top:32px;
	}
	.citypicker-title{
		height:16px;
		width:100%;
		padding:0 12px;
		display: flex;
		display: -webkit-flex;
		padding-right:18px;
	}
	.citypicker-title h3{
		flex:1;
		height:16px;
		line-height:16px;
		font-size:16px;
		text-align: center;
	}
	.citypicker-title i{
		font-size:16px;
		transition: all 0.3s;
	}
	.activei{
		transform: rotate(90deg);
		transition: all 0.3s;
	}
.showChose{
  width:100vw;
  height:270px;
  position:absolute;
  top:90px;
  left:-32px;
  background:#fff;
  padding-top:32px;
  /*transform: translateX(-100%);*/
}
.title{
	height:16px;
	display: flex;
	display: -webkit-flex;
	font-size:16px;
	color:#263a55;
	padding:0 12px;
	padding-right:18px;
	align-items: center;
	margin-bottom:20px;
}
.title h4{
	 height:16px;
	 line-height:16px;
	 flex: 1;
	 text-align: center;
}
.subhead{
	height:26px;
	font-size:14px;
	display: flex;
	display: -webkit-flex;
	justify-content: space-around;
}
.area{
  height:26px;
  padding:0 20px;
  color:#263a55;
  margin-right:10px;
}
.listbox{
	display: flex;
	display: -webkit-flex;
	justify-content: space-around;
}
.addList{
  width:100%;
  font-size:14px;
  line-height:30px;
  color:#263a55;
}
/* 修改的格式 */
.showChose ul{
  padding:0 20px;
  margin:10px 10px 0 0 ;
  height: 160px;
  overflow:auto;
  display: inline-block;
}
.showChose .subhead .active{
  color:#0071B8;
  border-bottom:1px solid #0071B8;
}
.showChose ul .active{
  color:#0071B8;
 }
</style>