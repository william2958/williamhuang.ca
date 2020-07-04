import React from 'react';
import AdminHeader from "./components/AdminHeader";
import {Redirect, Route, Switch} from "react-router-dom";
import AdminPublished from "./BookReviews/AdminPublished";
import AdminHome from "./AdminHome";
import AdminDrafts from "./BookReviews/AdminDrafts";
import NewBookReview from "./BookReviews/NewBookReview";
import EditBookReview from "./BookReviews/EditBookReview";
import {AdminWrapper} from "./styles";
import NewProject from "./Projects/NewProject";
import EditProject from "./Projects/EditProject";
import PublishedProjects from "./Projects/PublishedProjects";
import DraftProjects from "./Projects/DraftProjects";
import PublishedBlogs from "./Blogs/PublishedBlogs";
import DraftBlogs from "./Blogs/DraftBlogs";
import EditBlog from "./Blogs/EditBlog";
import NewBlog from "./Blogs/NewBlog";
import PublishedMonthlyFives from "./MonthlyFives/PublishedMonthlyFives";
import DraftMonthlyFives from "./MonthlyFives/DraftMonthlyFives";
import EditMonthlyFive from "./MonthlyFives/EditMonthlyFive";
import NewMonthlyFive from "./MonthlyFives/NewMonthlyFive";
import PublishedGuides from "./Guides/PublishedGuides";
import DraftGuides from "./Guides/DraftGuides";
import EditGuide from "./Guides/EditGuide";
import NewGuide from "./Guides/NewGuide";
import EditEvent from "./Events/EditEvent";
import NewEvent from "./Events/NewEvent";
import PublishedEvents from "./Events/PublishedEvents";
import DraftEvents from "./Events/DraftEvents";

class Admin extends React.Component {

    render() {
        return (
            <AdminWrapper>
                <AdminHeader logOut={this.props.logOut}/>
                <Switch>

                    <Route path={`/admin/bookReview/published`} component={AdminPublished} />
                    <Route path={`/admin/bookReview/drafts`} component={AdminDrafts} />
                    <Route path={`/admin/bookReview/new`} component={NewBookReview} />
                    <Route path={`/admin/bookReview/edit/:reviewId`} component={EditBookReview} />

                    <Route path={`/admin/project/published`} component={PublishedProjects} />
                    <Route path={`/admin/project/drafts`} component={DraftProjects} />
                    <Route path={`/admin/project/edit/:projectId`} component={EditProject} />
                    <Route path={`/admin/project/new`} component={NewProject} />

                    <Route path={`/admin/blog/published`} component={PublishedBlogs} />
                    <Route path={`/admin/blog/drafts`} component={DraftBlogs} />
                    <Route path={`/admin/blog/edit/:blogId`} component={EditBlog} />
                    <Route path={`/admin/blog/new`} component={NewBlog} />

                    <Route path={`/admin/monthlyFive/published`} component={PublishedMonthlyFives} />
                    <Route path={`/admin/monthlyFive/drafts`} component={DraftMonthlyFives} />
                    <Route path={`/admin/monthlyFive/edit/:monthlyFiveId`} component={EditMonthlyFive} />
                    <Route path={`/admin/monthlyFive/new`} component={NewMonthlyFive} />

                    <Route path={`/admin/guide/published`} component={PublishedGuides} />
                    <Route path={`/admin/guide/drafts`} component={DraftGuides} />
                    <Route path={`/admin/guide/edit/:guideId`} component={EditGuide} />
                    <Route path={`/admin/guide/new`} component={NewGuide} />

                    <Route path={`/admin/event/published`} component={PublishedEvents} />
                    <Route path={`/admin/event/drafts`} component={DraftEvents} />
                    <Route path={`/admin/event/edit/:eventId`} component={EditEvent} />
                    <Route path={`/admin/event/new`} component={NewEvent} />

                    <Route path={`/admin`} exact component={AdminHome} />
                    <Redirect to={`/admin`} />

                </Switch>
            </AdminWrapper>
        )
    }

}

export default Admin;
