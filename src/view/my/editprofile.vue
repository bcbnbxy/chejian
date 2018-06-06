<template>
<div class="editprofile-wrap">
	<header>
		<span @click="$router.go(-1)"><i class="iconfont icon-fanhui"></i></span>
		<span>编辑个人资料</span>
		<span style="font-size:0.44rem;">保存</span>
	</header>
	<dl class="editprofile-list">
		<dt><p>修改头像</p><p><img :src="headerImage"/><input type="file" id="change" accept="image" @change="change"><i class="iconfont icon-arrow-right-copy-copy-copy"></i></p></dt>
		<dd><p>修改昵称</p><p><input type="tetx" value="婉婉"><i class="iconfont icon-arrow-right-copy-copy-copy"></i></p></dd>
		<dd><p>性别</p><p><input type="tetx" value="女"><i class="iconfont icon-arrow-right-copy-copy-copy"></i></p></dd>
		<dd><p>生日</p><p><input type="text" value="1994.05.02"/><i class="iconfont icon-arrow-right-copy-copy-copy"></i></p></dd>
		<dd><p>所在地</p><p><input type="text" value="广东/深圳"/><i class="iconfont icon-arrow-right-copy-copy-copy"></i></p></dd>
		<dd><label>签名</label><textarea  placeholder="个性签名..."></textarea></dd>
	</dl>
	<div class="container" v-show="panel">  
        <div>  
            <img id="image" :src="url" alt="Picture">  
        </div>  
        <div class="btn-group">
        	<button type="button" id="button" @click="commit">确定</button>  
        	<button type="button"id="cancel" @click="cancel">取消</button> 
        </div>
    </div> 
</div>
</template>

