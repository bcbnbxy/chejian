export default {
	state : {
		popupmean:false,
		popupmean_more:false,
		report:false,
		pic_text_video:false,
		share:false
	},
	mutations: {
		changepopupmean(state){
			state.popupmean=!state.popupmean;
		},
		changepopupmean_more(state){
			state.popupmean_more=!state.popupmean_more;
		},
		changereport(state){
			state.report=!state.report;
		},
		changepictextvideo(state){
			state.pic_text_video=!state.pic_text_video;
		},
		changeshare(state){
			state.share=!state.share;
		}
	}
}