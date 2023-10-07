<template>
	<a-breadcrumb class="bc">
		<a-breadcrumb-item
			v-for="item in bcList"
			:key="item.title"
			:href="item.href"
			>{{ item.title }}</a-breadcrumb-item
		>
	</a-breadcrumb>
</template>

<script>
export default {
	data () {
		return {
			bcList: [{ title: 'Home', href: '' }, { title: 'Products', href: '' }]
		}
	},
	props: {
		list:[]
	},
	methods: {
	},
	mounted () {
	}
}
</script>

<style scoped>
.bc {
	padding: 0.2rem 0.2rem;
	text-align: left;
	font-size: 14px;
}
</style>