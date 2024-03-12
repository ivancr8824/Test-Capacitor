import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myApp',
  webDir: 'www',
  plugins: {
    LiveUpdates: {
      appId: 'bdba1109',
      channel: 'testing-destination',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
