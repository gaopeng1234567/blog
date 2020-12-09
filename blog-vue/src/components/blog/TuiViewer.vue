<template>
  <viewer
      :options="options"
      :initialValue="viewerText"
  />
</template>

<script>
import {Viewer} from '@toast-ui/vue-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/i18n/zh-cn';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import hljs from './highlight';

export default {
  name: "TuiViewer",
  props: {
    viewerText: String,
    value: String
  },
  components: {
    viewer: Viewer
  },
  data() {
    return {
      options: {
        plugins: [[codeSyntaxHighlight, {hljs}]],
        usageStatistics: false,
        language: 'zh-CN'
      },
    };
  },
  methods: {
    createLastButton(tag) {//创建不同toolbar图标
      const button = document.createElement('button');
      if(tag == 'wp'){
        button.innerHTML = `<i class="el-icon-link"></i>`;
      }else if(tag == 'uml'){
        button.innerHTML = `<i class="el-icon-connection"></i>`;
      }else if(tag == 'mindmap'){
        button.innerHTML = `<i class="el-icon-s-data"></i>`;
      }else if(tag == 'help'){
        button.innerHTML = `<i class="el-icon-question"></i>`;
      }
      return button;
    },
  }
}
</script>

<style scoped>

</style>