<script>
import Cropper from "cropperjs";
export default {
  data() {
    return {
      headerImage: require ("../../assets/img/faxianimg/avatar.png"),
      picValue: "",
      cropper: "",
      croppable: false,
      panel: false,
      url: "",
      imgCropperData: {
        accept: "image/gif, image/jpeg, image/png, image/jpg"
      }
    };
  },
  mounted() {
    //初始化这个裁剪框
    var self = this;
    var image = document.getElementById("image");
    this.cropper = new Cropper(image, {
      aspectRatio: 1,
      viewMode: 1,
      background: false,
      zoomable: false,
      ready: function() {
        self.croppable = true;
      }
    });
  },
  methods: {
    //取消上传
    cancel() {
        this.panel = false;
        var obj = document.getElementById('change') ; 
        obj.outerHTML=obj.outerHTML; 
    },
    //创建url路径
    getObjectURL(file) {
      var url = null;
      if (window.createObjectURL != undefined) {
        // basic
        url = window.createObjectURL(file);
      } else if (window.URL != undefined) {
        // mozilla(firefox)
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    },
    //input框change事件，获取到上传的文件
    change(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      let type = files[0].type; //文件的类型，判断是否是图片
      let size = files[0].size; //文件的大小，判断图片的大小
      if (this.imgCropperData.accept.indexOf(type) == -1) {
        alert("请选择我们支持的图片格式！");
        return false;
      }
      if (size > 5242880) {
        alert("请选择5M以内的图片！");
        return false;
      }
      this.picValue = files[0];
      this.url = this.getObjectURL(this.picValue);
      //每次替换图片要重新得到新的url
      if (this.cropper) {
        this.cropper.replace(this.url);
      }
      this.panel = true;
    },
    //确定提交
    commit() {
      this.panel = false;
      var croppedCanvas;
      var roundedCanvas;
      if (!this.croppable) {
        return;
      }
      // Crop
      croppedCanvas = this.cropper.getCroppedCanvas();
      // Round
      roundedCanvas = this.getRoundedCanvas(croppedCanvas);
      this.headerImage = roundedCanvas.toDataURL();
      //上传图片
      this.postImg(this.headerImage);
    },
    //canvas画图
    getRoundedCanvas(sourceCanvas) {
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");
      var width = sourceCanvas.width;
      var height = sourceCanvas.height;
      canvas.width = width;
      canvas.height = height;
      context.imageSmoothingEnabled = true;
      context.drawImage(sourceCanvas, 0, 0, width, height);
      context.globalCompositeOperation = "destination-in";
      context.beginPath();
      context.arc(
        width / 2,
        height / 2,
        Math.min(width, height) / 2,
        0,
        2 * Math.PI,
        true
      );
      context.fill();
      return canvas;
    },
    //提交上传函数
    postImg(dataUrl) {
    	 var base64 = dataUrl.split(',')[1];
    	 var fileType = dataUrl.split(';')[0].split(':')[1];
    	 var blob = this.toBlob(base64,fileType);
    	 var reader = new FileReader();
	    reader.readAsArrayBuffer(blob);
	    reader.onload = function (event) {	    
	        // 配置
	        var client = new OSS.Wrapper({
	            region: 'headphoto',
	            accessKeyId: 'LTAI1Ej1pfnpLaDH',
	            accessKeySecret: 'WQbS0g4AdDKVCr5T4m4nvUSdo35AVT',
	            bucket: 'chd-app.oss-cn-shenzhen'
	        });
        var date = new Date();
        var time = ''+date.getFullYear()+(date.getMonth()+1)+date.getDate();
        var storeAs = 'Uploads/file/'+time+'/'+date.getTime()+'.'+blob.type.split('/')[1];        
        // arrayBuffer转Buffer
        var buffer = new OSS.Buffer(event.target.result);
        client.put(storeAs, buffer).then(function(result){
            console.log(result)
        })
//  	var storeAs = 'upload-file';
//   	const client = new OSS.Wrapper({
//	        region:'chd-app.oss-cn-shenzhen.aliyuncs.com',
//	        accessKeyId: 'LTAI1Ej1pfnpLaDH',
//	        accessKeySecret: 'WQbS0g4AdDKVCr5T4m4nvUSdo35AVT',
//	        bucket: 'headphoto'
//	    })
//   	client.multipartUpload(storeAs, blob).then(function (result) {
//          console.log(result);
//        }).catch(function (err) {
//          console.log(err);
//        });
		}
    },
    toBlob(urlData,fileType){
        var bytes=window.atob(urlData),
            n=bytes.length,
            u8arr=new Uint8Array(n);
        while(n--){
            u8arr[n]=bytes.charCodeAt(n);
        }
        return new Blob([u8arr],{type:fileType});
    }
  }
};
</script>

<style>
.editprofile-wrap{
	width:100%;
	height:100%;
	background: #f7f7f7;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;	
}
.editprofile-wrap>header{
	height:1.32rem;
	padding:0 0.5rem;
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
	align-items: center;
	font-size:0.56rem;
	color:#fff;
	background-image:url(../../assets/img/faxianimg/headbg.png) ;
	background-size:cover ;
}
.editprofile-list{
	background: #fff;
}
.editprofile-list dt{
	height:2.4rem;
	display:flex;
	display: -webkit-flex;
	justify-content: space-between;
	align-items: center;
	font-size:0.44rem;
	color:#222;
	border-bottom:1px solid #ddd;
	padding:0 0.5rem;
	
}
.editprofile-list dt p:last-child{
	position: relative;
}
.editprofile-list dt p:last-child input{
	position: absolute;
	left:0;
	right:0;
	z-index: 10;
	width:100%;
	height:100%;
	opacity: 0;
	filter:Aplpha(opacity=0);
}
.editprofile-list dd p:last-child input,.editprofile-list dd p:last-child textarea{
	flex:1;
	text-align: right;
}
.editprofile-list dt img{
	width:1.4rem;
	vertical-align: middle;
}
.editprofile-list i{
	color:#999;
	margin-left:0.5rem;
	font-size:0.6rem;
}
.editprofile-list dd{
	height:1.6rem;
	display:flex;
	display: -webkit-flex;
	align-items: center;
	font-size:0.44rem;
	color:#222;
	border-bottom:1px solid #ddd;
	padding:0 0.5rem;
}
.editprofile-list dd p:last-child{
	flex:1;
	text-align: right;
}
.editprofile-list dd:last-child{
	border-bottom:none;
	height:3.16rem;
	align-items: flex-start;
	padding:0.6rem 0.5rem ;
}
.editprofile-list dd:last-child textarea{
	flex: 1;
	padding:0;
	padding-left:0.5rem;
	height:100%;
}
.btn-group{
	width:100%;
	height:1.32rem;
	position: absolute;
	top:0;
	left:0;
	display: flex;
	display:-webkit-flex;
	justify-content: space-between;
	padding:0 0.5rem;
	align-items: center;
}
.btn-group button{
	padding:0.22rem 0.44rem;
	font-size:0.44rem;
	color:#fff;
	background: rgba(255,255,255,.3);
	border-radius: 0.45rem;
}
.container {
  z-index: 99;
  position: fixed;
  padding-top: 1.32rem;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 1);
}
#image {
  max-width: 100%;
}
.cropper-view-box,
.cropper-face {
  border-radius: 50%;
}
.cropper-container {
  font-size: 0;
  line-height: 0;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  direction: ltr;
  -ms-touch-action: none;
  touch-action: none;
}
.cropper-container img {
  display: block;
  min-width: 0 !important;
  max-width: none !important;
  min-height: 0 !important;
  max-height: none !important;
  width: 100%;
  height: 100%;
  image-orientation: 0deg;
}
.cropper-wrap-box,
.cropper-canvas,
.cropper-drag-box,
.cropper-crop-box,
.cropper-modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.cropper-wrap-box {
  overflow: hidden;
}
.cropper-drag-box {
  opacity: 0;
  background-color: #fff;
}
.cropper-modal {
  opacity: 0.5;
  background-color: #000;
}
.cropper-view-box {
  display: block;
  overflow: hidden;
  width: 100%;
  height: 100%;
  outline: 1px solid #39f;
  outline-color: rgba(51, 153, 255, 0.75);
}
.cropper-dashed {
  position: absolute;
  display: block;
  opacity: 0.5;
  border: 0 dashed #eee;
}
.cropper-dashed.dashed-h {
  top: 33.33333%;
  left: 0;
  width: 100%;
  height: 33.33333%;
  border-top-width: 1px;
  border-bottom-width: 1px;
}
.cropper-dashed.dashed-v {
  top: 0;
  left: 33.33333%;
  width: 33.33333%;
  height: 100%;
  border-right-width: 1px;
  border-left-width: 1px;
}
.cropper-center {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0;
  height: 0;
  opacity: 0.75;
}
.cropper-center:before,
.cropper-center:after {
  position: absolute;
  display: block;
  content: " ";
  background-color: #eee;
}
.cropper-center:before {
  top: 0;
  left: -3px;
  width: 7px;
  height: 1px;
}
.cropper-center:after {
  top: -3px;
  left: 0;
  width: 1px;
  height: 7px;
}
.cropper-face,
.cropper-line,
.cropper-point {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.1;
}
.cropper-face {
  top: 0;
  left: 0;
  background-color: #fff;
}
.cropper-line {
  background-color: #39f;
}
.cropper-line.line-e {
  top: 0;
  right: -3px;
  width: 5px;
  cursor: e-resize;
}
.cropper-line.line-n {
  top: -3px;
  left: 0;
  height: 5px;
  cursor: n-resize;
}
.cropper-line.line-w {
  top: 0;
  left: -3px;
  width: 5px;
  cursor: w-resize;
}
.cropper-line.line-s {
  bottom: -3px;
  left: 0;
  height: 5px;
  cursor: s-resize;
}
.cropper-point {
  width: 5px;
  height: 5px;
  opacity: 0.75;
  background-color: #39f;
}
.cropper-point.point-e {
  top: 50%;
  right: -3px;
  margin-top: -3px;
  cursor: e-resize;
}
.cropper-point.point-n {
  top: -3px;
  left: 50%;
  margin-left: -3px;
  cursor: n-resize;
}
.cropper-point.point-w {
  top: 50%;
  left: -3px;
  margin-top: -3px;
  cursor: w-resize;
}
.cropper-point.point-s {
  bottom: -3px;
  left: 50%;
  margin-left: -3px;
  cursor: s-resize;
}
.cropper-point.point-ne {
  top: -3px;
  right: -3px;
  cursor: ne-resize;
}
.cropper-point.point-nw {
  top: -3px;
  left: -3px;
  cursor: nw-resize;
}
.cropper-point.point-sw {
  bottom: -3px;
  left: -3px;
  cursor: sw-resize;
}
.cropper-point.point-se {
  right: -3px;
  bottom: -3px;
  width: 20px;
  height: 20px;
  cursor: se-resize;
  opacity: 1;
}
@media (min-width: 768px) {
  .cropper-point.point-se {
    width: 15px;
    height: 15px;
  }
}
@media (min-width: 992px) {
  .cropper-point.point-se {
    width: 10px;
    height: 10px;
  }
}
@media (min-width: 1200px) {
  .cropper-point.point-se {
    width: 5px;
    height: 5px;
    opacity: 0.75;
  }
}
.cropper-point.point-se:before {
  position: absolute;
  right: -50%;
  bottom: -50%;
  display: block;
  width: 200%;
  height: 200%;
  content: " ";
  opacity: 0;
  background-color: #39f;
}
.cropper-invisible {
  opacity: 0;
}
.cropper-bg {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC");
}
.cropper-hide {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
}
.cropper-hidden {
  display: none !important;
}
.cropper-move {
  cursor: move;
}
.cropper-crop {
  cursor: crosshair;
}
.cropper-disabled .cropper-drag-box,
.cropper-disabled .cropper-face,
.cropper-disabled .cropper-line,
.cropper-disabled .cropper-point {
  cursor: not-allowed;
}
</style>