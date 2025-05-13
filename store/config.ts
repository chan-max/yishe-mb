

import { defineStore } from "pinia"
import { ref } from 'vue'
import Api from '@/common/api/api'

export async function initConfigStoreBasicConfig() {
	const configStore = useConfigStore()
	const config = await Api.getBasicConfig()
	configStore.$patch(config as any)
}

export const useConfigStore = defineStore("global_config", () => {

	const ok = ref(false)

	// 文件对象存储
	const cos = ref()

	const json = ref({} as any)
	// 本地配置，可以通过json文件修改
	fetch('/static/project.config.json')
		.then(response => {
			if (!response.ok) {
				console.log('project.config.json laod error')
			}
			return response.json();
		})
		.then(data => {
			json.value = data
		})
		.catch(error => {
			console.log('project.config.json laod error')
		});


	// uni.getSystemInfo({
	// 	success: (res) => {
	// 		const screenWidth = res.windowWidth; // 屏幕宽度,单位为px
	// 		const screenHeight = res.windowHeight; // 屏幕高度,单位为px
	// 	},
	// });

	return {
		ok,
		cos,
		json
	}
})