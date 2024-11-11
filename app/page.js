"use client";
import Image from "next/image";
import "./globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Home() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      // When the scroll position is greater than 50px
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg  ${
          scrolling ? "navbar-scrolled" : ""
        }`}
      >
        <div className="container-fluid">
          <Link
            className={`navbar-brand  ${
              scrolling ? "navbar-brand text-white" : ""
            }`}
            href="/"
          >
            Awari
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link  ${
                    scrolling ? "nav-link text-white" : ""
                  }`}
                  aria-current="page"
                  href="https://shashipreetham.netlify.app/"
                >
                  portfolio
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link  ${
                    scrolling ? "nav-link text-white" : ""
                  }`}
                  href="/test"
                >
                  test
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link  ${
                    scrolling ? "nav-link text-white" : ""
                  }`}
                  href="/pricing"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="dat">
  <h1 className="text-center">Documentation For Watch API</h1>
  <hr />
  <h2>API Documentation</h2>

  <p>
    Welcome to the API documentation for the watch store. Below you will
    find the details for how to interact with the various routes.
  </p>

  <h3>Base URL:</h3>
  <p>
    <code>https://website.com/api</code>
  </p>

  <h3>Available Routes</h3>

  <h4>1. Retrieve Watches by Brand Name</h4>
  <p>
    <code>/api/brands?brandname=[brandname]</code>
  </p>
  <p>
    This endpoint retrieves watches from a specific brand. You need to use
    the query parameter <code>brandname</code> to specify the brand you
    are looking for.
  </p>
  <p>
    <strong>Valid brand names:</strong> noise, fastrack, titan, fossil
  </p>
  <h5>Example URL:</h5>
  <pre>
    <code>/api/brands?brandname=noise</code>
  </pre>

  <h5>Response:</h5>
  <div>
    <pre className="response">
      {`
{
  "success": true,
  "result": [
    {
      "img-link": "https://example.com/watch-image.jpg",
      "link": "https://example.com/watch-link",
      "name": "Noise Smart Watch",
      "rating": "4.5 out of 5 stars",
      "bought": "10,000",
      "price": "3,299",
      "type": "digital"
    }
  ]
}
`}
    </pre>
  </div>

  <h5>Error Response:</h5>
  <pre className="error">
    {`
{
  "success": false,
  "error": "Invalid brand name"
}
`}
  </pre>

  <h4>2. Retrieve Watches by Type</h4>
  <p>
    <code>/api/type</code>
  </p>
  <p>
    This endpoint allows you to retrieve watches based on the type of the watch.
    Use the query parameter <code>type</code> to specify whether you're looking for 
    an <strong>analog</strong> or <strong>digital</strong> watch.
  </p>
  <p>
    <strong>Valid types:</strong> analog, digital
  </p>
  <h5>Example URL:</h5>
  <pre>
    <code>/api/digital</code>
  </pre>

  <h5>Response:</h5>
  <div>
    <pre className="response">
      {`
{
  "success": true,
  "result": [
    {
      "img-link": "https://example.com/digital-watch.jpg",
      "link": "https://example.com/digital-watch-link",
      "name": "Digital Watch 1",
      "rating": "4.0 out of 5 stars",
      "bought": "12,000",
      "price": "1,899",
      "type": "digital"
    }
  ]
}
`}
    </pre>
  </div>

  <h5>Error Response:</h5>
  <pre className="error">
    {`
{
  "success": false,
  "error": "No watches found for the specified type"
}
`}
  </pre>

  <h4>3. Retrieve All Watches</h4>
  <p>
    <code>/api/watches</code>
  </p>
  <p>
    This endpoint retrieves all available watches from the store. It does
    not require any query parameters.
  </p>
  <h5>Example URL:</h5>
  <pre>
    <code>/api/watches</code>
  </pre>

  <h5>Response:</h5>
  <div>
    <pre className="response">
      {`
{
  "success": true,
  "result": [
    {
      "img-link": "https://example.com/analog-watch1.jpg",
      "link": "https://example.com/analog-watch1-link",
      "name": "Analog Watch 1",
      "rating": "4.5 out of 5 stars",
      "bought": "5,000",
      "price": "2,599",
      "type": "analog"
    },
    {
      "img-link": "https://example.com/digital-watch2.jpg",
      "link": "https://example.com/digital-watch2-link",
      "name": "Digital Watch 2",
      "rating": "4.7 out of 5 stars",
      "bought": "10,000",
      "price": "3,299",
      "type": "digital"
    }
  ]
}
`}
    </pre>
  </div>

  <h5>Error Response:</h5>
  <pre className="error">
    {`
{
  "success": false,
  "error": "No watches found"
}
`}
  </pre>
</div>

      <div className="container p-5 d-flex justify-content-center align-items-center">
    <Link href="https://github.com/Shashiawari/Watch-api" >
        <button className="button">
          <svg
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g strokeWidth={0} id="SVGRepo_bgCarrier" />
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              id="SVGRepo_tracerCarrier"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>github</title> <rect fill="none" height={24} width={24} />{" "}
              <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />{" "}
            </g>
          </svg>
          Continue with Github
        </button>
              </Link>
      </div>
    
    </div>
  );
}
