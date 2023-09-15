# md-editor-v3-demo
基于vue3、ts、md-editor-v3的markdown编辑器使用demo，欢迎点开食用


## 配置文件
1. (.env.development、.env.preRelease、.env.production)文件配置不同情况下需要的请求或者参数，比如mode、url、host、port；利用package.json里的script引入 --mode development\--mode preRelease\--mode production;

2. .npmrc文件，npm运行时的配置文件，可以配置下载依赖包的来源，还可以给特定的依赖添加特定的依赖源
    例如：@element-plus:registry = "https://registry.npmmirror.com/"
    可以参考：https://blog.csdn.net/Aurora_juan/article/details/127244292

3. vite打包可以配置打包去掉console、配置大文件的压缩和打包后输出的文件：
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'

    import AutoImport from 'unplugin-auto-import/vite'
    import Components from 'unplugin-vue-components/vite'
    import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
    // gzip压缩
    import viteCompression from 'vite-plugin-compression';

    export default defineConfig({
        plugins: [
            vue(
                {reactivityTransform: true}
            ),
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
            viteCompression({
                verbose: true,
                disable: false,
                threshold: 10240,
                algorithm: 'gzip',
                ext: '.gz',
            })
        ],
        build: {
            minify: 'terser',
            terserOptions: {
                compress: {
                    // 生产打包去掉console和debugger
                    drop_console: true,
                    drop_debugger: true,
                }
            },
            rollupOptions: {
                output: {
                    manualChunks: id=> {
                        // 将 node_modules 中的代码单独打包成一个 JS 文件
                        if(id.includes('node_modules')) {
                            return 'vendor'
                        }
                    }
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
					rewrite: (path) => path.replace(/^\/api/, ''), // 看是否有需要重写路径
				},
			}
		}
    })
    具体参考：
    https://www.cnblogs.com/kq981024/p/16996815.html（Vite插件快速识别-开发篇）
    https://www.cnblogs.com/kq981024/p/16996808.html（Vite插件快速识别-性能篇）

4. vue3项目如果遇到了需要声明的三方依赖，可以用declare.d.ts，具体路径可放在src/typescript/declare.d.ts中：
    例如：
    declare module "kwm.fe.ui.vue2"
    declare module "kwm.fe.ui.vue3"

5. 关于tsconfig.json的配置可以看这里：https://www.cnblogs.com/kq981024/p/16796023.html

6. 如果安装vite-plugin-style-import后，运行报错，请看着里：
    https://blog.csdn.net/weixin_52020362/article/details/128180407
    可以直接npm install consola -D即可