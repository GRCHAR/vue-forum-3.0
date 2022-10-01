<template>
  <div>
    <span>
      <el-input
      v-model="inputContent"
      class="w-50 m-2 searchInput"
      placeholder="Please Input"
      :suffix-icon="Search"
    />
      <div class="searchButton">
        <el-button>搜索</el-button>
      </div>
    </span>
    <div class="userOperation">
      
      <focus-v-ideo-list></focus-v-ideo-list>
      <login-dialog></login-dialog>
      <register-dialog></register-dialog>
     
    </div>
    
    
   
  </div>
  
  
  
</template>

<script lang="ts">
import LoginDialog from '../user/LoginDialog.vue'
export default {
  components: { LoginDialog },
    name: "top-nav",
    setup(){

    },
    data() {
        return {
            inputContent:"",
            openFocusVideoList: false
        }
    },
    methods:{
     
    }
    
}
</script>

<style>
    .searchButton {
        margin-left: 10px;
        display: inline;
    }
    .searchInput {
      width: 200px;
      margin:0 auto;
      
    }
    .userOperation {
      display: inline;
      margin-left: 30px;
    }
</style>