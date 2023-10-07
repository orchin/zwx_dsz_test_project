import Vue from 'vue'
import {
	Input,
	Button,
	Menu,
	Dropdown,
	Comment,
	Modal,
	Tabs,
	Row,
	Col,
	Icon,
	Breadcrumb,
	Pagination,
	message,
	notification,
} from 'ant-design-vue'

Vue.use(Input)
Vue.use(Button)
Vue.use(Menu)
Vue.use(Dropdown)
Vue.use(Comment)
Vue.use(Modal)
Vue.use(Tabs)
Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)
Vue.use(Breadcrumb)
Vue.use(Pagination)
Vue.use(message)
Vue.use(notification)


Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
