import { Link } from "react-router-dom";
import { Paragraph, Span } from "../UI";
import { SignInButton } from "@clerk/clerk-react";

interface IRegistrationInfo {
  linkText: string;
  hasAccountText: string;
  authWithText: string;
  navigatePath: string;
}

const LoginTypes = ({
  hasAccountText,
  navigatePath,
  linkText,
  authWithText,
}: IRegistrationInfo) => {
  return (
    <div>
      <Span>
        {hasAccountText} <Link to={navigatePath}>{linkText}</Link>
      </Span>
      <Paragraph>{authWithText}</Paragraph>
      <div className="icons">
      <SignInButton forceRedirectUrl={"/main"}
          children={
            <Link className="reg__link google-link" to="#">
              <img src="/google.svg" alt="Google" />
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default LoginTypes;
