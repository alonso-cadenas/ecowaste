import {
  AmplifyAuthenticator,
  AmplifyContainer,
  AmplifySignOut,
} from '@aws-amplify/ui-react';
import { Header } from '../../components';

export default function SignInPage() {
  return (
    <>
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
