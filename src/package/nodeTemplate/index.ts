import G6 from '@antv/g6';
import DrawNode from './draw';
class NodeTemplate {
  templateName = 'mindTree-node';
  apply(mindTree: MindTree) {
    const { config } = mindTree;
    const newConfig = Object.assign(config, {
      defaultNode: {
        type: this.templateName,
      },
      layout: Object.assign(config.layout || {}, {
        getWidth: () => 200,
        getHeight: () => 175,
      }),
    });
    this.register(); // 注册节点样式
    mindTree.graph = mindTree.initGraph(newConfig);
  }
  register() {
    // canvas节点
    G6.registerNode(this.templateName, {
      draw: (cfg, group) => new DrawNode().draw(cfg, group),
    });
  }
}
export default NodeTemplate;
