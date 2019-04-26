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
import API from "@/api/roles";
import FormCreator from "@/components/form-creator.vue";

export default {
  name: "roles_create",
  components: {
    FormCreator,
  },
  data() {
    return {
      API,
      schema:[
        {
          type: 'input',
          label: '角色名',
          name: 'name'
        }
      ],
      formData: null,
      validator: {
        name: [{ required: true, message: "角色名不能为空", trigger: "blur" }]
      }
    };
  },
  async mounted() {
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
