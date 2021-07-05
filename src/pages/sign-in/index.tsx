import {
  AmplifyAuthenticator,
  AmplifyContainer,
  AmplifySignOut,
} from '@aws-amplify/ui-react';
import { Header } from '../../components';
import Head from 'next/head';

export default function SignInPage() {
  return (
    <>
      <Head>
        <title>Sign in - EcoWaste</title>
        <meta
          name="description"
          content="Sign in to the application using your credentials or create a new account."
        />
        <meta property="og:title" content="Sign in - EcoWaste" />
        <meta
          property="og:description"
          content="Sign in to the application using your credentials or create a new account."
        />
        <meta property="og:url" content="https://ecowaste.com/search/sign-in" />
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
