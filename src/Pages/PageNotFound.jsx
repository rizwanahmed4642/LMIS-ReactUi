import { Link } from "react-router-dom";
import "../Pages/PageNotFound.css";
import React from 'react'

function PageNotFound() {
  return (
    <div className="page-container">
      <div className="message">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="back-button" onClick={() => navigate('/')}>
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound