<style lang="less" scoped>
</style>
<template>
     <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
</template>
<script>
import {Infolist} from '../api/infolist'
export default {
  data(){
		return{
      tableData: [],
		};
	},
  mounted(){
    this.init()
  },
	methods:{
		async init() {
      // const res = await this.$http.get('/usertables', {})
      // this.tableData = res.response
      const params = {}
      // const res = await Infolist(this, params);
      const res = await Infolist(params);
      this.tableData = res.data
    }
  }
}
</script>

