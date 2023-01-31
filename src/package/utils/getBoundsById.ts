import { error } from './throwError';
const getBoundsById = (id: string): { width: number; height: number } => {
  const oDiv = document.getElementById(id);
  if (!oDiv) error(`id错误,无法获取到${id}元素`);
  const bounds = oDiv!.getBoundingClientRect();
  const { width, height } = bounds;
  if (!width || !height) error(`${id}元素无法获取到宽高,请检查`);
  return bounds;
};
export default getBoundsById;
