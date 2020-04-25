import React from 'react';
import Helmet from 'react-helmet';
import { replaceComponent, Components } from 'meteor/vulcan:core';

// note: modal popups won't work with anything above bootstrap alpha.5.
// see https://github.com/twbs/bootstrap/issues/21876#issuecomment-276181539

const Layout = ({children}) => {
  return (
    <div className="wrapper" id="wrapper">

      <Helmet>
        <title>B&#x12B;ja</title>
        <link name="bootstrap" rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"/>
        <link name="font-awesome" rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </Helmet>

      <Components.Header/>

      <div className="main">
        {children}
      </div>

      <div className="footer">&copy; B&#x12B;ja Kitchen</div>

    </div>
  );
};

replaceComponent('Layout', Layout);
