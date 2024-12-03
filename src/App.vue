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
@import url(./index.less);
</style>
