const docEl = window.document.documentElement;
const metaEl = document.querySelector('meta[name="viewport"]');
const dpr = window.devicePixelRatio || 1;
const scale = 1 / dpr;
const setRemUnit = () => {
  // const { width } = domEl.getBoundingClientRect()
  // // 设置viewport，进行缩放，达到高清效果
  // // metaEl.setAttribute('content', `width=${dpr * width} ,initial-scale=${scale},maximum-scale=${scale}, minimum-scale=${scale},user-scalable=no`);
  // // 设置data-dpr属性，留作的css hack之用
  // domEl.setAttribute('data-dpr', dpr);
  // const rem = (width * dpr) / 10
  // domEl.style.fontSize = `${rem}px`
  // window.dpr = dpr;
  const { width } = docEl.getBoundingClientRect()
	let rem = width / 7.5
	rem = rem > 102.4 ? 102.4 : rem
	docEl.style.fontSize = `${rem}px`
	document.getElementsByTagName('body')[0].style.width = `${rem * 7.5}px`
	document.getElementsByTagName('body')[0].style.margin = 'auto'
}
setRemUnit()
export default setRemUnit
