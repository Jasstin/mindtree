type GroupItemShape = ImageShape | TextShape | LinkShape;
type TextItemShape = TextShape | BoldTextShape | EmTextShape | LinkShape;
interface GroupShape {
  label: string;
  content: GroupItemShape[];
}

interface ImageShape {
  label: string;
  src: string;
}
interface TextShape extends TextOptions {
  label: string;
  text: TextItemShape[] | string;
}
interface BoldTextShape extends TextOptions {
  label: string;
  text: string;
}
interface LinkShape {
  label: string;
  href: string;
  text: string;
}
interface EmTextShape extends TextOptions {
  label: string;
  text: string;
}
