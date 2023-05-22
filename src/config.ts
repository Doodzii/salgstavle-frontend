const devConfig = {
    backendUrl: 'http://localhost:3000'
};
  
const prodConfig = {
    backendUrl: 'https://example.com'
};
  
const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
  
export default config;