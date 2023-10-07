<template>
	<div class="footer">
		<div class="list" ></div>
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
.footer {
	background: #080255;
	padding: 0.5rem 0;
	text-align: left;
	font-size: 14px;
}
.footer .list {
	font-family: "Scto Grotesk A";
	font-weight: normal;
	font-size: 14px;
	font-weight: bold;
	color: #FFF;
	color: #942ffb;
}
</style>