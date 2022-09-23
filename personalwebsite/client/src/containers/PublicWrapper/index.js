import React from "react";
import { matchPath } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PublicWrapper = ({ route, location }) => {
  return (
    <div>
      {matchPath(location.pathname, "/").isExact ? null : <Header />}
      {renderRoutes(route.routes)}
      {/*<Footer />*/}
    </div>
  );
};

export default {
  component: PublicWrapper,
};
