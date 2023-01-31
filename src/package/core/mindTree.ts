import Observer from '../lib/observer/observer.js';
import { version } from '../../../package.json';
import { handleTheme, handleConfig, handleData, handlePlugin } from './options';
import type { GraphOptions, TreeGraph } from '@antv/g6';
import G6 from '@antv/g6';
interface Options {
  theme?: Theme;
  config?: Config;
  plugins?: any;
}
class MindTree extends Observer {
  VERSION = version;
  theme: Theme;
  config: GraphOptions;
  graph: TreeGraph;
  _plugins: any[];
  constructor(options: Options = {}) {
    super();
    const { theme, config, plugins = [] } = options;
    this.theme = handleTheme(theme!);
    this.config = handleConfig(config!);
    this._plugins = handlePlugin(plugins);
    this.graph = this.initGraph(this.config);
    this.initPlugins();
  }
  initGraph(config: GraphOptions) {
    if (this.graph) {
      this.graph.destroy();
    }
    return new G6.TreeGraph(config);
  }
  read(data: any) {
    const TreeData = handleData(data);
    this.graph.read(TreeData!);
    const { fitCenter } = this.config;
    if (fitCenter) {
      this.graph.fitCenter();
    }
  }
  initPlugins() {
    this._plugins.forEach((plugin) => {
      plugin.apply(this);
    });
  }
}
export default MindTree;
