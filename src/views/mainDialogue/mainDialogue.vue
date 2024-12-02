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

<style>
.main-dialogue-title {
	font-size: 36px;
}
.main-dialogue-input {
	position: fixed;
	bottom: 0;
	height: 50px;
	width: 100%;
}
</style>
