<!--新增机型-->
<template>
<div >

   <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/esj' }">二手机管理</el-breadcrumb-item>
  <el-breadcrumb-item>新增二手机</el-breadcrumb-item>
</el-breadcrumb>
    
    <section class="br pt10 pm10 pd br mt20 yj4">
     
        <section class="sd_df_er pt40">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px"  class="demo-ruleForm">
            <el-form-item label="二手机名称"  prop="esj_name">
                          <el-input  placeholder="" v-model="ruleForm.esj_name" ></el-input>
             </el-form-item> 
            <el-form-item label="机型"  prop="esj_jx">
                          <el-input  placeholder="" v-model="ruleForm.esj_jx" ></el-input>
             </el-form-item> 
            
                 
                 <el-form-item label="品牌"  prop="esj_pp">
                          <el-input  placeholder="" v-model="ruleForm.esj_pp" ></el-input>
             </el-form-item> 
            
                 <el-form-item label="年份"  prop="esj_nf">
                          <el-input  placeholder="" v-model="ruleForm.esj_nf" ></el-input>
             </el-form-item> 
            
            
            <el-form-item label="二手机描述"  prop="esj_ms">
                          <el-input  placeholder="年份，机型，产地等信息" v-model="ruleForm.esj_ms" ></el-input>
             </el-form-item> 
            
            
            
                   <el-form-item label="二手机图片"  prop="esj_img_e">
                       
                       <el-upload
  class="avatar-uploader ss_dert"
  action="https://www.easy-mock.com/mock/5c73a0393baee470d9b3e7ea/mock.api/upimg"
  :show-file-list="false"
  :on-success="handleAvatarSuccess">
  <img v-if="ruleForm.pj_img_e" :src="ruleForm.pj_img_e" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
                       
                       <p class="z9 fz12 mt10">图片建议尺寸600px*600px,100kb以内</p>
                       
                       
             </el-form-item> 
            
               
                 <el-form-item label="状态"  prop="pj_ms">
                              <el-select v-model="ruleForm.esj_type"   placeholder="请选择状态" class="w100">
                                                  <el-option label="未售" value="1"></el-option>
                                                  <el-option label="已售" value="2"></el-option>
                                          </el-select>
             </el-form-item> 
            
      
    </el-form>
          
        </section>
        
        
 


    
    </section>


<p class="mt40 pl40">
        <el-button type="primary" class="tijiao_der" @click="submitForm">提交</el-button>
</p>
</div>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    esj_name: "",
                    esj_jx: "",
                    esj_pp: "",
                    esj_nf: "",
                    esj_ms: "",
                    esj_img_e: "",
                    esj_type: "1"
                },
                rules: {
                    esj_name: [{
                        required: true,
                        message: '请输入二手机名称',
                        trigger: 'blur'
                    }],
                    esj_jx: [{
                        required: true,
                        message: '请输入机型',
                        trigger: 'blur'
                    }],
                    esj_pp: [{
                        required: true,
                        message: '请输入品牌',
                        trigger: 'blur'
                    }],
                    esj_nf: [{
                        required: true,
                        message: '请上传年份',
                        trigger: 'blur'
                    }],
                    
                       esj_ms: [{
                        required: true,
                        message: '请上传二手机描述',
                        trigger: 'blur'
                    }],
                       esj_img_e: [{
                        required: true,
                        message: '请上传二手机图片',
                        trigger: 'blur'
                    }],
                }
            }
        },
        components: {

        },
        methods: {
            handleAvatarSuccess(e) {
                this.ruleForm.pj_img_e = e.data.url
            },
            submitForm(formName) {
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            ssd_sd(ty) {
                if (ty == 1) {
                    this.ruleForm.ji_list.push({})
                } else {
                    this.ruleForm.ji_list_er.push({})
                }

            }
        },
        mounted() {

        },
    }

</script>
<style>
    .el-form-item__content {
        line-height: 1 !important;
    }

    .ss_dert .avatar-uploader-icon {
        width: 100px !important;
        height: 100px !important;
        line-height: 100px !important;
        overflow: hidden
    }

    .ss_dert .avatar {
        width: 100px !important;
        height: 100px !important;
    }

</style>
<style scoped>
    .dsf_dd_ert {
        width: 200px;
    }

    .fg_jh_dertt {
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        padding: 5px 10px;
    }

    .tijiao_der {
        padding-left: 40px;
        padding-right: 40px;
    }

</style>
