import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    let env = loadEnv(mode, __dirname);
	return {
		plugins: [vue(
			{reactivityTransform: true}
		)],
		root: './',
		build: {
            minify: 'terser',
            terserOptions: {
                compress: {
                    // 生产打包去掉console和debugger
                    drop_console: true,
                    drop_debugger: true,
                }
            }
        },
		server: {
			port: 3030,
			open: false, // 服务器启动默认在浏览器打开程序
			cors: true, // 默认启用并允许任何源
			proxy: {
				"/api/": {
					target: env.VITE_baseUrl, // 要访问的跨域的域名
					// ws: true, // 是否启用websockets时
					changeOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
					rewrite: (path) => path.replace(/^\/api/, ''),
				},
			}
		}
	}
})
