<template>
	<circlePack :options="moodOptions" @item-click="itemClick"></circlePack>
</template>
<script setup>
	import circlePack from '@/components/circle-packer/index.vue'
	import {
		moodOptions
	} from '@/common/enum/record';

	// 需要增加查看 健康值，使用频率，和清除缓存的功能

	function itemClick(item) {
		item.usageFrequency++
	}
</script>
<style>
</style>