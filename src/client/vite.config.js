import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
	plugins: [react()],
	build: {
		outDir: 'dist', // Specify the output directory for the build
	},
	base: './', // Relative base path for serving locally
});
