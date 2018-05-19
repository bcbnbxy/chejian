export default {
	state : {
		uuid:'863064010002246',
		platform:'android',
		version:'1.0.0'
	},
	mutations: {
		getversion(state,version){
			state.userInfo.version=version;
		},
		getplatform(state,platform){
			state.userInfo.platform=platform;
		},
		getuuid(state,uuid){
			state.userInfo.uuid=uuid;
		}
	}
}