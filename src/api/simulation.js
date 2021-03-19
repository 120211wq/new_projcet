import request from "../utils/request"
import { ElMessage } from 'element-plus'
export function simulation(data) {
     request({
        url: '/uploadData',
        method: 'post',
        data: data
    })
    ElMessage.success('上报成功')
    return request
}
export function get_box(data) {
    return request({
        url: '/getBoxes',
        method: 'post',
        data: data
    })
}

export function submit_createBox(data) {
     request({
        url: '/createBox',
        method: 'post',
        data: data
    })
    ElMessage.success('成功')
    return request
}

export function simulation_stopBox(data) {
    request({
        url: '/stopBox',
        method: 'post',
        data: data
    })
    ElMessage.success('停止成功')
    return request
}

export function get_simulationlist(data) {
    return request({
        url: '/getBoxes',
        method: 'post',
        data: data
    })
}
