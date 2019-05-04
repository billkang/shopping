<template>
  <Card>
    <FormCreator
      :schema="schema"
      :validator="validator"
      :formData="formData"
      :on-create="API.create"
      :on-update="API.update"
    ></FormCreator>
  </Card>
</template>

<script type='babel'>
import API from "@/api/accounts";
import roleAPI from "@/api/roles";
import FormCreator from "@/components/form-creator.vue";

export default {
  name: "accounts_create",
  components: {
    FormCreator,
  },
  data() {
    return {
      API,
      schema:[
        {
          type: 'select',
          label: '角色',
          name: 'role_id',
          source: [],
        },
        {
          type: 'input',
          label: '用户名',
          name: 'username',
        },
        {
          type: 'password',
          label: '密码',
          name: 'password',
        }
      ],
      formData: null,
      validator: {
        role: [{ required: true, type: 'number', message: "角色不能为空", trigger: "change" }],
        username: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  async mounted() {
    const { status, data } = await roleAPI.getAll();
    if(status === 200) {
      this.schema[0].source = data.map(item => ({
        label: item.name,
        value: item.id,
      }));
    }

    const { id } = this.$route.params;
    if (id) {
      this.recordId = id;
      const { status, data } = await API.getById(id);

      if (status === 200) {
          this.formData = data;
        } else {
          this.$Message.error(`获取数据失败, ${data.message}!`);
        }
    }
  }
};
</script>

<style>
</style>
