<template>
  <ListPage :columns="columns" :on-fetch-data="API.getAll" :on-create="onCreate" :on-update="onUpdate" :on-remove="API.remove"></ListPage>
</template>

<script type='babel'>
import ListPage from '_c/list-page.vue';
import API from '@/api/roles';

export default {
  name: 'roles_list',
  components: {
    ListPage
  },
  data () {
    return {
      API,
      columns: [
        { title: 'ID', key: 'id',  },
        { title: '角色名', key: 'name' },
        { title: '创建时间', key: 'created_at' },
        { title: '更新时间', key: 'updated_at' }
      ],
    }
  },
  methods: {
    onCreate() {
      this.$router.push({ name: 'roles_create' });
    },
    onUpdate(id) {
      this.$router.push({ name: 'roles_update', params: { id } });
    },
  }
}
</script>
