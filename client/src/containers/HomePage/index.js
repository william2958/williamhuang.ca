import React from 'react';

import {HomePageWrapper} from "./styles";
import Header from "../../components/Header";
import RecentBookReviews from "./components/RecentBookReviews";
import {getNumRecentBookReviews, getNumRecentGuides} from "../../actions";
import RecentGuides from "./components/RecentGuides";

class HomePage extends React.Component {

    // componentDidMount() {
    //     if (typeof window !== 'undefined') window.scrollTo(0, 0);
    // }

    render() {
        return (
            <HomePageWrapper>
                <Header sticky />
                <RecentBookReviews />

                <RecentGuides />
            </HomePageWrapper>
        )
    }

}

function loadData(store) {
    return Promise.all([
        store.dispatch(getNumRecentBookReviews(4)),
        store.dispatch(getNumRecentGuides(4))
    ])
}

export default {
    component: HomePage,
    loadData
};


// {/*<HomePageBanner />*/}
//
// {/*<HomePageSection className="container">*/}
// {/*    <H4 left underline>What's new</H4>*/}
// {/*</HomePageSection>*/}
//
// {/*<RecentMonthlyFive />*/}
//
// {/*<RecentProjects />*/}
