import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  plugins: [
    pluginModuleFederation({
      name: 'federation_provider',
      exposes: {
        './button': './src/button.tsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    port: 3000
  }
});
