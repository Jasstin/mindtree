export const isAWord = (str: string) =>
  /^[a-zA-Z]+$/.test(str) && new RegExp('\\b' + str + '\\b', 'g').test(str);
