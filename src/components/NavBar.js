import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const [home,about,projects] = links;

  return (
  <nav>{
    <div>
  <a href={"#"+ home} key = '1'>{home}</a>
  <a href={"#"+ about} key = '2'>{about}</a>
  <a href={"#"+ projects} key = '3'>{projects}</a>
  </div>
  }</nav>);
}

export default NavBar;
