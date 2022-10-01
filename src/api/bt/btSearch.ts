import httpRequest from "@/api/index"

interface btSearchParam  {
    keyword: String
    page: number
}

export function apiGetBtList(params: btSearchParam) {
    return httpRequest({
        url: "/videoserver/bt/search",
        method: "get",
        params: params
    })
}
