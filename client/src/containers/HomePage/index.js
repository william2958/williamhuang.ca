import React from 'react';

import {HomePageWrapper} from "./styles";
import Header from "../../components/Header";
import RecentBookReviews from "./components/RecentBookReviews";
import RecentProjects from "./components/RecentProjects";
import RecentGuides from "./components/RecentGuides";
import RecentMonthlyFive from "./components/RecentMonthlyFive";
import HomePageBanner from "./components/HomePageBanner";

class MainPage extends React.Component {

    state = {
        recentBookReviews: []
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <HomePageWrapper>

                <HomePageBanner />

                <Header sticky />

                {/*<HomePageSection className="container">*/}
                {/*    <H4 left underline>What's new</H4>*/}
                {/*</HomePageSection>*/}

                <RecentMonthlyFive />

                <RecentProjects />

                <RecentGuides />

                <RecentBookReviews />


            </HomePageWrapper>
        )
    }

}

export default MainPage;
