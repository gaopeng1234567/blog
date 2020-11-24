<template>
  <div>
    <!--    固定头部-->
    <!--    editor-->
    <tui-editor v-model="content" ref="tui-editor"></tui-editor>
  </div>
</template>

<script>
import TuiEditor from "@/components/blog/TuiEditor";

export default {
  name: "articleDetail",
  components: {TuiEditor},
  data() {
    return {
      content: "我是富文本编辑器"
    };
  },
  mounted() {
  },
  methods: {}
}
</script>

<style scoped>

</style>
