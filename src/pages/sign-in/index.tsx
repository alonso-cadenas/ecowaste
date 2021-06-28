import {
  AmplifyAuthenticator,
  AmplifyContainer,
  AmplifySignOut,
} from '@aws-amplify/ui-react';
import Head from 'next/head';
import { Header } from '../../components';

export default function SignInPage() {
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
