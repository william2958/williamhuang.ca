import React from 'react';
import AdminHeader from "./components/AdminHeader";
import {AdminWrapper} from "./styles";
import {renderRoutes} from "react-router-config";
import requireAuth from "../../hocs/requireAuth";

const Admin = ({ route }) => {

    return (
        <AdminWrapper>
            <AdminHeader />
            {renderRoutes(route.routes)}
        </AdminWrapper>
    )

}

export default {
    component: requireAuth(Admin)
};

// {/*<Switch>*/}
//
// {/*    <Route path={`/admin/bookReview/published`} component={AdminPublished} />*/}
// {/*    <Route path={`/admin/bookReview/drafts`} component={AdminDrafts} />*/}
// {/*    <Route path={`/admin/bookReview/new`} component={NewBookReview} />*/}
// {/*    <Route path={`/admin/bookReview/edit/:reviewId`} component={EditBookReview} />*/}
//
// {/*    <Route path={`/admin/project/published`} component={PublishedProjects} />*/}
// {/*    <Route path={`/admin/project/drafts`} component={DraftProjects} />*/}
// {/*    <Route path={`/admin/project/edit/:projectId`} component={EditProject} />*/}
// {/*    <Route path={`/admin/project/new`} component={NewProject} />*/}
//
// {/*    <Route path={`/admin/blog/published`} component={PublishedBlogs} />*/}
// {/*    <Route path={`/admin/blog/drafts`} component={DraftBlogs} />*/}
// {/*    <Route path={`/admin/blog/edit/:blogId`} component={EditBlog} />*/}
// {/*    <Route path={`/admin/blog/new`} component={NewBlog} />*/}
//
// {/*    <Route path={`/admin/monthlyFive/published`} component={PublishedMonthlyFives} />*/}
// {/*    <Route path={`/admin/monthlyFive/drafts`} component={DraftMonthlyFives} />*/}
// {/*    <Route path={`/admin/monthlyFive/edit/:monthlyFiveId`} component={EditMonthlyFive} />*/}
// {/*    <Route path={`/admin/monthlyFive/new`} component={NewMonthlyFive} />*/}
//
// {/*    <Route path={`/admin/guide/published`} component={PublishedGuides} />*/}
// {/*    <Route path={`/admin/guide/drafts`} component={DraftGuides} />*/}
// {/*    <Route path={`/admin/guide/edit/:guideId`} component={EditGuide} />*/}
// {/*    <Route path={`/admin/guide/new`} component={NewGuide} />*/}
//
// {/*    <Route path={`/admin/event/published`} component={PublishedEvents} />*/}
// {/*    <Route path={`/admin/event/drafts`} component={DraftEvents} />*/}
// {/*    <Route path={`/admin/event/edit/:eventId`} component={EditEvent} />*/}
// {/*    <Route path={`/admin/event/new`} component={NewEvent} />*/}
//
// {/*    <Route path={`/admin`} exact component={AdminHome} />*/}
// {/*    <Redirect to={`/admin`} />*/}
//
// {/*</Switch>*/}
