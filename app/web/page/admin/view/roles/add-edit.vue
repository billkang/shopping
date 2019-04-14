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
import { create } from '@/api/roles';

export default {
  name: 'roles_add_edit',
  data () {
    return {
      formData: {
        name: '',
      },
      ruleValidate: {
        name: [
          { required: true, message: '角色名不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async handleSubmit() {
      const valid = await this.$refs.formValidate.validate();
      if (valid) {
        const res = await create({
          ...this.formData
        });
        if(res.status === 201){
          this.$Message.success('创建角色成功!');
        } else {
          this.$Message.error(`创建角色失败, ${res.message}!`);
        }
      }
    },
    handleReset() {
      this.$refs.formValidate.resetFields();
    }
  },
  mounted () {
  }
}
</script>

<style>

</style>
