import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';

const SignInSignOutButton = () => {
    const isAuthenticated = false;

    if (isAuthenticated) {
        return <SignOutButton />;
    } else if (true) {
        return <SignInButton />;
    } else {
        return null;
    }
};

export default SignInSignOutButton;
