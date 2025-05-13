<template>
	<circlePack :options="feelingOptions" @item-click="itemClick"></circlePack>
</template>
<script setup>
	import circlePack from '@/components/circle-packer/index.vue'
	import {
		feelingOptions
	} from '@/common/enum/record';


	function itemClick(item) {
		console.log(item)
	}
</script>
<style>
</style>