<template>
	<div :class="`${ns}`">
		<div :class="`${ns}-title`">
			<span :class="`${ns}-versionTag`">wise-dialogue-hub</span>
		</div>
		<div :class="`${ns}-interaction`">
			<div :class="`${ns}-dialogue`">
				<single-dialogue></single-dialogue>
			</div>
		</div>
		<div :class="`${ns}-input`">
			<el-input
				v-model="inputInfo"
				placeholder="请输入"
				:prefix-icon="Search"
				clearable>
			</el-input>
		</div>
	</div>
</template>

<script setup lang="ts">
import singleDialogue from './singleDialogue/singleDialogue.vue'
import {Search} from '@element-plus/icons-vue'
import {ref} from 'vue'

const ns = 'main-dialogue'
const inputInfo = ref('')
</script>

<style scoped>
@import url(./mainDialogue.less);
</style>
