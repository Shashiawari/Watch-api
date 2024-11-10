"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
const Page = () => {
  const [watchData, setWatchData] = useState([]);
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

  // Function to fetch data from API based on brand
  const fetchWatchData = async (brandName) => {
    const res = await fetch(`/api/brands?brandname=${brandName}`);
    const data = await res.json();
    if (data.success) {
      setWatchData(data.result);
    } else {
      setWatchData([]);
      alert(data.error);
    }
  };

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

      <div className="container mt-5  p-5">
        <h2>Test Watch API Endpoints</h2>

        {/* Buttons to trigger API calls for different brands */}
        <div className="btn-group my-3">
          <button
            className="btn btn-primary"
            onClick={() => fetchWatchData("fastrack")}
          >
            Fastrack
          </button>
          <button
            className="btn btn-primary"
            onClick={() => fetchWatchData("noise")}
          >
            Noise
          </button>
          <button
            className="btn btn-primary"
            onClick={() => fetchWatchData("titan")}
          >
            Titan
          </button>
          <button
            className="btn btn-primary"
            onClick={() => fetchWatchData("fossil")}
          >
            Fossil
          </button>
        </div>

        <div className="row mt-4">
          {watchData.length > 0 ? (
            watchData.slice(0, 12).map(
              (
                watch,
                index // Only display the first 10 items
              ) => (
                <div className="col-md-4" key={index}>
                  <div className="card mx-2 my-2">
                    {/* Conditionally render the image if a valid src exists */}
                    {watch["img-link"] ? (
                      <img
                        src={watch["img-link"]}
                        className="card-img-top"
                        alt={watch.name}
                      />
                    ) : (
                      <div className="card-img-top text-center">
                        <span>No Image Available</span>{" "}
                        {/* Fallback for no image */}
                      </div>
                    )}
                    <div className="card-body">
                      <h5 className="card-title">{watch.name}</h5>
                      <p className="card-text">
                        <strong className="my-2">Price:</strong> {watch.price}{" "}
                        <br />
                        <strong className="my-2">Rating:</strong> {watch.rating}{" "}
                        <br />
                        <strong className="my-2">Bought:</strong> {watch.bought}{" "}
                        <br />
                        <a
                          href={watch.link}
                          className="btn btn-primary mt-3"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Watch
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              )
            )
          ) : (
            <p>No watches available for the selected brand.</p>
          )}
        </div>
      </div>

      <p className="text-center">
        This is a test page where you can test the API endpoints. You will get
        up to 10 results ❗❗
      </p>
    </div>
  );
};

export default Page;
