<template>
	<div class="products-list">
		<div class="products-pagination">
			<a-pagination @change="pgChange" @showSizeChange="sizeChange" :total="total" :page-size="pageSize" :show-total="(total, range) => `${range[0]}-${range[1]} of ${total} items`" />
		</div>
		<div class="products-categorie">{{ categorie }}</div>
		<div class="products-content">
			<div class="item" v-for="item in mokeList"
			:key="item.name">
			<img :src="item.img"/>
			<div class="name">{{ item.name }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			total: 300,
			pageSize: 20,
			categorie:'NEW ARRIVALS',
			// range
			mokeList:[
				{name:'2 X HEPA Filters For DYSON V15 Detect Stick Vacuum Cleaners',img:'https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/6068d5cefa699ab05f6ba1691d405e85/V/4/V424-DY-V15FILTX2-95322-00.jpg'},
				{name:'30 x Paper Dust Bags for Pacvac Superpro 700 Series',img:'https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/0431964d529778e9c7f6004101838dac/V/4/V424-AF-PV30-95321-00.jpg'},
				{name:'10 X Sauber Intelligence, Classic and Excellence Synthetic Vacuum Bags',img:'https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/031d1b3860b5195600a67790862ef225/V/4/V424-BG-SAUBER10-95320-00.jpg'},
				{name:'Battery for Dyson V10 SV12, SV27 vacuum cleaners',img:'https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/4238b42e1ab9ab47d04ec152e81a38f9/V/4/V424-DY-BATV10-95319-00.jpg'},
				{name:'Hepa Filter For Xiaomi Roborock S6, S5, E35, E20 & Mi',img:'https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/90735f4e9b99dab5542f1b9d31628384/V/4/V424-XI-FILTS6-95318-00.jpg'},
				{name:'10 X Washable Mopping Pads For Ecovacs Deebot Ozmo 700, 750, 920, 950, N7 & T5 Robot Vacuum Cleaners',img:'https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/ac6ddcf26578b1d77ff94e7f251bb7e4/V/4/V424-HY-PADDE-10-95317-00.jpg'},
				{name:'3 X Pre filters for LG CordZero A9 stick vacuum cleaners',img:'https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/528df3fad9a96a024bf4f5743afa0451/V/4/V424-LG-FILTA9X3-95316-00.jpg'},
				{name:'3 X  Dust bin filters for Tineco S12 S11 & X Series Pure One',img:'https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/2113ef6d6906534ea1d02a938f698b79/V/4/V424-TIN-FILTX3-95315-00.jpg'},
				{name:'2 X HEPA Filters For DYSON V15 Detect Stick Vacuum Cleaners',img:'https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/6068d5cefa699ab05f6ba1691d405e85/V/4/V424-DY-V15FILTX2-95322-00.jpg'},
				{name:'30 x Paper Dust Bags for Pacvac Superpro 700 Series',img:'https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/0431964d529778e9c7f6004101838dac/V/4/V424-AF-PV30-95321-00.jpg'},
				{name:'10 X Sauber Intelligence, Classic and Excellence Synthetic Vacuum Bags',img:'https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/031d1b3860b5195600a67790862ef225/V/4/V424-BG-SAUBER10-95320-00.jpg'},
				{name:'Battery for Dyson V10 SV12, SV27 vacuum cleaners',img:'https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/4238b42e1ab9ab47d04ec152e81a38f9/V/4/V424-DY-BATV10-95319-00.jpg'},
				{name:'Hepa Filter For Xiaomi Roborock S6, S5, E35, E20 & Mi',img:'https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/90735f4e9b99dab5542f1b9d31628384/V/4/V424-XI-FILTS6-95318-00.jpg'},
				{name:'10 X Washable Mopping Pads For Ecovacs Deebot Ozmo 700, 750, 920, 950, N7 & T5 Robot Vacuum Cleaners',img:'https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/ac6ddcf26578b1d77ff94e7f251bb7e4/V/4/V424-HY-PADDE-10-95317-00.jpg'},
				{name:'3 X Pre filters for LG CordZero A9 stick vacuum cleaners',img:'https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/528df3fad9a96a024bf4f5743afa0451/V/4/V424-LG-FILTA9X3-95316-00.jpg'},
				{name:'3 X  Dust bin filters for Tineco S12 S11 & X Series Pure One',img:'https://cdn.dropshipzone.com.au/media/catalog/product/cache/1/small_image/190x/2113ef6d6906534ea1d02a938f698b79/V/4/V424-TIN-FILTX3-95315-00.jpg'},
				
			]
		}
	},
	props: {
		msg: String
	},
	methods: {
		pgChange (page, pageSize) {
			console.log(page, pageSize)
		},
		sizeChange (current, size) {
			console.log(current, size)
		},
	},
	mounted () {
		// Apis.getAllProducts({limit:100,page_no:1}).then(res => {
		// 	console.log(res)
		// })
	}
}
</script>

<style scoped>
.products-list {
	position: relative;
	padding: 0.1rem 0;
	text-align: left;
	font-size: 14px;
}
.products-pagination {
	font-family: "Scto Grotesk A";
	font-weight: normal;
	font-size: 13px;
	color: #303030;
	padding: 10px 0;
	border-top: 1px solid #DDD;
	border-bottom: 1px solid #DDD;
}
.products-categorie{
	font-size: 30px;
    color: #626262;
    font-weight: bold;
	font-family: 'nexa_bold';
	text-align: left;
	padding: 15px 0 10px 0;
}
.products-content {
	position: relative;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	font-size: 13px;
	color: #303030;
	padding: .1rem 0;
}
.products-content .item{
	width: 22%;
	height: 0;
	padding-bottom: 22%;
	margin: 1.5%;
	background-color: #FFF;
	overflow: hidden;
	text-align: center;
}
.products-content .item img{
	width: 80%;
}
.products-content .item .name{
	width: 100%;
	text-align: left;
	font-size: 14px;
}
/* ===================================================== */
.mobile .products-content .item{
	width: 47%;
	height: 0;
	padding-bottom: 47%;
	margin: 1.5%;
}
</style>