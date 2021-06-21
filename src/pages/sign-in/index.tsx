import {
  AmplifyAuthenticator,
  AmplifyContainer,
  AmplifySignOut,
} from '@aws-amplify/ui-react';
import { Amplify, Auth } from 'aws-amplify';
import Head from 'next/head';
import awsExports from '../../aws-exports';
import { Header } from '../../components';

Amplify.configure({ ...awsExports, ssr: true });

export default function Home() {
  return (
    <>
      <Head>
        <title>EcoWaste - Sign in</title>
        <link rel="icon" href={'/favicon.ico'} />
      </Head>

      <Header showSignIn={false} />

      <main>
        <AmplifyContainer>
          <AmplifyAuthenticator>
            <h1>Welcome!</h1>
            <AmplifySignOut />
          </AmplifyAuthenticator>
        </AmplifyContainer>
      </main>
    </>
  );
}
