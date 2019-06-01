<!--新增机型-->
<template>
<div >

   <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">零配件管理</el-breadcrumb-item>
  <el-breadcrumb-item>新增零件</el-breadcrumb-item>
</el-breadcrumb>
    
    <section class="br pt10 pm10 pd br mt20 yj4">
        <p class="bghs fz14 pt10 pm10 pd">
           零配件信息
        </p>
        <section class="sd_df_er pt40">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px"  class="demo-ruleForm">
            <el-form-item label="零配件名称"  prop="pj_name">
                          <el-input  placeholder="" v-model="ruleForm.pj_name" ></el-input>
             </el-form-item> 
            <el-form-item label="零配件产品号"  prop="pj_cph">
                          <el-input  placeholder="" v-model="ruleForm.pj_cph" ></el-input>
             </el-form-item> 
            
                  <el-form-item label="零配件件号"  prop="">
                <section class="f_b">
    
       
                         <section class="dsf_dd_ert mb10" v-for="sd in ruleForm.ji_list ">
                                <el-input  placeholder="" ></el-input>
                        </section>
                         </section>
                
                <span class="ls ml10 fg_jh_dertt sz" @click="ssd_sd(1)">+继续添加件号</span>
                
              
                <p class="qc"></p>
        
             </el-form-item> 
            
            
            
            <el-form-item label="描述"  prop="pj_ms">
                          <el-input  placeholder="年份，机型，产地等信息" v-model="ruleForm.pj_ms" ></el-input>
             </el-form-item> 
            
            
            
                   <el-form-item label="零配件图"  prop="pj_img_e">
                       
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
            
                    <el-form-item label="是否为总成"  prop="ji_name">
                       <section class="mt15 pm20">
      <el-radio v-model="ruleForm.is_sdfg" label="是"></el-radio>
                         <el-radio  v-model="ruleForm.is_sdfg" label="否"></el-radio>
            </section>
                        <section v-if='ruleForm.is_sdfg=="是"'>
                        
                        <section class="f_b">
    
       
                         <section class="dsf_dd_ert mb10" v-for="sd in ruleForm.ji_list_er ">
                                <el-input  placeholder="" ></el-input>
                        </section>
                         </section>
                
                <span class="ls ml10 fg_jh_dertt sz" @click="ssd_sd(2)">+继续添加件号</span>
                </section>
              
                <p class="qc"></p>
             </el-form-item> 
            
            
      
    </el-form>
          
        </section>
        
        
          <p class="bghs fz14 pt10 pm10 pd">
           价格库存
        </p>
        <section class="sd_df_er pt40">
             <el-form :model="ruleForm_er" label-width="120px"  class="demo-ruleForm">
            <el-form-item label="规格"  prop="guige">
                          <el-input  placeholder="" v-model="ruleForm_er.guige" ></el-input>
             </el-form-item> 
                        <el-form-item label="价格"  prop="jaige">
                         
 <el-input placeholder="请输入价格" v-model="ruleForm_er.jaige">
    <template slot="prepend">￥</template>
  </el-input>


             </el-form-item> 
                        <el-form-item label="库存"  prop="kucun">
                          <el-input  placeholder="" v-model="ruleForm_er.kucun" ></el-input>
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
                    pj_name: "",
                    pj_cph: "",
                    ji_list: [{}],
                    pj_ms: "",
                    pj_img_e:"",
                    is_sdfg:"是",
                    ji_list_er:[{},{}]
                },
                ruleForm_er:{
                    guige:"",
                    jaige:"",
                    kucun:""
                    
                },
                rules: {
                    pj_name: [{
                        required: true,
                        message: '请输入零配件名称',
                        trigger: 'blur'
                    }],
                    pj_cph: [{
                        required: true,
                        message: '请输入零配件产品号',
                        trigger: 'blur'
                    }],
                    pj_ms: [{
                        required: true,
                        message: '请输入描述',
                        trigger: 'blur'
                    }],
                       pj_img_e: [{
                        required: true,
                        message: '请上传零配件图',
                        trigger: 'blur'
                    }],
                }
            }
        },
        components: {

        },
        methods: {
            handleAvatarSuccess(e){
                this.ruleForm.pj_img_e=e.data.url
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
            ssd_sd(ty){
                if(ty==1){
                       this.ruleForm.ji_list.push({}) 
                }else{
                       this.ruleForm.ji_list_er.push({}) 
                }
            
            }
        },
        mounted() {

        },
    }

</script>
<style>
   .el-form-item__content{
         line-height: 1  !important;
    }
    .ss_dert .avatar-uploader-icon {
    width: 100px !important;
        height: 100px  !important;
       line-height: 100px !important;
        overflow: hidden
}
    .ss_dert  .avatar{
        width: 100px !important;
        height: 100px  !important;
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
    .tijiao_der{
        padding-left: 40px;
        padding-right: 40px;
    }
  
</style>
