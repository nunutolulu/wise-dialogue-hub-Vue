<template>
	<div :class="`${ns}`">
		<div :class="`${ns}-title`">
			<span :class="`${ns}-versionTag`">wise-dialogue-hub</span>
		</div>
		<div :class="`${ns}-interaction`">
			<div :class="`${ns}-dialogue`">
				<!-- <single-dialogue
					v-for="(item, index) in msgList"
					:msg="item"
					:key="index"></single-dialogue> -->
				<single-dialogue></single-dialogue>
			</div>
		</div>
		<div :class="`${ns}-input`">
			<el-input v-model="inputInfo" placeholder="请输入" clearable>
				<template #prefix>
					<el-icon><Search /></el-icon>
				</template>
			</el-input>
			<el-button @click="sendMsg" :class="`${ns}-sendButton`"
				>发送</el-button
			>
		</div>
	</div>
</template>

<script setup lang="ts">
import singleDialogue from './singleDialogue/singleDialogue.vue'
import { Search } from '@element-plus/icons-vue'
import { nextTick, onMounted, ref } from 'vue'
import { IMsg } from '@/types/msg'

const ns = 'main-dialogue'
const inputInfo = ref('')
const msgList = ref([])

// 页面在底端
const setScrollToBottom = async () => {
	await nextTick()
	const chat = document.querySelector('.main-dialogue-dialogue')
	chat.scrollTop = chat?.scrollHeight
}

// 发送信息接口
const sendMsg = async () => {
	const keyword = inputInfo.value
	if (keyword.length > 0) {
		const msg: IMsg = {
			answer: keyword,
			question: 'AI生成中...'
		}

		msgList.value.push(msg)
		console.log(msgList.value, msg)
		inputInfo.value = ''
		setScrollToBottom()

		// const response = await fetch('/chat', {})
	}
}
onMounted(() => {})
</script>

<style scoped>
@import url(./mainDialogue.less);
</style>
