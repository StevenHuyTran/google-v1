import React from "react";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-[50%] translate-x-[-50%] whitespace-nowrap p-6 text-sm text-gray-600">
      <p className="text-center">
        Copyright &copy; {new Date().getFullYear} Steven Tran <br></br>This site
        is for educational purposes only and will not ask for personal
        information!<br></br>I acknowledge that this is Google clone website and
        looks similar to a phishing site.<br></br>There is a login feature that
        I am currently testing to implement sign-in authorization.
      </p>
    </footer>
  );
}
