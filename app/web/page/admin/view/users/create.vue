<template>
  <Card>
    <Form ref="formValidate" :model="formData" :rules="ruleValidate" :label-width="80">
      <FormItem label="角色名" prop="name">
        <Input v-model="formData.name" placeholder="请输入角色名" :maxlength="20"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit()">提交</Button>
        <Button @click="handleReset()">重置</Button>
      </FormItem>
    </Form>
  </Card>
</template>

<script type='babel'>
import API from "@/api/users";

export default {
  name: "users_create",
  data() {
    return {
      recordId: "",
      formData: {
        name: ""
      },
      ruleValidate: {
        name: [{ required: true, message: "角色名不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    async handleSubmit() {
      const valid = await this.$refs.formValidate.validate();
      if (valid) {
        let res = null;

        if (this.recordId) {
          res = await API.update(this.recordId, {
            ...this.formData
          });
        } else {
          res = await API.create({
            ...this.formData
          });
        }

        if (res.status === 200 || res.status === 201) {
          this.$Message.success("操作成功!");
          this.$refs.formValidate.resetFields();
        } else {
          this.$Message.error(`操作失败, ${res.message}!`);
        }
      }
    },
    handleReset() {
      this.$refs.formValidate.resetFields();
    }
  },
  async mounted() {
    const { id } = this.$route.params;

    if (id) {
      this.recordId = id;
      const { status, data } = await API.getById(id);

      if (status === 200) {
          this.formData = {
            name: data.name
          };
        } else {
          this.$Message.error(`获取数据失败, ${data.message}!`);
        }
    }
  }
};
</script>

<style>
</style>
