
import { MessageBox } from 'element-ui';
export function globalFun(){
    const confirm =  (params) => {
         MessageBox.confirm(params.content,  params.tip || "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: params.type || "warning",
            center: true,
        }).then(()=>{
            params.fn && params.fn(params.id || '')
        }).catch(() => {
            params.catchFn && params.catchFn()
        });
    
    }

    return {
        confirm
    }
}
