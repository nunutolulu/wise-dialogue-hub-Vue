<template>
	<div :class="ns">
		<subInfo :class="`${ns}-subInfo`"></subInfo>
		<mainDialogue :class="`${ns}-mainDialogue`"></mainDialogue>
	</div>
</template>

<script setup lang="ts">
// import {Ref, ref} from 'vue'
import mainDialogue from './views/mainDialogue/mainDialogue.vue'
import subInfo from './views/subInfo/subInfo.vue'

const ns = 'entry-main'
</script>

<style scoped>
.entry-main {
	width: 100%;
	height: 98vh;
	display: flex;
}
.entry-main-subInfo {
	width: 300px;
	height: 100%;
	background-color: #f8f8f8;
	margin: 5px;
	display: flex;
	flex-direction: column;
	/* justify-content: space-between; */
}

.entry-main-mainDialogue {
	flex-grow: 1;
	margin: 3px;
	height: 100%;
	background-color: #cccccc;
	/* margin-right:5px */
}
</style>
