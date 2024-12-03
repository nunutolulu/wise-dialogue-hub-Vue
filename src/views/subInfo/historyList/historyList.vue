<template>
	<div :class="`${ns}`">
		<span :class="`${ns}-title-description`">{{ data.talkTitle }}</span>
		<!-- ...的操作按钮 -->
		<span :class="`${ns}-handle`" @click="hoverHandle">&nbsp;&nbsp;...</span>
	</div>
</template>

<script setup lang="ts">
const ns = 'history-list'
const props = defineProps(['data'])
const data = props.data

const hoverHandle = () => {
	// 出现操作层--重命名-删除对话--弹出框
	console.log('此处弹出框，对相应的对话操作')
}
</script>

<style scoped>
@import url(./historyList.less);
</style>
