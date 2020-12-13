<script context="module">
	import { Router, Link, Route } from "svelte-routing";
	import Nav from "./components/Nav.svelte";
	import Home from "./pages/Home.svelte";
	import FbSideBar from "./components/FBSideBar.svelte";
	import Vision from "./pages/Vision.svelte";
	export let url = "";
</script>

<style global lang="postcss">
	/* only apply purgecss on utilities, per Tailwind docs */
	/* purgecss start ignore */
	@tailwind base;
	@tailwind components;
	/* purgecss end ignore */

	@tailwind utilities;
	.bgLines {
		background: linear-gradient(rgba(251, 238, 160) 14%, rgba(0, 0, 0, 0) 14%),
			linear-gradient(rgba(247, 209, 48) 28%, rgba(0, 0, 0, 0) 28%),
			linear-gradient(rgba(218, 161, 54) 42%, rgba(0, 0, 0, 0) 42%),
			linear-gradient(rgba(235, 135, 60) 56%, rgba(0, 0, 0, 0) 56%),
			linear-gradient(rgba(165, 165, 67) 70%, rgba(0, 0, 0, 0) 70%),
			linear-gradient(rgba(118, 160, 176) 84%, rgba(83, 82, 80) 84%);
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}
</style>

<Router {url}>
	<Nav />
	<div class="bgLines flex justify-center min-h-screen">
		<div class="lg:grid lg:grid-cols-3 sm:mt-8 md:mt-16 justify-center ">
			<Route path="/" component={Home} />
			<Route path="/vision" component={Vision} />
			<FbSideBar />
		</div>
	</div>
</Router>
