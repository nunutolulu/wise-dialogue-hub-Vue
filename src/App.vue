<template>
	<!-- 在这里编写模板内容，比如可以添加一些按钮、文本等元素来与方法进行交互 -->
	<!-- <div>
		<button @click="handleClick">点击我</button>
		<p>{{ message }}</p>
	</div> -->
	<div :class="ns">
		<subInfo :class="`${ns}-subInfo`"></subInfo>
		<mainDialogue :class="`${ns}-mainDialogue`"></mainDialogue>
	</div>
</template>

<script setup lang="ts">
import {Ref, ref} from 'vue'
import mainDialogue from './views/mainDialogue/mainDialogue.vue'
import subInfo from './views/subInfo/subInfo.vue'

const ns = 'entry-main'

// 定义响应式数据
const message: Ref<string> = ref('初始消息')
// 定义方法
const handleClick = (): void => {
	message.value = '按钮被点击后更新的消息'
}
</script>

<style scoped>

.entry-main {
	width: 100%;
	height: 100%;
	display: flex;
}
.entry-main-subInfo {
	width: 300px;
	height: 100%;
	background-color: #fff;
	/* margin-left:10px */
}

.entry-main-mainDialogue {
	flex-grow: 1;
	height: 100%;
	background-color: #f0f0f0;
	/* margin-right:5px */
}
</style>
