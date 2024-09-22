import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <header>
      <span className="logo">
        <span className="letter" style={{ animationDelay: "0s" }}>
          H
        </span>
        <span className="letter" style={{ animationDelay: "0.2s" }}>
          o
        </span>
        <span className="letter" style={{ animationDelay: "0.4s" }}>
          m
        </span>
        <span className="letter" style={{ animationDelay: "0.6s" }}>
          e
        </span>
        <span className="letter" style={{ animationDelay: "0.8s" }}>
          N
        </span>
        <span className="letter" style={{ animationDelay: "1s" }}>
          e
        </span>
        <span className="letter" style={{ animationDelay: "1.2s" }}>
          s
        </span>
        <span className="letter" style={{ animationDelay: "1.4s" }}>
          t
        </span>
      </span>
      <div className="pages">
        <Link to="/main">
          <a className="pageItem">Главная</a>
        </Link>
        <Link to="/favorite">
          <a className="pageItem">Избранное</a>
        </Link>
        <Link to="/profile">
          <a className="pageItem">Профиль</a>
        </Link>
      </div>
      {isSignedIn && (
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: {
                width: "70px",
                height: "70px",
              },
            },
          }}
        />
      )}
    </header>
  );
};
