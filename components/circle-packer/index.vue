<template>
	<view style="100%;height:100%;" class="flex items-center justify-center items-center"
		:style="{padding:padding +'px'}">
		<view ref="circlePackContainer"></view>
	</view>
</template>

<script>
	import {
		nextTick
	} from 'vue';
	import {
		CirclePacker
	} from '@/static/circlepacker.esm.js';

	export default {
		props: {
			options: {
				default: () => []
			},
			padding: {
				default: 20
			},
			aspectRatio: {
				default: 1.5
			}
		},
		data() {
			return {
				rpxRatio: 1, // rpx * rpxRatio = px
				DRAG_THRESHOLD: 10,
				containerEl: null,
				bounds: {
					width: 300,
					height: 300
				},
				target: {
					x: 150,
					y: 150
				},
				isDragging: false,
				pinnedCircleId: null,
				damping: 0.025,
				circles: [],
				circleEls: {},
				packer: null
			};
		},
		mounted() {
			// 获取设备信息，初始化布局尺寸
			uni.getSystemInfo({
				success: (res) => {
					const screenWidth = res.windowWidth; // 屏幕宽度
					const screenHeight = res.windowHeight; // 屏幕高度

					this.rpxRatio = screenWidth / 750;

					let width = screenWidth - this.padding * 2
					let height = width * this.aspectRatio

					this.bounds = {
						width: width,
						height: height
					};

					this.target = {
						x: width / 2,
						y: height / 2
					};

					// 获取容器 DOM 元素
					this.containerEl = this.$refs.circlePackContainer.$el;
					this.containerEl.style.position = 'relative';
					this.containerEl.style.width = `${width}px`;
					this.containerEl.style.height = `${height}px`;

					this.initPacker();
				}
			});
		},
		beforeDestroy() {
			// 销毁 packer 实例，清理 DOM 和事件绑定，避免内存泄漏
			if (this.packer) {
				this.packer.stop(); // 停止动画循环
				this.packer = null;
			}

			if (this.containerEl) {
				this.containerEl.innerHTML = ''; // 清空容器 DOM 内容
			}

			this.circleEls = {};
			this.circles = [];
		},
		methods: {
			rpxToPx(rpx) {
				return rpx * this.rpxRatio;
			},

			// 计算大小
			calcSize(options) {
				const minSize = 20; // size的最小值
				const maxSize = 60; // size的最大值

				// 找到feelingOptions中最大值的usageFrequency
				const maxUsage = Math.max(...options.map(option => option.usageFrequency));

				function calculateSize(usageFrequency) {
					// 如果usageFrequency为0，直接返回最小值
					if (usageFrequency === 0) {
						return minSize;
					}

					// 使用对数映射公式
					const size = minSize + (maxSize - minSize) * Math.log(usageFrequency + 1) / Math.log(maxUsage + 1);
					return Math.round(size); // 返回整数
				}

				// 为每个元素计算size
				options.forEach(option => {
					option.radius = calculateSize(option.usageFrequency);
				});
			},

			// 初始化 CirclePacker 实例
			async initPacker() {
				// 清空现有数据
				this.clearCircles();

				// 重新计算圆形大小
				this.calcSize(this.options)

				// 重新初始化圆形数组
				this.circles = this.options.map((item) => {
					return this.createCircle(null, null, item.radius, item)
				});

				// 初始化 CirclePacker
				this.packer = new CirclePacker({
					bounds: this.bounds,
					target: this.target,
					circles: this.circles,
					onMove: this.render,
					collisionPasses: 2,
					centeringPasses: 2,
					correctionPasses: 3,
					noWorker: true,
					animationLoop: true,
				});


				setTimeout(() => {
					this.packer.destroy()
				}, 333)
			},

			// 清空现有的圆形
			clearCircles() {
				// 使用 removeCircle 方法逐个移除圆形
				const circleIds = Object.keys(this.circleEls);
				circleIds.forEach(id => {
					this.removeCircle(id); // 使用 removeCircle 方法删除圆形
				});

			},

			// 刷新方法
			refresh() {
				this.initPacker(); // 重新初始化
			},

			// 添加随机圆形
			addRandomCircle() {
				this.packer.addCircle(this.createCircle());
			},

			// 创建圆形
			createCircle(x, y, radius, item) {
				radius = radius || this.random(this.rpxToPx(30), this.rpxToPx(100));
				x = x || this.random(radius, this.bounds.width - radius);
				y = y || this.random(radius, this.bounds.height - radius);

				const id = `circle-${this.random(0, 1000, true)}-${Date.now()}`;
				const circle = {
					id: id,
					radius: radius,
					position: {
						x,
						y
					}
				};


				const circleEl = document.createElement('div');
				circleEl.id = id;
				circleEl.style.width = `${radius * 2}px`;
				circleEl.style.height = `${radius * 2}px`;
				circleEl.style.borderRadius = '50%';
				circleEl.style.backgroundColor = '#aaa';
				circleEl.style.position = 'absolute';
				circleEl.style.display = 'flex'
				circleEl.style.alignItems = 'center'
				circleEl.style.justifyContent = 'center'
				circleEl.style.fontSize = '.7em'
				circleEl.style.color = '#fff'
				circleEl.style.textAlign = 'center'
				circleEl.style.fontWeight = 'bold'
				circleEl.style.boxShadow = `rgba(149, 157, 165, 0.2) 0px 8px 24px`

				circleEl.onclick = () => {
					this.$emit('item-click', item)
				}

				// let inner = document.createElement('view');
				
				if (item) {
					circleEl.style.backgroundColor = item.backgroundColor
					circleEl.style.color = item.color
					circleEl.innerHTML = item.label
				}

				this.containerEl.appendChild(circleEl);
				this.circleEls[id] = circleEl;

				return circle;
			},

			// 移除随机圆形
			removeRandomCircle() {
				const ids = Object.keys(this.circleEls);
				const idToDelete = ids[this.random(0, ids.length, true)];
				this.removeCircle(idToDelete);
			},

			// 移除指定圆形
			removeCircle(id) {
				if (this.packer) {
					this.packer.removeCircle(id);
				}
				const circleEl = this.circleEls[id];
				if (circleEl) {
					this.containerEl.removeChild(circleEl);
				}
				delete this.circleEls[id];
			},

			// 渲染圆形的位置
			render(circles) {
				for (let id in circles) {
					const circleEl = this.circleEls[id];
					if (circleEl) {
						const circle = circles[id];
						circleEl.style.transform =
							`translate(${circle.position.x - circle.radius}px, ${circle.position.y - circle.radius}px)`;
					}
				}
			},

			// 生成随机数
			random(min, max, intResult) {
				const result = min + Math.random() * (max - min);
				return intResult ? Math.floor(result) : result;
			}
		}
	};
</script>

<style>
</style>