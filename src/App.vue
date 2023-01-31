<template>
  <div id="mind-tree" />
</template>
<script lang="ts">
import MindTree from './package';
import data from './test.json';
export default {
  mounted() {
    const mindTree = new MindTree({
      config: {
        container: 'mind-tree',
        fitCenter: true,
        xGap: 10,
        yGap: 10,
        renderer: 'svg',
      },
    });
    mindTree.read(data);
    window.MindTree = mindTree;
  },
};
</script>
<style>
body {
  margin: 0;
  width: 100vw;
  height: 100vh;
}
#mind-tree {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
