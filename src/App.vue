<template>
	<!-- 在这里编写模板内容，比如可以添加一些按钮、文本等元素来与方法进行交互 -->
	<div>
		<button @click="handleClick">点击我</button>
		<p>{{ message }}</p>
	</div>
</template>

<script setup lang="ts">
import {Ref, ref} from 'vue';
// 定义响应式数据
const message: Ref<string> = ref('初始消息');
// 定义方法
const handleClick = (): void => {
	message.value = '按钮被点击后更新的消息';
};
</script>

<style scoped>
button {
	color: skyblue;
	border: 1px solid gray;
	border-radius: 4px;

	/* &:hover {
		color: blue;
	} */
}
</style>
