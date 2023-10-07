<template>
	<div class="notfount">
		<Header />
		<Secbar />
		<div class="main-container">
			<div>404</div>
			<h1>Incomplete Page</h1>
			<h1>or Page Not Found !</h1>
		</div>
		<Footer />
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Secbar from '@/components/SecondBar.vue'
export default {
	name: '',
	components: {
		Header,
		Secbar,
	}
}
</script>

<style scoped>
.main-container {
	padding: 1rem 0;
	text-align: center;
	font-size: 1rem;
	font-weight: bolder;
	line-height: 1.2;
}
.main-container h1 {
	font-size: 0.6rem;
	font-weight: bold;
}
</style>