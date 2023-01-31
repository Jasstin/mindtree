type Padding = number | string | number[];
interface GraphOptions {
  /**
   * 图的 DOM 容器，可以传入该 DOM 的 id 或者直接传入容器的 HTML 节点对象
   */
  container: string | HTMLElement;
  /**
   * 指定画布宽度，单位为 'px'，可选，默认为容器宽度
   */
  width?: number;
  /**
   * 指定画布高度，单位为 'px'，可选，默认为容器宽度
   */
  height?: number;
  /**
   * renderer canvas or svg
   */
  renderer?: string;
  fitView?: boolean;
  fitCenter?: boolean;
  /**
   * 图适应画布时，指定四周的留白。
   * 可以是一个值, 例如：fitViewPadding: 20
   * 也可以是一个数组，例如：fitViewPadding: [20, 40, 50,20]
   * 当指定一个值时，四边的边距都相等，当指定数组时，数组内数值依次对应 上，右，下，左四边的边距。
   */
  fitViewPadding?: Padding;
  /**
   * 各种元素是否在一个分组内，决定节点和边的层级问题，默认情况下所有的节点在一个分组中，所有的边在一个分组中，当这个参数为 false 时，节点和边的层级根据生成的顺序确定。
   * 默认值：true
   */
  groupByTypes?: boolean;
  directed?: boolean;
  /**
   * 当图中元素更新，或视口变换时，是否自动重绘。建议在批量操作节点时关闭，以提高性能，完成批量操作后再打开，参见后面的 setAutoPaint() 方法。
   * 默认值：true
   */
  autoPaint?: boolean;
  /**
   * 向 graph 注册插件。插件机制请见：plugin
   */
  plugins?: any[];
  /**
   * 是否启用全局动画。
   */
  animate?: boolean;
  /**
   * 最小缩放比例
   * 默认值 0.2
   */
  minZoom?: number;
  /**
   * 最大缩放比例
   * 默认值 10
   */
  maxZoom?: number;
  groupType?: string;
  /**
   * Edge 是否连接到节点中间
   */
  linkCenter?: boolean;
  /**
   * 是否启用 stack，即是否开启 redo & undo 功能
   */
  enabledStack?: boolean;
  /**
   * redo & undo 最大步数, 只有当 enabledStack 为 true 时才起作用
   */
  maxStep?: number;
  /**
   * 存储图上的 tooltip dom，方便销毁
   */
  tooltips?: [];
  pixelRatio?: number;
  /**
   * 达到这一节点数量，将开启性能优化模式
   * 目前包括：节点状态样式变更是否影响相关边的更新
   */
  optimizeThreshold?: number;
}
interface Config extends GraphOptions {
  xGap: number;
  yGap: number;
}
