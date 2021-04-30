<template>
  <div style="text-align: left;margin-bottom: 20px">
    <el-radio-group v-model="formInline.box_type" >
      <el-radio v-for="item in authTypeList"
                :key="item.id" :label="item.type">
        {{item.value}}
      </el-radio>
    </el-radio-group>
  </div>
  <el-form  :model="formInline" inline="true" :rules="rules" ref="formInline" label-width="100px" class="demo-ruleForm" style="text-align: left;">
            <el-radio-group v-model="formInline.env" >
              <el-radio-button label="TEST">测试</el-radio-button>
              <el-radio-button label="DEV">生产</el-radio-button>
            </el-radio-group>
    <el-form-item label="奇享盒编码" prop="box_num">
      <el-input v-model="formInline.box_num" placeholder="请输入奇享盒编码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('formInline')">模拟</el-button>
      <el-button @click="resetForm('formInline')">重置</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
/* eslint-disable */
import axios from "axios";
import { defineComponent, h } from 'vue'
import { ElMessage } from 'element-plus'
import {simulation, submit_createBox} from '../api/index'

export default {
  data() {
    return {
      AuthoCheck: 1,
      authTypeList: [{id:1,value:'蒸汽锅炉',type:1},{id:2,value:'热水锅炉',type:2}],
      radio1:'TEST',
      formInline: {
        box_num: '',
        env:'TEST',
        box_type:1
      },
      rules: {
        box_num: [{required: true, message: '请输入奇享盒编码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var that = this;
          submit_createBox(that.formInline)
              .then(res => {
                window.console.log(res.status)
                if (res.status === 200){
                  console.log(res);
                  ElMessage.success(res.data.status);}
              });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
    // },
    // watch: {
    //   radio1(val) {
    //     console.log(val)
    //   }
  }
}
/* eslint-disable */
</script>
<style>
.el-row1 {
  padding-right: 0;
}
</style>

