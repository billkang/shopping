<template>
  <Card>
    <Form ref="formValidate" :model="formItem" :rules="validator" :label-width="100">
      <FormItem :label="item.label" :prop="item.name" v-for="item in schema" :key="item.name">
        <Input
          v-if="item.type === 'input'"
          v-model="formItem[item.name]"
          :placeholder="item.placeholder || '请输入'"
          :maxlength="item.maxlength || 20"
        ></Input>
        <Input
          v-if="item.type === 'password'"
          type="password"
          v-model="formItem[item.name]"
          :placeholder="item.placeholder || '请输入'"
          :maxlength="item.maxlength || 20"
        ></Input>
        <Select
          v-if="item.type === 'select'"
          v-model="formItem[item.name]"
          :placeholder="item.placeholder || '请选择'"
        >
          <Option
            v-for="opt in item.source"
            :key="opt.value"
            :value="opt.value"
          >{{opt.label}}</Option>
        </Select>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit()">提交</Button>
        <Button @click="handleReset()">重置</Button>
      </FormItem>
    </Form>
  </Card>
</template>

<script>
export default {
  name: "form-creator",
  props:{
    schema: Array,
    validator: Object,
    formData: Object,
    onCreate: Function,
    onUpdate: Function,
  },
  data() {
    const formItem = {};
    this.schema.forEach(item => formItem[item.name] = "");

    return {
      formItem,
    };
  },
  watch: {
    formData: function(newVal, oldVal) {
      if(newVal && JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
        this.$nextTick(() => {
          Object.keys(newVal).forEach(key => this.formItem[key] = newVal[key]);
        });
      }
    },
  },
  methods: {
    async handleSubmit() {
      const valid = await this.$refs.formValidate.validate();
      if (valid) {
        let res = null;

        const { id, ...rest } = this.formItem;

        if (id) {
          res = await this.onUpdate(id, {
            ...rest
          });
        } else {
          res = await this.onCreate({
            ...rest
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
};
</script>

<style>
</style>
