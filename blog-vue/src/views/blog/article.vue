<template>
  <div>
    <div>
      <el-button @click="changeEidter()">编辑</el-button>
    </div>
    <div class="container">
      <!--    固定头部-->
      <!--    editor-->
      <tui-viewer v-if="viewerShow" v-model="content" ref="tui-editor"></tui-viewer>
      <tui-editor v-if="!viewerShow"></tui-editor>
    </div>

  </div>
</template>

<script>
import TuiViewer from "@/components/blog/TuiViewer";
import TuiEditor from "@/components/blog/TuiEditor";

export default {
  name: "articleDetail",
  components: {
    TuiViewer,
    TuiEditor
  },
  data() {
    return {
       viewerShow: true,
    };
  },
  mounted() {
  },
  methods: {
    changeEidter(){
      this.viewerShow = !this.viewerShow;
    }
  }
}
</script>

<style scoped>
.tui-editor-contents p {
  color: #4a4a4a;
  font-size: 16px;
  line-height: 31px;
}

.container {
  width: 800px;
  margin: 0 auto;
}
</style>
