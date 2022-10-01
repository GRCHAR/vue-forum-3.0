<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import top_nav from './components/common/top_nav.vue';
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
 
  <div class="common-layout">
    <el-container>
      <el-header><top_nav></top_nav></el-header>
      <el-main><RouterView/></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>

  
</template>


<script lang="ts">
export default {
  data() {
    return {
      indexName: "test"
    }
  },
  components:{
    // HelloWorld
    top_nav
  }
}
</script>

<style>

</style>
<style>

</style>
