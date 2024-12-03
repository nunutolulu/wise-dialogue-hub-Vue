<template>
	<!-- 用户信息登录态 -->
	<div :class="`${ns}`">
		<div :class="`${ns}-userInfoShow`">
			<span :class="`${ns}-avatar`">
				<el-avatar :icon="UserFilled"></el-avatar>
			</span>
			<span>&nbsp;&nbsp;{{ userInfoMockData.email }}</span>
		</div>
		<!-- 右侧下拉菜单 -->
		<div :class="`${ns}-userHandle`">
			<el-dropdown @command="handleCommand" placement="top-start">
				<el-icon class="el-icon--right"><arrow-down /></el-icon>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item :icon="CloseBold" command="userLogout"
							>退出登录</el-dropdown-item
						>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>

<script setup lang="ts">
import { userInfoMockData } from './config'
import { UserFilled, ArrowDown, CloseBold } from '@element-plus/icons-vue'
// import { ElMessage } from 'element-plus'
const ns = 'userInfo'

const handleCommand = (command: string) => {
	console.log(command)
}
</script>

<style scoped>
@import url(./userInfo.less);
</style>
