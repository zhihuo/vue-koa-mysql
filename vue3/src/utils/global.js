// import { MessageBox } from 'element-ui';
// export default {
//   install (Vue, options) {
//     Vue.prototype.confirm = (params) => {
// 		MessageBox.$confirm(params.content, params.tip || '提示', {
//           confirmButtonText: '确定',
//           cancelButtonText: '取消',
//           type: params.type || 'warning',
//           center: true
//         }).then(() => {
//           // MessageBox.$message({
//           //   type: 'success',
//           //   message: '删除成功!'
//           // });
//           params.thenFun && params.thenFun()
//         }).catch(() => {
//           // MessageBox.$message({
//           //   type: 'info',
//           //   message: '已取消删除'
//           // });
//           params.catchFun && params.catchFun()
//         });
// 	}
//   }
// }

// // vue 插件写法

import { MessageBox } from 'element-ui';
export default {
  install (Vue, options) {
    Vue.prototype.confirm = (params) => {
        MessageBox.confirm(params.content,  params.tip || "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: params.type || "warning",
                center: true
            }).then(() => {
                params.fn && params.fn(params.id)
            }).catch(() => {
                // root.$message({
                //     type: 'info',
                //     message: '已取消删除'
                // });
            });
        }
    }
}
// vue插件
