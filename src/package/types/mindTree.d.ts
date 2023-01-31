interface MindTree {
  VERSION: string;
  theme: Theme;
  config: GraphOptions;
  graph: TreeGraph;
  originData: any;
  _plugins: any[];
  read(data: any): void;
  initPlugins(): void; // 初始化插件
  initGraph(config: GraphOptions): void; // 初始化画布
}
