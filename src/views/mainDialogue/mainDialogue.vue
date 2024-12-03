<template>
	<div>
		<div :class="`${ns}-title`"><span>wise-dialogue-hub</span></div>

		<div :class="`${ns}-input`">
			<el-input
				v-model="inputInfo"
				placeholder="请输入"
				clearable></el-input>
		</div>
	</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const ns = 'main-dialogue'
const inputInfo = ref('')
</script>

<style scoped>
@import url(./mainDialogue.less);
</style>
