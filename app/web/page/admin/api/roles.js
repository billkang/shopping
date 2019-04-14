import axios from '@/libs/api.request'

export const create = (data) => {
  return axios.request({
    url: '/api/roles',
    method: 'post',
    data
  })
}

export const getList = ({ pageSize = 20, pageNum = 1 }) => {
  return axios.request({
    url: `/api/roles`,
    method: 'get',
    data: {
      limit: pageSize,
      offset: (pageNum - 1) * pageSize
    }
  })
}
