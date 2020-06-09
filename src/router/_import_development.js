// 开发环境已es6的写法 export default，本质上就是导出一个包含default的对象
module.exports = file => require('@/views/' + file + '.vue').default