<!--零配件明细-->
<template>
<div >
   <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">零配件管理</el-breadcrumb-item>
  <el-breadcrumb-item>零配件明细</el-breadcrumb-item>
</el-breadcrumb>
    
    <section class=" pt10 pm10   mt20 yj4">
        
        <section class="sd_jh_drr">
            
            
    <section  style="height: 300px">
    
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>
    
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide>
      </swiper>
    </section>

  </section>
            
        <section class="ov pl20">
                <p class="fz24 z3 b">BBYD-8-49_书架子(零配件/二手机名称)</p>
            
            <p class="z9 fz12 mt5">
                年份,机型，产地信息(描述)
            </p>
            <p class="bghs fz12  pd pt5 pm5 mt15">
                <span class="z9 fz12">价格</span>
                <span class="fz18 red ml20">￥456.00</span>
            </p>
            
                <p class=" fz12  pd pt5 pm5 mt10">
                <span class="z9 fz12">尺寸</span>
                <span class="  ml20">300MM*6888cm</span>
            </p>
            
              <p class=" fz12  pd pt5 pm5 mt10">
                <span class="z9 fz12">库存</span>
                <span class="  ml20">1件/备货/无货</span>
            </p>
            
            
            <p class=" fz12  pd pt5 pm5 mt10">
                <span class="z9 fz12">产品号</span>
                <span class="  ml20">BBYD40-8-49</span>
            </p>
            
            <p class=" fz12  pd pt5 pm5 mt10">
                <span class="z9 fz12">件号</span>
                <span class="  ml20">884759880;fjg-48594439;843759877</span>
            </p>
            
             <p class=" fz12  pd pt5 pm5 mt10 ls sz" @click="hf('add_lpj')">编辑        
    </p>
        
        </section>
            
            
        
        
        <p class="qc"></p>
        
        
    </section>
    
    

</div>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                swiperOptionTop: {
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                swiperOptionThumbs: {
                    spaceBetween: 10,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    touchRatio: 0.2,
                    slideToClickedSlide: true
                }

            }
        },
        components: {
            swiper,
            swiperSlide
        },
        methods: {

        },
        mounted() {
            this.$nextTick(() => {
                const swiperTop = this.$refs.swiperTop.swiper
                const swiperThumbs = this.$refs.swiperThumbs.swiper
                swiperTop.controller.control = swiperThumbs
                swiperThumbs.controller.control = swiperTop
            })
        },
    }

</script>



<style lang="scss" scoped>
    .swiper-container {
        background-color: #000;
    }

    .swiper-slide {
        background-size: cover;
        background-position: center;
        &.slide-1 {
            background-image: url('https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-1.jpg');
        }
        &.slide-2 {
            background-image: url('https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-6.jpg');
        }
        &.slide-3 {
            background-image: url('https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-8.jpg');
        }
        &.slide-4 {
            background-image: url('https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-9.jpg');
        }
        &.slide-5 {
            background-image: url('https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-10.jpg');
        }
    }

    .gallery-top {
        height: 80%!important;
        width: 100%;
    }

    .gallery-thumbs {
        height: 80px!important;
        box-sizing: border-box;
        padding: 10px 0;
    }

    .gallery-thumbs .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
    }

    .gallery-thumbs .swiper-slide-active {
        opacity: 1;
    }

</style>




<style scoped>
    .sd_jh_drr {
        width: 250px;
        height: 250px;
        float: left;
        min-height: 200px;
    }

</style>
\
