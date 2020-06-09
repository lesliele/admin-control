// 以AMD/Commonjs规范，直接使用即可(module.exports)
module.exports = file => () => import('@/views/' + file + '.vue')