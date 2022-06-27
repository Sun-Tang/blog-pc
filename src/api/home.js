/* 首页配置下的接口管理 */
import http from "./http";
/* 轮播图 */
// 获取轮播图列表
export default function home(pageNumber = 1, pageSize = 10){
    return http.get("/carousels", {
        params: {
            pageNumber,
            pageSize,
        },
    });
};