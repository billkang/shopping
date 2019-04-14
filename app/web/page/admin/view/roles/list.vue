<template>
  <Card>
    <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
  </Card>
</template>

<script type='babel'>
import Tables from '_c/tables'
import { getList } from '@/api/roles'

export default {
  name: 'roles_list',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        { title: 'ID', key: 'id',  },
        { title: '角色名', key: 'name', sortable: true, editable: true },
        { title: '创建时间', key: 'created_at' },
        { title: '更新时间', key: 'updated_at' },
        {
          title: '操作',
          key: 'handle',
          options: ['delete'],
          button: [
            (h, params, vm) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要删除吗?'
                },
                on: {
                  'on-ok': () => {
                    vm.$emit('on-delete', params)
                    vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
                  }
                }
              })
            }
          ]
        }
      ],
      tableData: [],
      page: {
          paheSize: 20,
          pageNum: 1
      }
    }
  },
  methods: {
    handleDelete (params) {
      console.log(params)
    },
  },
  async mounted () {
    const res = await getList(this.page);
    this.tableData = res.data;
  }
}
</script>
