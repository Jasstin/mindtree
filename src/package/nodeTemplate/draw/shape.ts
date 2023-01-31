import splitText from '../utils/splitText';
import type { IGroup, IShape } from '@antv/g6';
import { measureTextWidth } from '@antv/util';
import { defaultTextStyle } from '../constant';
class Shape {
  group: IGroup;
  zIndex: number;
  constructor(group: IGroup) {
    this.group = group.addGroup();
    this.zIndex = 0;
  }
  Rect(name: string, attrs: RectOptions) {
    this.group.addShape('rect', {
      name,
      attrs,
      zIndex: this.zIndex,
    });
    return this;
  }
  Image(name: string, attrs: ImageOptions) {
    this.group.addShape('image', {
      name,
      attrs,
      zIndex: this.zIndex,
    });
  }
  Text(name: string, attrs: TextOptions, maxWidth: number) {
    const { text } = attrs;
    let renderItems: string[] = [];
    const itemAttrs = Object.assign({}, defaultTextStyle, attrs);
    const x = itemAttrs.x || 0;
    let y = 0;
    const originy = (y =
      (itemAttrs.y || 0) + (itemAttrs.lineHeight! - itemAttrs.fontSize!) / 2);
    splitText(text).forEach((item, index, arr) => {
      const textWidth = measureTextWidth(
        renderItems.join('') + item,
        itemAttrs
      );
      const textIndent = attrs.textIndent || 0;
      let isFirstLine = y === originy;
      if (textWidth + (isFirstLine ? textIndent : 0) > maxWidth) {
        this.group.addShape('text', {
          name,
          attrs: Object.assign({}, itemAttrs, {
            x: isFirstLine ? x + textIndent : x,
            y,
            text: renderItems.join(''),
          }),
          zIndex: this.zIndex,
        });
        renderItems = [item];
        y += itemAttrs.lineHeight;
        isFirstLine = false;
      } else {
        renderItems.push(item);
      }
      if (index === arr.length - 1) {
        this.group.addShape('text', {
          name,
          attrs: Object.assign({}, itemAttrs, {
            x: isFirstLine ? x + textIndent : x,
            y,
            text: renderItems.join(''),
          }),
          zIndex: this.zIndex,
        });
      }
    });
    return this;
  }
  sync(cb: (_this: Shape) => void) {
    cb(this);
    return this;
  }
  inner() {
    this.group = this.group.addGroup();
    this.zIndex++;
    return this;
  }
  end() {
    return this.group.addShape('rect', {
      attrs: {},
    }) as IShape;
  }
}
export default Shape;
