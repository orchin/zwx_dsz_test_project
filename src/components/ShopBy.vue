<template>
	<div class="leftpart">
		<div class="title">SHOP BY</div>
		<div class="content"></div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			name: ''
		}
	},
	props: {
		msg: String
	},
	methods: {
	},
	mounted () {
	}
}
</script>

<style scoped>
.leftpart {
	padding: 0.1rem 0;
	text-align: left;
	font-size: 14px;
}
.leftpart .title {
	font-family: "Scto Grotesk A";
	font-weight: normal;
	font-size: 17px;
	font-weight: bold;
	padding: 12px 15px;
	color: #FFF;
	background-color: #942ffb;
}
</style>