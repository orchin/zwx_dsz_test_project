<template>
  <div class="home">
    <Header />
    <Secbar />
	<div class="main-container">
		<Breadcrumb />
		<div class="compose">
			<div class="compose-left">
				<ShopBy />
				<CompareProducts />
			</div>
			<div class="compose-right">
				<ProductsList />
			</div>
		</div>
	</div>
	<Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Secbar from '@/components/SecondBar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import ShopBy from '@/components/ShopBy.vue'
import CompareProducts from '@/components/CompareProducts.vue'
import ProductsList from '@/components/ProductsList.vue'

export default {
  name: 'Home',
  components: {
	Header,
	Footer,
	Secbar,
	Breadcrumb,
	ShopBy,
	CompareProducts,
	ProductsList,
  }
}
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  padding: 0;
  margin: 0;
}
</style>
<style scoped>
.main-container{
	padding: 0;
	position: relative;
}
.compose{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
}
.compose-left{
	width: 21%;
	display: flex;
	flex-direction: column;
}
.compose-right{
	width: 75%;
}
/* ========================================================== */
.mobile .compose{
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
}
.mobile .compose-left{
	width: 100%;
	padding: 0 .2rem;
}
.mobile .compose-right{
	width: 100%;
	padding: .2rem 0;
}
</style>
