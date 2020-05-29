import React from "react";
import "./BusinessList.css";

import Business from "../Business/Business";

class BusinessList extends React.Component {
  render() {
    let businesses = this.props.businesses.map((business) => {
      return <Business business={business} />;
    });

    return <div className="BusinessList">{businesses}</div>;
  }
}

export default BusinessList;
