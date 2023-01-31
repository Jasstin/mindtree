import { error } from './throwError';
const recusionData = (data: any) => {
  // 数据映射
  if (data.children) {
    data.children.forEach((item: any) => recusionData(item));
  }
  return data;
};
export default recusionData;
