/**
 * @description: 带样式的 log
 * @author: zs
 * @Date: 2021-02-11 08:55:46
 * @LastEditTime: 2021-02-11 09:03:09
 * @LastEditors: zs
 */
const baseStyle = {
  color: 'white',
};
const defaultKeyStyle = {
  ...baseStyle,
  background: '#606060',
  ['border-radius']: '2px 0 0 2px',
};
const defaultValStyle = {
  ...baseStyle,
  background: '#1d76b0',
  ['border-radius']: '0 2px 2px 0',
};

function styleLog(
  key,
  val,
  keyStyle = defaultKeyStyle,
  valStyle = defaultValStyle
) {
  console.log(
    `%c ${key} %c ${val} `,
    stringifyStyle(keyStyle),
    stringifyStyle(valStyle)
  );
}
function stringifyStyle(style) {
  return Object.keys(style).reduce((pre, k) => `${pre}${k}:${style[k]};`, '');
}

export default styleLog