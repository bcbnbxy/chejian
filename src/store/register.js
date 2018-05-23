export default {
	state : {
		userInfo:{
			areaCodes:'86',
			mobileno:'',
			checkcode:'',
			password:'',
			nickname:'',
			province:'',
			city:'',
			confirmpwd:''
		},
		checkcode:true,
		codetime:60,
		getprovince:true
	},
	mutations: {
		getphonenum(state,mobileno){
			state.userInfo.mobileno=mobileno;
		},
		getcode(state,code){
			state.userInfo.checkcode=code;
		},
		getpassword(state,password){
			state.userInfo.password=password.password;
			state.userInfo.confirmpwd=password.surepassword;
		},
		getnickname(state,nickname){
			state.userInfo.nickname=nickname;
		},
		getarea(state,area){
			state.userInfo.province=area.provincesname;
			state.userInfo.city=area.cityname;
		},
		setcheckcode(state){
			state.checkcode=!state.checkcode;
		},
		setcodetime(state){
			state.codetime --;
			if(state.codetime==-1){
				state.codetime=60;
			}
		},
		setGetprovince(state){
			state.getprovince=!state.getprovince;
		}
	}
}
