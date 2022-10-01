<template>
  <el-row>
    <el-col v-for="(o,) in pageSize" :key="o" :span="4" :gutter="2" class="video_col">
      <el-card :body-style="{ padding: '0px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image" />
        <div style="padding: 14px">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">

import { reactive, ref } from '@vue/reactivity';
import { VideoListApi } from '@/api/video/videoList';
// import { videoListApi } from '@/api/video/videoList'

const videoListApi = new VideoListApi()

const currentDate = ref(new Date())
const pageSize = ref(12)
const pageIndex = ref(0)
const videoList = ref([])
const pageTotal = ref(0)
const searchName = ref("")
const type = ref("")

function getVideo() {
  const param = {
    keyword: searchName.value,
    size: pageSize.value,
    number: pageIndex.value,
    type: type.value,
  }
  videoListApi.apiGetVideoList(param).then((res) => {
    videoList.value = res.data.videos
  }).catch((error) => {
    console.log("err:", error)
  })
}

function getTotal() {
  const param = {
    keyword: searchName.value,
    type: type.value
  }
  videoListApi.apiGetVideoTotal(param).then((res) => {
    pageTotal.value = res.data.count
  }).catch((error) => {
    console.log("err:", error)
  })
}

</script>

<style>
.video_col {
  margin-left: 2%;
  margin-top: 2%;
}
</style>