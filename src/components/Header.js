import Logo from "../assests/logo.png";

export const Header = ({ theme, setTheme }) => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Taskmate Logo" />
        <span>
          <b>TaskMate</b>
        </span>
      </div>
      <div className="themeSelector">
        <span
          className={theme === "light" ? "light activeTheme" : "light"}
          onClick={() => setTheme("light")}
        ></span>
        <span
          className={theme === "medium" ? "medium activeTheme" : "medium"}
          onClick={() => setTheme("medium")}
        ></span>
        <span
          className={theme === "dark" ? "dark activeTheme" : "dark"}
          onClick={() => setTheme("dark")}
        ></span>
        <span
          className={
            theme === "gradientOne" ? "gradientOne activeTheme" : "gradientOne"
          }
          onClick={() => setTheme("gradientOne")}
        ></span>
        <span
          className={
            theme === "gradientTwo" ? "gradientTwo activeTheme" : "gradientTwo"
          }
          onClick={() => setTheme("gradientTwo")}
        ></span>
        <span
          className={
            theme === "gradientThree"
              ? "gradientThree activeTheme"
              : "gradientThree"
          }
          onClick={() => setTheme("gradientThree")}
        ></span>
      </div>
    </header>
  );
};
