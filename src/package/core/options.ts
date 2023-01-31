import { defaultTheme } from '../constants';
import type { GraphOptions, TreeGraphData } from '@antv/g6';
import getBoundsById from '../utils/getBoundsById';
import recusionData from '../utils/recusionData';
import defaultPlugins from '../constants/defaultPlugins';
export const handleTheme = (theme: Theme): Theme => {
  return Object.assign({}, defaultTheme, theme || {});
};
export const handleConfig = (config: Config): GraphOptions => {
  const { container, xGap, yGap, ...otherConfig } = config || {};
  const { width, height } = getBoundsById(container as string);
  return {
    container,
    width,
    height,
    animate: false,
    layout: {
      type: 'mindmap',
      direction: 'H',
      getHeight: (node: any) => {
        return 16;
      },
      getWidth: (node: any) => {
        return 16;
      },
      getSide: (node: any) => {
        return 'right';
      },
      getVGap: () => yGap,
      getHGap: () => xGap,
    },
    ...otherConfig,
  };
};

export const handleData = (data: any): TreeGraphData | null => {
  if (data instanceof Array) {
    if (data.length === 1) {
      return recusionData(data[0]);
    }
  }
  return null;
};

export const handlePlugin = (plugins: any[]): any[] => {
  return defaultPlugins.concat(plugins);
};
