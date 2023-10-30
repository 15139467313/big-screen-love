import server  from "../server.js";

export function power() {
    return server({
        method: 'get',
        url: '/power',
       
    })
}
export function contribution() {
    return server({
        method: 'get',
        url: '/contribution',
       
    })
}
// 视频
export function video() {
    return server({
        method: 'get',
        url: '/video',
       
    })
}
// 助力
export function assistance() {
    return server({
        method: 'get',
        url: '/assistance',
       
    })
}
// 状态
export function trends() {
    return server({
        method: 'get',
        url: '/trends',
       
    })
}
// 公益活动
export function welfares() {
    return server({
        method: 'get',
        url: '/welfares',
       
    })
}
// 志愿服务
export function volunteers() {
    return server({
        method: 'get',
        url: '/volunteers',
       
    })
}
// 积分
export function standings() {
    return server({
        method: 'get',
        url: '/data',
       
    })
}
// 横幅
export function banners() {
    return server({
        method: 'get',
        url: '/banners',
       
    })
}