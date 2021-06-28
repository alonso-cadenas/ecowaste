import '../styles/global.css';
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';

Amplify.configure({ ...awsExports, ssr: true });
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
