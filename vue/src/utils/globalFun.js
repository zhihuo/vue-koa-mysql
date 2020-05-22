
import { MessageBox } from 'element-ui';
export function globalFun(){
    const confirm =  (params) => {
         MessageBox.confirm(params.content,  params.tip || "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: params.type || "warning",
            center: true,
        }).then(()=>{
            // bug 定义全局之后，then不能异步请求了 
            params.fn && params.fn(params.id || '')
        }).catch(() => {
            params.catchFn && params.catchFn()
        });
    
    }

    return {
        confirm
    }
}

// vue插件
// import { MessageBox } from 'element-ui';
// export default { 
//   install (Vue, options) {
//     Vue.prototype.confirm = (params) => {
//         MessageBox.confirm(params.content,  params.tip || "提示", {
//                 confirmButtonText: "确定",
//                 cancelButtonText: "取消",
//                 type: params.type || "warning",
//                 center: true
//             }).then(() => {
//                 params.fn && params.fn(params.id)
//             }).catch(() => {
//                 // root.$message({
//                 //     type: 'info',
//                 //     message: '已取消删除'
//                 // });
//             });
//         }
//     }
// }

