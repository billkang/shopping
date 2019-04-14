<template>
  <div>
    <markdown-editor v-model="content"/>
  </div>
</template>

<script type='babel'>
import MarkdownEditor from '_c/markdown'
export default {
  name: 'markdown_page',
  components: {
    MarkdownEditor
  },
  data () {
    return {
      content: ''
    }
  }
}
</script>

<style>

</style>
