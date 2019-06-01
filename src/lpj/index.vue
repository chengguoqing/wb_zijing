<!--零配件管理-->
<template>
	<div class="pm40">
    <section v-if="$route.path=='/'">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '' }">零配件管理</el-breadcrumb-item>
        </el-breadcrumb>
            <section class="br pt10 pm10 pd br mt20 yj4">
              
                <section class="mt30">
                    <el-button type="primary" @click="hf('add_lpj')">新增零配件</el-button>
                    <el-button type="primary" class="ml20" @click="hf('add_lj')">新增机型</el-button>
        </section>
            <section class="mt15 bghs pd pt20 pm20">
        <el-row :gutter="20">
            <el-col :span="6">
        <p class="pr">
            <i class="el-icon-search dfds_sdder"></i>
        <el-input placeholder="搜索 可输入件号图号商品名" class="ssd_dert"></el-input>
        </p>
    </el-col>
         <el-col :span="4">
            <el-button type="primary">查询</el-button>
    </el-col>
        </el-row>
                
            <el-row :gutter="10" class="mt20">
                <el-col :span="6">
           <el-row :gutter="20">
               <el-col :span="5" class="z6 fz14 pt10 tr">品牌</el-col>
            <el-col :span="19">
                    <el-select v-model="pih_a"   placeholder="请选择品牌" class="w100">
                                <el-option label="品牌1" value="1"></el-option>
                                 <el-option label="品牌2" value="2"></el-option>
                        </el-select>
    </el-col>        
           </el-row>
            </el-col>
                
                        <el-col :span="6">
           <el-row :gutter="20">
               <el-col :span="5" class="z6 fz14 pt10 tr">类别</el-col>
            <el-col :span="19">
                    <el-select v-model="pih_d"   placeholder="请选择类别" class="w100">
                                <el-option label="类别1" value="1"></el-option>
                                 <el-option label="类别2" value="2"></el-option>
                        </el-select>
    </el-col>        
           </el-row>
            </el-col>
                
                     <el-col :span="6">
           <el-row :gutter="20">
               <el-col :span="5" class="z6 fz14 pt10 tr">机型</el-col>
            <el-col :span="19">
                    <el-select v-model="pih_b"   placeholder="请选择机型" class="w100">
                                <el-option label="机型1" value="1"></el-option>
                                 <el-option label="机型2" value="2"></el-option>
                        </el-select>
    </el-col>        
           </el-row>
            </el-col>
                
                
                
                     <el-col :span="6">
           <el-row :gutter="20">
               <el-col :span="5" class="z6 fz14 pt10 tr">布套</el-col>
            <el-col :span="19">
                    <el-select v-model="pih_c"   placeholder="请选择品牌" class="w100">
                                <el-option label="布套1" value="1"></el-option>
                                 <el-option label="布套2" value="2"></el-option>
                        </el-select>
    </el-col>        
           </el-row>
            </el-col>
                
                  
                
                
                
                
            </el-row>   
                
        </section>
                

              <el-row :gutter="10" >
                  <el-col :span="4" v-for="(sd,idx) in list_Sdf" class="mt20"  >
    
     <el-card :body-style="{ padding: '0px' }" class="pr dfgd_sd_df " >
     <section @click="hf('mingxi')">
         <p class="pr">
               <span @click.stop="sd.cls?sd.cls='':sd.cls='act'">
                <img src="../assets/img/gou.png" class="fdsf_jh_deer" v-if="sd.cls=='act'">
             <i class="fdsf_jh_deer ab" v-else></i>
            </span>
         <img src="../assets/img/lingjian.jpg" class="image w100 cz">
        </p>
 
      <div class="pd pt10">
        <p class="fz14 z3">
            件号:238445644
        </p>
           <p class="fz14 z3 mt5">
            图号:238445644
        </p>
          
        <el-row class="pt10 pm10">
            <el-col :span="8" class="red fz12">￥2349</el-col>
         <el-col :span="8" class="z9 fz12 cen">库存27</el-col>
                     <el-col :span="8" class="tr fz12 ls sz"><span  @click.stop="hf('add_lpj')">编辑</span> </el-col>
        </el-row>  
          
          
      </div>
         
         </section>
    </el-card>
    </el-col>
              </el-row>
                
                
                <section class="mt40">
        <el-checkbox v-model="checked">全选</el-checkbox>
                        <el-button >下架</el-button>
                      <el-button >删除</el-button>
                </section>
                
                
    </section>
        
    
    </section>    
        
	  <router-view v-else/>

	</div>
</template>
<script>
    export default {
        data() {
            return {
                pih_a: "",
                pih_b: "",
                pih_c: "",
                pih_d:"",
                checked: false,
                list_Sdf: [{
                    cls: "",
                }, {
                    cls: "",
                }, {
                    cls: "",
                }, {
                    cls: "",
                }, {
                    cls: "",
                }, {
                    cls: "",
                }, {
                    cls: "",
                }, {
                    cls: "",
                }, {
                    cls: "",
                }, {
                    cls: "",
                }, {
                    cls: "",
                }, {
                    cls: "",
                }, {
                    cls: "",
                }, {
                    cls: "",
                }, {
                    cls: "",
                }, {
                    cls: "",
                }, ]
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {
            console.log(this.$route);
        },
        watch: {
            checked: {
                handler: function() {
                   if(this.checked){
                       this.list_Sdf.map(a=>{
                           a.cls="act"
                       })
                   }else{
                        this.list_Sdf.map(a=>{
                           a.cls=""
                       }) 
                   }
                },
                deep: true
            }
        }
    }

</script>
<style>
    .ssd_dert input {
        text-indent: 20px;
    }

</style>
<style scoped>
    .dfds_sdder {
        position: absolute;
        left: 10px;
        top: 8px;
        z-index: 1000
    }

    .goxuuan_der {
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 60px;
        display: none
    }

    .dfgd_sd_df.act {
        border: 1px solid #fe3842
    }

    .dfgd_sd_df.act .goxuuan_der {
        display: block
    }

</style>
