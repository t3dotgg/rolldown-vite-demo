import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import { minify } from "rollup-plugin-esbuild";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		minify({
			minify: true,
			legalComments: "none",
			target: "es2022",
		}) as any,
	],
	experimental: {
		enableNativePlugin: true,
	},
});
