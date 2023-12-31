<template>
	<view class="container">
		<view class="example-title"> 基础用法： </view>
		<view class="example-btnInput">
			<input disabled type="text" v-model="value1" placeholder="请点击右边的‘获取’按钮" />
			<button @click="doit1">获取</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value1: "",
			};
		},
		methods: {
			doit1() {
				uni.$uniQuery.getLocation((res) => {
					this.value1 = "经度:" + res.longitude + " 纬度:" + res.latitude;
				}).catch(err => {
					console.error(err);
				});
			},
		},
	};
</script>

<style lang="scss" scoped>
	.container {}
</style>