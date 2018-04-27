<template>
  <div class="login-page before">
      <div class="login-wrap">
        <div class="login-head">
            <img src="../assets/images/8223856_03.png" width="75"/>
        </div>
        <group class="group">
          <x-input  v-model="form.value1"  placeholder="请输入用户名">
            <span slot="label" class="el-icon-fa-user size20"></span>
          </x-input>
          <x-input  v-model="form.passWord" type='password' placeholder="请输入密码">
            <span slot="label" class="el-icon-fa-lock size20"></span>
          </x-input>
          <selector ref="defaultValueRef" direction="rtl" :options="list" v-model="defaultLangage"></selector>
         </group>
       
        <div style="padding:15px;">
          <x-button type="primary" @click.native="login">登　录</x-button>
        </div>
        <div class="find-pass text-right">
          <router-link :to="{path:'/FindPass'}"
          >忘记密码？立即找回</router-link>
        </div>
 
       
      </div>
  </div>
</template>
<i18n>
  select address: zh-CN: 选择地址
</i18n>
<script>
  import Vue from "vue";
  import {
    Selector,
    XInput,
    Cell,
    XHeader,
    Grid,
    GridItem,
    Tabbar,
    TabbarItem,
    CellBox,
    Group,
    ViewBox,
    XAddress,
    ChinaAddressV4Data,
    Swiper,
    XButton 
  } from "vux";
  export default {
    name: "login-page",
    components: {
      Selector,
      XInput,
      XButton,
      Swiper,
      XAddress,
      ChinaAddressV4Data,
      Cell,
      XHeader,
      Grid,
      GridItem,
      Tabbar,
      TabbarItem,
      CellBox,
      Group,
      ViewBox
    },
    data() {
      return {
        defaultLangage:'ch',
         list: [{key: 'ch', value: '中文'}, {key: 'en', value: 'English'}],
         form:{
           value1:'',
           passWord:''
         }
      }
    },
    methods: {
      login(){
        this.$router.replace('/Home');
      }
    }
  };

</script>
<style scoped>
.size20{
  font-size: 20px!important;
  padding-right: 10px;
      /* color: #949494; */
  color: #ff7800;
}
 .login-page{
   width: 100%;
   height: 100%;
   /* background-image: url(../assets/images/login_1.png);
   background-repeat: no-repeat;
   background-size: cover;*/
   text-align: center; 
 }

 .login-wrap{
       width: 100%;
    display: inline-block;
    background-color: #fff;
    vertical-align: middle;
    border-radius: 2px;

    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
</style>
