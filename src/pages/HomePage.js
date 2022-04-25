import React from "react";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
        <section className="search-banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12 mx-auto">
            <div id="accordion_search_bar_container">
              <h4>WHAT ARE YOU LOOKING FOR?</h4>
              <input
                type="search"
                id="accordion_search_bar"
                placeholder="Search"
              />
              <p>
                Search for NSN, NIIN, FSC, CACG, itemname, part number ,
                characteristics, or any of them combined in a single text box.d
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </Layout>
  );
};

export default HomePage;
