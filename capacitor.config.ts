import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.stopconflict.mapp.app',
  appName: 'my-angular-portfolio-project',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
