import App from './App.svelte';
import * as Cesium from 'cesium';
import 'dotenv/config';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		cesium: Cesium,
	}
});

export default app;