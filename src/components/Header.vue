<template>
	<div class="header">
		<div class="header-fixed bgcolor">
			<div class="header-inner">
				<!-- 左 -->
				<div class="header-left">
					<router-link
						class="header-left-text"
						tag="div"
						v-for="item in menuList"
						:key="item.title"
						:to="item.href"
						>{{ item.title }}</router-link
					>
				</div>
				<!-- logo -->
				<router-link
					class="header-logo"
					to="/index"
					tag="div"
				></router-link>
				<!-- 右 -->
				<div class="header-right">
					<div class="header-right-login">LOG IN</div>
					<div class="header-right-started">GET STARTED <img :src="signupIcon"/></div>
					
					
					<div class="header-menu-btn" @click="openMenu">
						<img :src="menuIcon" />
					</div>
				</div>
			</div>
		</div>
		<div class="popup">
			<div class="popup-mask-layer" @click="show = false" v-show="show" ></div>
			<div
				class="popup-body"
				:class="show ? 'popup-show' : 'popup-hidden'"
			>
				<div class="popup-close-btn" @click="closeMenu">
						<img :src="closeIcon" />
					</div>
				<div class="popup-content bgcolor">
					<div class="menu-sidebar">
						<div
							class="menu-item"
							v-for="item in menuList"
							:key="item.title"
						>
							<router-link
								:to="item.href"
								tag="div"
								>{{ item.title }}
								<img :src="signupIcon"/>
							</router-link>
						</div>
						<div class="menu-shop-btn"><router-link tag="div" :to="nullPage">SHOP BY CATEGORY</router-link></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import menuIcon from "@/assets/menu.svg";
import closeIcon from "@/assets/close.svg";
import signupIcon from "@/assets/header-signup.svg";

export default {
	data () {
		return {
			show: false,
			menuList: [
				{
					title: "SELL",
					href: "/index",
				},
				{
					title: "SUPPLY",
					href: "/index",
				},
				{
					title: "LEARN",
					href: "/index",
				},
				{
					title: "SUPPORT",
					href: "/index",
				},
			],
			nullPage:'/null',
			screenWidth: document.body.clientWidth,
			mobileMode: false,
			timer: false,
			html: "",
			menuIcon,
			signupIcon,
			closeIcon
		}
	},
	methods: {
		openMenu(){
			this.show = true;
		},
		closeMenu(){
			this.show = false;
		},
		isMobile(){
			const ua = navigator.userAgent.toLowerCase();
			const t1 =/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
			const t2 = !ua.match("iphone") && navigator.maxTouchPoints > 1;
			return t1 || t2;
		},
		checkScreen(){
			if (this.isMobile() || this.screenWidth<750) {
				this.html.classList.remove("PC");
				this.html.classList.add("mobile");
				this.mobileMode = true;
			}else{
				this.html.classList.remove("mobile");
				this.html.classList.add("PC");
				this.mobileMode = false;
			}
			this.setRootFontSize()
		},
		setRootFontSize(){
			var baseWidth = 750;
			var winWidth =  document.body.clientWidth;//window.innerWidth;
			var size = Math.round((winWidth / baseWidth) * 100);
			document.documentElement.style.fontSize = (size<100?size:100)+"px" ;
		}
	},
	mounted() {
		this.html = document.getElementsByTagName("html")[0];
		this.checkScreen()
		window.onresize = () => {
			//console.log('resize',document.body.clientWidth)
			// window.screenWidth = document.body.clientWidth;
			this.screenWidth = document.body.clientWidth;
			this.checkScreen()
		};
	}
}
</script>

