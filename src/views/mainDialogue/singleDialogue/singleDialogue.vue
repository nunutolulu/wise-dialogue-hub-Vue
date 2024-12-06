<template>
	<div :class="`${ns}`">
		<!-- 问题 -->
		<div style="text-align: right">
			<div :class="`${ns}-question`">{{ msg.question }}</div>
		</div>
		<!-- 回答 -->
		<div style="text-align: left">
			<div :class="`${ns}-answer`">{{ msg.answer }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// import { IMsg } from '@/types/msg'
import { msg } from './config'
console.log(msg, 'msg---singleDialogue----vue')
const ns = 'dialogue-chat'
// const props = defineProps(['msg'])
// const msg: IMsg = props.msg
// console.log('singleDialogue', msg)
</script>

<style scoped>
@import url(./singleDialogue.less);
</style>
