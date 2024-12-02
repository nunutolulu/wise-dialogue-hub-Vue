<template>
	<!-- 侧边栏的主要内容 -->
	<div :class="`${ns}`">
		<!-- 上层添加-查询 -->
		<div :class="`${ns}-top`">
			<button :class="`${ns}-add-button`" @click="addDialogue">
				<span :class="`${ns}-add-icon`"
					><el-icon><Plus /></el-icon
				></span>
				<span :class="`${ns}-add-description`">&nbsp;&nbsp;新建对话</span>
			</button>
			<div :class="`${ns}-search`">
				<el-icon><Search /></el-icon>
			</div>
		</div>

		<!-- 中层-历史list -->
		<div :class="`${ns}-history-list`">
			<!-- 根据数据列表遍历产生结果 -->
			<div v-for="item of historyListMockData" :key="item.id">
				<historyList :data="item"></historyList>
			</div>
		</div>
		<!-- 下层-user信息 -->
		<div :class="`${ns}-user-info`">这里是user信息</div>
	</div>
</template>

<script setup lang="ts">
import historyList from './historyList/historyList.vue'
import {historyListMockData} from './config'
import {onMounted} from 'vue'

const ns = 'subInfo'

// 添加对话框
const addDialogue = () => {
	// 右侧出现全新的对话
	// 接口发送
}

onMounted(() => {
	// 发送历史接口获取数据
})
</script>

<style>
.subInfo-top {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.subInfo-search {
	height: 35px;
	width: 35px;
}
.subInfo-add-button {
	height: 35px;
	width: 200px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-radius: 15px;
	border: none;
	background-color: #f0f8ff;
}
.subInfo-add-icon {
	height: 12px;
	width: 12px;
}
.subInfo-add-description {
	font-size: 18px;
	font-family: sans-serif;
}
.subInfo-history-list {
	display: flex;
	flex-direction: column;
	width: 100%;
}
.subInfo-user-info {
	position: fixed;
	bottom: 0;
}
</style>
