import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myApp',
  webDir: 'www',
  plugins: {
    LiveUpdates: {
      appId: '5caf6128',
      channel: 'testing-destination',
      autoUpdateMethod: 'background',
      maxVersions: 3
    }
  }
};

export default config;
