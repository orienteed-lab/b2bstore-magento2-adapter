import * as packageJson from './package.json';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'b2bstore-magento2-adapter',
            fileName: 'b2bstore-magento2-adapter'
        },
        rollupOptions: {
            external: Object.keys(packageJson.peerDependencies)
        }
    },
    plugins: [dts()]
});
