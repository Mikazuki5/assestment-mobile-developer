declare module 'react-native-config' {
  export interface NativeConfig {
    BASE_URL?: string;
    ASSESTMENT_FROM?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
