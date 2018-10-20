<template>
  <div class="index">
    <h1>学生信息管理系统</h1>

    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
   
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄">
      </el-table-column>
      <el-table-column
        prop="moblie"
        label="手机号">
      </el-table-column>

      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>

    </el-table>

    <el-row>
      <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
    </el-row>

    <el-dialog title="填写你的信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="form.sex" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.moblie" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="家庭地址">
          <el-input v-model="form.adress" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitFrom">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      tableData: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        sex: "",
        age: null,
        moblie: null,
        address: ""
      }
    }
  },

  methods: {
    submitFrom() {
      var _this = this
      this.$http.post('/api/student', _this.form).then(function (res) {
        console.log(res)
      })
      .catch(function (error) {
        console.log(error)
      })


      this.dialogFormVisible = false
      this.getAllData()
    },

    // 请求所有数据
    getAllData() {
      var _this = this
      this.$http.get('/api/student').then(function (res) {
        console.log(res)
        _this.tableData = res.data
      })
      .catch(function (error) {
        console.log(error)
      })

    }
  },
  mounted: function() {
    this.getAllData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index .el-table--fit {
  max-width: 1200px;
  margin: 0 auto;
}
.el-row {
  margin-top: 2em;
}
</style>
