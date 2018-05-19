export default {
	state : {
		userInfo:{
			areaCodes:'86',
			phonenum:'',
			code:'',
			password:'',
			nickname:'',
			area:{
				provincesname:'',
				cityname:''
			},
			checkcode:true
		}
	},
	mutations: {
		getphonenum(state,phonenum){
			state.userInfo.phonenum=phonenum;
			console.log(state.userInfo.phonenum)
		},
		getcode(state,code){
			state.userInfo.code=code;
		},
		getpassword(state,password){
			state.userInfo.password=password;
		},
		getnickname(state,nickname){
			state.userInfo.nickname=nickname;
		},
		getarea(state,area){
			state.userInfo.area.provincesname=area.provincesname;
			state.userInfo.area.cityname=area.cityname;
		},
		setcheckcode(state){
			state.userInfo.checkcode=!state.userInfo.checkcode;
		}
	}
}
