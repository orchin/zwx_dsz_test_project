<template>
	<div class="secbar">
		<div class="secbar-content">
			<!-- 左-菜单 -->
			<div class="secbar-nav">
				<div>
					<a-dropdown class="cdropdown">
						<a-button style="margin-left: 8px"> CATEGORIES <a-icon type="down" /> </a-button>
						<a-menu slot="overlay">
							<a-menu-item>test1</a-menu-item>
							<a-menu-item>test2</a-menu-item>
							<a-sub-menu key="test" title="test3">
								<a-menu-item>test3-1</a-menu-item>
								<a-menu-item>test3-2</a-menu-item>
							</a-sub-menu>
						</a-menu>
					</a-dropdown>
				</div>
				<router-link class="nav" to="/index" tag="div"
					>New arrivals</router-link
				>
				<router-link class="nav" to="/index" tag="div"
					>Promotions</router-link
				>
			</div>
			<!-- 右-搜索 -->
			<div class="secbar-search">
				<div class="search">
					<i><img :src="searchIcon" /></i>
					<input
						type="text"
						v-model="searchText"
						placeholder="Search for products or suppliers..."
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import searchIcon from "@/assets/search.svg";
import Apis from "@/api/common.js";

export default {
	data () {
		return {
			searchText: '',
			searchIcon,
		}
	},
	methods: {
		toGetAuth () {
			let pdata = { "email": "test_account@dsz.com.au", "password": "asdf_123456" }
			Apis.getAuth(pdata).then(res => {
				console.log('auth=>', res)
				if (res.data && res.data.token) {
					localStorage.setItem("token", res.data.token);
					location.reload()
				}
			})
		}
	},
	mounted () {
		this.toGetAuth()
		Apis.getAllCategory().then(res => {
			console.log(res)
		}).catch(err => {
			console.log('err=>', err)
			if (err.response && err.response.data && err.response.data.code && err.response.data.code == "InvalidCredentials") {
				this.toGetAuth()
			}

		})

	}
}
</script>

<style scoped>
.secbar {
	width: 100%;
	background-color: #3b1364;
	padding: 0;
	margin: 0 auto;
	font-size: 0.2rem;
	color: #fff;
}
.secbar-nav {
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	padding: 10px;
}
.secbar-nav .nav {
	font-family: "Scto Grotesk A";
	font-weight: 500;
	font-size: 16px;
	color: #fff;
	margin: 0 15px;
	cursor: pointer;
}
.secbar-nav .cdropdown{
	font-size: 16px;
	color: #FFF;
	margin-right: 15px;
}
.secbar-nav button.cdropdown {
	background-color: #7626C9;
	border-radius: 3px;
	border: none;
}
.secbar-content {
	padding: 0 35px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.secbar-search {
	padding: 10px 0;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 33%;
}
.secbar-search .search {
	background-color: #591c97;
	border-radius: 8px;
	position: relative;
	width: 100%;
	padding: 0 10px 0 36px;
}
.secbar-search .search i {
	position: absolute;
	color: #fff;
	width: 18px;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
	line-height: 1;
}
.secbar-search .search i img {
	width: 100%;
}
.secbar-search .search input {
	height: 44px;
	font-family: "Scto Grotesk A";
	font-weight: normal;
	font-size: 14px;
	border: none;
	background: none;
	outline: none;
	width: 100%;
	text-align: left;
	color: #fff;
}
.secbar-search .search input::placeholder {
	color: #eef;
}
.secbar-search .search input:focus::placeholder {
	color: transparent;
}
.mobile .secbar-content {
	padding: 0 15px;
}
.mobile .secbar-nav {
	display: none;
}
.mobile .secbar-search {
	width: 100%;
}
</style>

<style>

.ant-dropdown-menu{
	background-color: #111433;
}
.ant-dropdown-menu .ant-dropdown-menu-item,
.ant-dropdown-menu .ant-dropdown-menu-submenu-title{
	color: #FFF;
	font-size: 14px;
}
.ant-dropdown-menu .ant-dropdown-menu-item:hover,
.ant-dropdown-menu .ant-dropdown-menu-submenu-title:hover{
	background-color: #942FFB;
}
.ant-dropdown-menu-submenu-popup ul{
	padding: 5px 10px;
}
</style>
