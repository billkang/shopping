import axios from '@/libs/api.request'

export default (apiName) => {
  return {
    getAll: ({
      pageSize = 20,
      pageNum = 1
    } = {}) => {
      return axios.request({
        url: `/api_admin/${apiName}`,
        method: 'get',
        params: {
          limit: pageSize,
          offset: (pageNum - 1) * pageSize
        }
      })
    },

    getById: (id) => {
      return axios.request({
        url: `/api_admin/${apiName}/${id}`,
        method: 'get',
      })
    },

    create: (data) => {
      return axios.request({
        url: `/api_admin/${apiName}`,
        method: 'post',
        data
      })
    },

    update: (id, data) => {
      console.log(data);
      return axios.request({
        url: `/api_admin/${apiName}/${id}`,
        method: 'put',
        data
      })
    },

    remove: (id) => {
      return axios.request({
        url: `/api_admin/${apiName}/${id}`,
        method: 'delete',
      })
    }
  }
}
