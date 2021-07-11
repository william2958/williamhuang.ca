import React from "react";

import { HomePageWrapper } from "./styles";
import Header from "../../components/Header";
import RecentBookReviews from "./components/RecentBookReviews";
import {
  getFirstPageBlogs,
  getNumRecentBookReviews,
  getNumRecentGuides,
  getNumRecentMonthlyFives,
  getNumRecentProjects,
} from "../../actions";
import RecentGuides from "./components/RecentGuides";
import RecentProjects from "./components/RecentProjects";
import { getHomeHighlight } from "../../actions/homeActions";
import HomePageBanner from "./components/HomePageBanner";
import RecentMonthlyFive from "./components/RecentMonthlyFive";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import RecentBlogs from "./components/RecentBlogs";

class HomePage extends React.Component {
  componentDidMount() {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }

  render() {
    return <div>williamhuang.ca</div>;
    // return (
    //     <HomePageWrapper>
    //         <Helmet>
    //             <title>{"Home | WH"}</title>
    //             <meta property="og:title" content="Home | williamhuang.ca" />
    //             <meta property="og:image" content="https://storage.googleapis.com/global_images/Web_Preview/favicon.png" />
    //             <meta property="description" content="Explore my blog, reviews, guides, and more." />
    //             <meta property="og:url" content="https://williamhuang.ca" />
    //         </Helmet>
    //
    //         <HomePageBanner />
    //         <Header sticky />
    //         <RecentBlogs />
    //         <RecentMonthlyFive />
    //         {/*<RecentBookReviews />*/}
    //
    //         <RecentGuides />
    //     </HomePageWrapper>
    // )
  }
}

function loadData(store) {
  return Promise.all([
    store.dispatch(getNumRecentBookReviews(4)),
    store.dispatch(getNumRecentGuides(4)),
    store.dispatch(getNumRecentProjects(3)),
    store.dispatch(getHomeHighlight()),
    store.dispatch(getNumRecentMonthlyFives(3)),
    store.dispatch(getFirstPageBlogs()),
  ]);
}

export default {
  component: HomePage,
  loadData,
};

//
// {/*<HomePageSection className="container">*/}
// {/*    <H4 left underline>What's new</H4>*/}
// {/*</HomePageSection>*/}
//
//
