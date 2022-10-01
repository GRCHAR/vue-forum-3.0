<template>
     <el-popover
    placement="bottom-start"
    title="Title"
    :width="250"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <el-button type="text">动态</el-button>
    </template>
    <div id="videoList">
        <el-scrollbar height="400px" @scroll="scroll_list">
    <p v-for="item in pageSize" :key="item" class="scrollbar-demo-item">
      <el-card style="height:125px" body-style="{ padding: '0px'}">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
          
        />
        <div style="padding: 14px">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card></p>
      <p class="moreVideo" style="height: 10px"><el-button type="text">显示更多</el-button></p>
     
  </el-scrollbar>
    </div>
    
    
  </el-popover>
</template>

<script lang="ts">
import type { List } from 'lodash';
import { ref } from 'vue';
class scroll_list_number {
    scrollTop!: number;
    scrollLeft!: number;

}

export default {
    name: "focus_video_list",
    // data() {
    //     return {
    //         scrollTopLast: -1,
    //         pageSize: 5
    //     }
    // },

    setup() {
        const scrollTopLast = ref(-1);
        const pageSize = ref(5);
        function  scroll_list(scroll_number: scroll_list_number) {
            // console.log(scrollTop, scrollLeft)            
            let video_list = document.getElementById("videoList")
            let scrollTop: number;

            
            scrollTop = scroll_number.scrollTop;
            
            
            if (video_list != null) {
                console.log(video_list.scrollHeight, scrollTop, video_list.clientHeight)
            }
            if (video_list != null  && scrollTop > pageSize.value*125 -390) {
                pageSize.value++
            }
            
        }
        return {
            scrollTopLast,
            pageSize,
            scroll_list
        }
    },
    computed:{
        
    }
}
</script>

<style>
    .moreVideo {
        text-align: center;
    }
</style>