export default {
	state : {
		userInfo:{
			areaCodes:'86',
			phonenum:'',
			code:'',
			password:'',
			nickname:'',
			provincesname:'',
			cityname:'',
			surepassword:''
		},
		checkcode:true,
		codetime:20,
		getprovince:true
	},
	mutations: {
		getphonenum(state,phonenum){
			state.userInfo.phonenum=phonenum;
		},
		getcode(state,code){
			state.userInfo.code=code;
		},
		getpassword(state,password){
			state.userInfo.password=password.password;
			state.userInfo.surepassword=password.surepassword;
		},
		getnickname(state,nickname){
			state.userInfo.nickname=nickname;
		},
		getarea(state,area){
			state.userInfo.provincesname=area.provincesname;
			state.userInfo.cityname=area.cityname;
		},
		setcheckcode(state){
			state.checkcode=!state.checkcode;
		},
		setcodetime(state){
			state.codetime --;
			if(state.codetime==-1){
				state.codetime=20;
			}
		},
		setGetprovince(state){
			state.getprovince=!state.getprovince;
		}
	}
}
