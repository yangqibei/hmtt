import request from '@/utils/request'
// 只有在vue组件中，才能用store 在Js中没有store，只能引入后再使用
import store from '@/store'
/**
 *获取短信验证码
 * @param {number} mobile
 * @returns promise
 */
export const getSmsCode = (mobile) => {
  return request({
    url: `/sms/codes/${mobile}`
  })
}
// 登录接口
export const login = ({ mobile, code }) => {
  return request({
    method: 'POST',
    url: '/authorizations',
    data: {
      mobile,
      code
    }
  })
}

// 获取用户个人资料
export const getUserInfo = () => {
  return request({
    url: 'user',
    headers: {
      Authorization: 'Bearer ' + store.state.user.token
    }
  })
}
