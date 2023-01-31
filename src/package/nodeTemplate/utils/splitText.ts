import { isAWord } from '../../utils/reg';
// 将整段字符串按照，单词、汉字字符、标点符号进行单独拆分并返回拆分好的数组
const splitText = (str: string): string[] => {
  let res: string[] = [];
  // 先将字符串按照英文单词进行拆分
  str.split(/\b/).forEach((item) => {
    if (isAWord(item)) {
      res.push(item);
    } else {
      res = res.concat(item.split(''));
    }
  });
  return res;
};
export default splitText;