<style scoped >
.bgcolor{
	background-color: #942FFB;
	color: #FFF;
}
.header {
	width: 100%;
	height: 75px;
	font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.header-fixed {
	height: 75px;
	width: 100%;
	/* position: fixed;
	top: 0;
	left: 0;
	right: 0; */
	position: relative;
	padding: 0 15px;
	border-bottom: 1px solid rgba(199, 187, 237, 0.5);
	z-index: 901;
	box-sizing: border-box;
}
/* ====================================================================== */
.header-inner {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
}
.header-left{
	width: 40%;
	min-width: 400px;
	display: flex;
	justify-content:flex-start;
	align-items: center;
	margin: 0 15px;
}
.header-left-text {
	cursor: pointer;
	font-size: 16px;
	font-weight: bold;
	padding: 12px 12px;
	border-radius: 24px;
	letter-spacing: 2px;
	margin: 0 2px;
}
.header-left-text:hover{
	background-color: #9e3ef7;
}
.header-logo {
	width: 135px;
	height: 65px;
	background: url("../assets/logo-wb.png")
		no-repeat;
	background-size: contain;
	cursor: pointer;
}
.header-right {
	width: 40%;
	min-width: 400px;
	display: flex;
	justify-content:flex-end;
	font-weight: bold;
	font-size: 14px;
	align-items: center;
	margin: 0 15px;
}
.header-right-login {
	cursor: pointer;
	font-size: 14px;
	font-weight: bold;
	padding: 12px 12px;
	border-radius: 24px;
	letter-spacing: 2px;
	margin: 0 2px;
	font-family: 'Scto Grotesk A';
}
.header-right-login:hover{
	background-color: #9e3ef7;
}
.header-right-started {
	cursor: pointer;
	font-size: 14px;
	font-weight: bold;
	padding: 12px 12px;
	border-radius: 24px;
	letter-spacing: 2px;
	margin: 0 2px;
	font-family: 'Scto Grotesk A';
	background-color: #591c97;
}
.header-right-started:hover{
	background-color: #3b1364;
}
.router-link-active {
	color: #99FFFF;
}
.PC .header-menu-btn , .PC .popup{
	display: none;
}
/* ====================================================================== */
.header-menu-btn{
	margin-left: 10px;
	cursor: pointer;
}
.header-menu-btn img{
	width: 45px;
	height: 45px;
}
.mobile .header-left-text, .mobile .header-right-started {
	display: none;
}
.mobile .header{
	height: 60px;
}
.mobile .header-fixed{
	height: 60px;
	padding: 0;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
}
.mobile .header-left{
	min-width:auto;
	width: auto;
	display: none;
}
.mobile .header-right{
	min-width:auto;
	width: auto;
}
.mobile .header-inner {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 60px;
}
.mobile .header-logo {
	margin-left: .1rem;
	width: 60px;
	height: 60px;
	background: url("../assets/logo-wb.png") no-repeat;
	background-size: 250%;
	background-position: center -50%;
}
/* ====================================================================== */
.popup {
	flex: 1;
	transition: all 350ms;
	font-size: .16rem;
}
.popup-mask-layer {
	transition-property: opacity;
	transition-duration: 350ms;
	transition-timing-function: ease-out;
	position: fixed;
	inset: 0px;
	z-index: 910;
	background-color: rgba(0, 0, 0, 0.001);
}
.popup-body {
	width: 100%;
	transition-duration: 200ms;
	transition-timing-function: ease-out;
	transition-property: transform, -webkit-transform;
	z-index: 920;
	position: fixed;
	display: flex;
	flex-direction: column;
	left: 0px;
	bottom: 0px;
	top: 0px;
}
.popup-body .popup-close-btn{
	margin:0 7px 1px 0;
	align-self: flex-end;
	cursor: pointer;
	overflow: hidden;
	height: 45px;
	padding: 7px;
	background-color: #942FFB;
}
.popup-body .popup-close-btn img{
	width: 45px;
	height: 45px;
}
.popup-content {
	position: relative;
	margin-top: 0;
	overflow: auto;
	flex: 1 1 0%;
}
.menu-sidebar {
	padding: .3rem;
	margin-top: .3rem;
}
.menu-item {
	width: 100%;
	height: .9rem;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	border-bottom: 1px solid rgba(255,255,255,.1);
	font-size: .3rem;
	font-weight: 700;
	font-family: 'Scto Grotesk A';
	letter-spacing: 2px;
	color: #FAFAFA;
}
.menu-item > div {
	width: 100%;
	text-align: left;
}
.menu-item > div > img {
	float: right;
	height: .3rem;
}
.menu-shop-btn{
	width: 100%;
	height: .8rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid rgba(255,255,255,.1);
	font-size: .3rem;
	font-weight: 700;
	font-family: 'Scto Grotesk A';
	letter-spacing: 2px;
	color: #FAFAFA;
	background-color: #591c97;
	border-radius: .15rem;
	margin-top: .2rem;
}
.popup-show {
	transform: translateY(0);
}

.popup-hidden {
	transform: translateY(-100%);
}
.router-link-active {
	color: #0066ed;
}
</style>
