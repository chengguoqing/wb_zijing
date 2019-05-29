<!--二手手机管理-->
<template>
	<div class="pm40">
    <section v-if="$route.path=='/esj'">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '' }" >二手机管理</el-breadcrumb-item>
        </el-breadcrumb>
            <section class="br pt10 pm10 pd br mt20 yj4">
              
                <section class="mt30">
                    <el-button type="primary" @click="hf('esj/add_esj')">新增二手机</el-button>
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
                <el-col :span="4">
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
                
                
                
                     <el-col :span="4">
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
                
                
                
                   
                
                   <el-col :span="4">
                       
                 <el-button type="primary">筛选</el-button>    <span class="ls fz14  sz ml10">清空产品删选条件</span>       
    </el-col>
                
                
                
                
            </el-row>   
                
        </section>
                

              <el-row :gutter="20" >
                  <el-col :span="4" v-for="(sd,idx) in list_Sdf" class="mt20"  >
    
     <el-card :body-style="{ padding: '0px' }" class="pr dfgd_sd_df " :class="sd.cls">
     <section @click="sd.cls?sd.cls='':sd.cls='act'">
         <p class="pr">
                 <img src="../assets/img/gouxuan.png" class="goxuuan_der">
         <img src="../assets/img/lingjian.jpg" class="image w100 cz">
        </p>
 
      <div class="pd pt10">
     
          
        <el-row class="pt10 pm20">
            <el-col :span="12" class="red fz16">￥2349</el-col>
                     <el-col :span="12" class="tr fz14 ls">
                         <span @click="hf('esj/add_esj')" class="sz">编辑</span>
                         </el-col>
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
