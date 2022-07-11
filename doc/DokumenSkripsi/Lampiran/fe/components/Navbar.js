import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="menu">
      <li className="item">
        <a href="/">List</a>
      </li>
      <li className="item">
        <a href="/app-url">App Url</a>
      </li>
      <li className="item">
        <a href="/popular">Popular</a>
      </li>
    </ul>
  );
}
