
export default {
	state : {
		uuid:'863064010002246',
	    platform:'android',
 		version:'1.0.0'
	},
	mutations: {
		getversion(state,version){
			state.params.version=version;
		},
		getplatform(state,platform){
			state.params.platform=platform;
		},
		getuuid(state,uuid){
			state.params.uuid=uuid;
		}
	}
}