import React from 'react';

import {HomePageWrapper} from "./styles";
import Header from "../../components/Header";
import RecentBookReviews from "./components/RecentBookReviews";
import {getNumRecentBookReviews, getNumRecentGuides, getNumRecentProjects} from "../../actions";
import RecentGuides from "./components/RecentGuides";
import RecentProjects from "./components/RecentProjects";
import {getHomeHighlight} from "../../actions/homeActions";
import HomePageBanner from "./components/HomePageBanner";

class HomePage extends React.Component {

    componentDidMount() {
        if (typeof window !== 'undefined') window.scrollTo(0, 0);
    }

    render() {
        return (
            <HomePageWrapper>
                <HomePageBanner />
                <Header sticky />
                <RecentProjects />
                <RecentBookReviews />

                <RecentGuides />
            </HomePageWrapper>
        )
    }

}

function loadData(store) {
    return Promise.all([
        store.dispatch(getNumRecentBookReviews(4)),
        store.dispatch(getNumRecentGuides(4)),
        store.dispatch(getNumRecentProjects(3)),
        store.dispatch(getHomeHighlight())
    ])
}

export default {
    component: HomePage,
    loadData
};


//
// {/*<HomePageSection className="container">*/}
// {/*    <H4 left underline>What's new</H4>*/}
// {/*</HomePageSection>*/}
//
// {/*<RecentMonthlyFive />*/}
//
