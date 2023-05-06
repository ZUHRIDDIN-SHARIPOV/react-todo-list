import "./header.scss";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="site-header__block">
            <div className="site-header__content-block">
              <div className="site-header__content-img">
                <FiMenu className="fi__menu" />
              </div>
              <h1 className="site-header__content-title">
                React User Application
              </h1>
            </div>

            <h2 className="site-header__title">LOGIN</h2>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
