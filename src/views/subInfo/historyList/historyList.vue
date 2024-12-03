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

<style>
.history-list {
	display: flex;
	width: 100%;
	height: 30px;

	font-size: 20px;
	font-family: sans-serif;
}
.history-list-title-description {
	overflow: hidden;
	white-space: nowrap;
	/* text-overflow: ellipsis; */
	flex: 1;
}
.history-list-handle {
	margin-right: 5px;
}
</style>
