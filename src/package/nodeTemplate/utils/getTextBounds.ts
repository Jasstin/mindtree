import splitText from './splitText';
import { defaultTextStyle } from '../constant';
import { measureTextWidth } from '@antv/util';
const getTextWrapHeight = (
  text: string,
  attrs: TextOptions,
  maxWidth: number
) => {
  let renderItems: string[] = [];
  let line = 1;
  const textIndent = attrs.textIndent || 0;
  const textAttr = Object.assign({}, defaultTextStyle, attrs);
  splitText(text).forEach((item) => {
    const textWidth = measureTextWidth(renderItems.join('') + item, textAttr);
    const width = textWidth + (line === 1 ? textIndent : 0);
    if (width > maxWidth) {
      line++;
      renderItems = [item];
    } else {
      renderItems.push(item);
    }
  });
  return {
    width: line > 1 ? maxWidth : measureTextWidth(text, textAttr),
    height: line * textAttr.lineHeight,
    line,
    endlineWidth:
      line > 1
        ? measureTextWidth(renderItems.join(''), textAttr)
        : measureTextWidth(text, textAttr) + textIndent,
  };
};
export default getTextWrapHeight;
