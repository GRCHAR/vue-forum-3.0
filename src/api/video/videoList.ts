import httpRequest from '@/api/index'

interface VideoListParam {
    keyword: String,
    size: number,
    number: number,
    type: String
}


interface VideoTotalParam {
    keyword: String,
    type: String
}



export class VideoListApi {
    
    VideoListApi() {

    }
    
    public apiGetVideoList(param: VideoListParam) {
        return httpRequest({
            url: "/videoserver/video/getVideoPage",
            method: "get",
            data: param
        })
    }

    public apiGetVideoTotal(param: VideoTotalParam) {
        return httpRequest({
            url: "/videoserver/video/getVideoTotal",
            method: "get",
            data: param
        })
    }
}


 