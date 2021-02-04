import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

console.log(111)
console.log(SvgIcon);
// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().forEach(requireContext)
console.log(requireAll);
requireAll(req)
