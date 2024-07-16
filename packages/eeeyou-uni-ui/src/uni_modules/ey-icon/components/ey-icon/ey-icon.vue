<template>
  <text :style="{ color: color, fontSize: iconSize }" :class="['eyou', 'ey-' + type]"></text>
</template>

<script>
	export default {
		name: 'EyIcon',
		emits:['click'],
		props: {
			type: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#333333'
			},
			size: {
				type: [Number, String],
				default: 16
			},
		},
		data() {
			return {}
		},
		computed: {
			iconSize() {
        const reg = /^[0-9]*$/g;
		    return (typeof this.size == 'number' || reg.test(this.size))? this.size + 'rpx' : this.size;
			}
		},
		methods: {
			onClick() {
				this.$emit('click');
			}
		}
	}
</script>

<style lang="scss">
	@import '../iconfont.css';
</style>