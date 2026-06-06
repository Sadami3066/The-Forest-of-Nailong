import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  plugins: [
    vue(),
    basicSsl()  // 自签名证书，启用HTTPS → 解锁移动端陀螺仪API
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    https: true
  }
})
