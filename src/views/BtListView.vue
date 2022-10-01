<template>
    <div>
        <span>
            <div class="btSearch">
                <el-input v-model="searchWord" placeholder="Please input" />
            </div>
            <div class="w-50 m-2 btSearchButton">
                <el-button @click="searchBt">搜索</el-button>
            </div>
        </span>


    </div>
    <div v-if="btList.length != 0">
        <el-table :data="btList" style="width: 100%" v-loading="loading">
        <el-table-column fixed prop="name" label="名称"  />
        <el-table-column prop="hashInfo" label="磁力链接"  />
        <el-table-column fixed="right" label="Operations" >
            <template #default>
                <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
                <el-button link type="primary" size="small">Edit</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination v-model:currentPage="pageIndex" layout="prev, pager, next" :total="pageTotal" />
    </div>
    <el-empty description="无数据" v-loading="loading" v-else/>
   
</template>

<script setup lang="ts">



import { ref, type Ref, onMounted, watch } from 'vue';
import { apiGetBtList } from '@/api/bt/btSearch'

interface BtListItem {
    name: String
    hashInfo: String
}

const btList: Ref<BtListItem[]> = ref([])
const pageIndex = ref(1)
const pageSize = ref(20)
const pageTotal = ref(0)
const searchWord = ref("")
const loading = ref(false)

onMounted(() => {
    // getBtListByKeyword()
})

function searchBt() {
    pageIndex.value = 1
    getBtListByKeyword()
}

function getBtListByKeyword() {
    loading.value = true
    const params = {
        keyword: searchWord.value,
        page: pageIndex.value
    }
    apiGetBtList(params).then((res) => {
        let list: BtListItem[] = []
        console.log("res",res)
        res.data.result.hits.hits.forEach((element: { _source: BtListItem; }) => {
            console.log("element",element)
            const item = {
                name: element._source.name,
                hashInfo: element._source.hashInfo
            }
            list.push(item)
        });
        btList.value = list
        pageTotal.value = res.data.result.aggregations.count.value
        loading.value = false
    })
}

function handleClick() {

}

watch(pageIndex,async (newValue, oldValue) => {
    getBtListByKeyword()
})







</script>

<style scoped>
.btSearch {
    width: 50%;
    display: inline-block;
    text-align: center;
    margin-left: 25%;

}

.btSearchButton {
    width: 20px;
    display: inline-block;
    margin-left: 20px;
}
</style>