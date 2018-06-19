import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import JobsPage from "./components/pages/JobsPage";
import "./App.css";
import BusinessConsultant from "./components/pages/jobBusiness/BusinessConsultant";
import ContentMarketing from "./components/pages/jobBusiness/ContentMarketing";
import DigitalSale from "./components/pages/jobBusiness/DigitalSale";
import GraphicDesignerAndVideoEditor from "./components/pages/jobBusiness/GraphicDesignerAndVideoEditor";
import GroupFacebookHCM from "./components/pages/jobBusiness/GroupFacebookHCM";
import GroupFacebookHN from "./components/pages/jobBusiness/GroupFacebookHN";


class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/jobs" exact component={JobsPage} />
        <Route path="/jobs/business-consultant" exact component={BusinessConsultant} />
        <Route path="/jobs/content-marketing" exact component={ContentMarketing} />
        <Route path="/jobs/digital-sale" exact component={DigitalSale}/>
        <Route path="/jobs/graphic-designer-and-video-editor" exact component={GraphicDesignerAndVideoEditor}/>
        <Route path="jobs/group-facebook-hn" exact component={GroupFacebookHN}/>
        <Route path="jobs/group-facebook-hcm" exact component={GroupFacebookHCM}/>
      </div>
    );
  }
}

export default App;
