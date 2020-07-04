import React from 'react';
import { Link } from "react-router-dom";
import {AdminHeaderWrapper} from "./styles";

function AdminHeader({ logOut }) {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <AdminHeaderWrapper className="container">
                <Link to="/admin"  className="navbar-brand">Admin</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {/*<li className="nav-item">*/}
                        {/*    <Link to="/admin" className="nav-link">Home</Link>*/}
                        {/*</li>*/}
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Projects
                            </span>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/admin/project/published" className="dropdown-item">Published Projects</Link>
                                <Link to="/admin/project/drafts" className="dropdown-item">Project Drafts</Link>
                                <div className="dropdown-divider" />
                                <Link to="/admin/project/new" className="dropdown-item">New Project</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                BookReviews
                            </span>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/admin/bookReview/published" className="dropdown-item">Published</Link>
                                <Link to="/admin/bookReview/drafts" className="dropdown-item">Drafts</Link>
                                <div className="dropdown-divider" />
                                <Link to="/admin/bookReview/new" className="dropdown-item">New Book</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Blogs
                            </span>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/admin/blog/published" className="dropdown-item">Published Blogs</Link>
                                <Link to="/admin/blog/drafts" className="dropdown-item">Draft Blogs</Link>
                                <div className="dropdown-divider" />
                                <Link to="/admin/blog/new" className="dropdown-item">New Blog</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Monthly Fives
                            </span>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/admin/monthlyFive/published" className="dropdown-item">Published Monthly Fives</Link>
                                <Link to="/admin/monthlyFive/drafts" className="dropdown-item">Draft Monthly Fives</Link>
                                <div className="dropdown-divider" />
                                <Link to="/admin/monthlyFive/new" className="dropdown-item">New Monthly Five</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Guides
                            </span>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/admin/guide/published" className="dropdown-item">Published Guides</Link>
                                <Link to="/admin/guide/drafts" className="dropdown-item">Draft Guides</Link>
                                <div className="dropdown-divider" />
                                <Link to="/admin/guide/new" className="dropdown-item">New Guide</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Event
                            </span>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/admin/event/published" className="dropdown-item">Published Events</Link>
                                <Link to="/admin/event/drafts" className="dropdown-item">Draft Events</Link>
                                <div className="dropdown-divider" />
                                <Link to="/admin/event/new" className="dropdown-item">New Event</Link>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="nav-link" onClick={logOut}>Log Out</span>
                        </li>
                    </ul>
                </div>
            </AdminHeaderWrapper>
        </nav>
    )

}

export default AdminHeader;
