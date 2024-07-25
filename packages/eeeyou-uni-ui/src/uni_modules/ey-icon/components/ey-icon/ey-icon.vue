<template>
	<text :style="{ color: color, fontSize: iconSize }" :class="['eyou', 'ey-icon', 'ey-' + type]"></text>
</template>

<script>
import icon from "../icon.module.scss";
export default {
	name: 'EyIcon',
	emits: ['click'],
	options: {
    virtualHost: true,
  },
	props: {
		type: {
			type: String,
			default: ''
		},
		color: {
			type: String,
			default: icon.borderColor,
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
			return (typeof this.size == 'number' || reg.test(this.size)) ? this.size + 'rpx' : this.size;
		}
	},
	methods: {
		onClick() {
			this.$emit('click');
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../iconfont.css';

.ey-icon {
	font-weight: bold;
}
</style>