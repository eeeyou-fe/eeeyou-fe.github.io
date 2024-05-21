import {
	createSSRApp,
} from "vue";
import App from "./App.vue";
export function createApp() {
	const app = createSSRApp(App);
	app.mixin({
		onLoad: () => {
			console.log('Page Load')
		},
		onUnload:() => {
			console.log('Page Unload')
		}
	})
	return {
		app,
	};
}