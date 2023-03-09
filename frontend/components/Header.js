import React from "react";
import Link from 'next/link'
const Header = () => {
  return (
    <header id="header" class="fixed-top header-inner-pages">
      <div class="container d-flex align-items-center justify-content-between">
        <h1 class="logo">
          <Link href="/">Paul Cycle Store</Link>
        </h1>

        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <a class="nav-link scrollto active" href="/hero">
                Home
              </a>
            </li>
            <li>
              <a class="nav-link  scrollto" href="/product">
            Products
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="/about">
                About
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="/services">
                Services
              </a>
            </li>
            {/* <li class="dropdown">
              <a href="#">
                <span>Drop Down</span> <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li class="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i class="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li> */}
            <li>
              <a class="nav-link scrollto" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
