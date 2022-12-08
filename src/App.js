import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     pageSize: 8,
  //     country: "in",
  //     category: "general",
  //     Linkto: "/General",
  //   };
  // }

  // handleCategory = (category, link) => {
  //   this.setState({
  //     category: category,
  //     Linkto: link,
  //   });
  // };
  render() {
    return (
      <div>
        <Router>
          <Navbar toggleCategory={this.handleCategory} />

          <Switch>
            <Route exact path="/">
              <News
                key="general"
                pageSize={30}
                country="us"
                category="general"
              />
            </Route>
            <Route exact path="/General">
              <News
                key={"general"}
                pageSize={30}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/Sports">
              <News key="sports" pageSize={30} country="us" category="sports" />
            </Route>
            <Route exact path="/Health">
              <News key="Health" pageSize={30} country="us" category="health" />
            </Route>
            <Route exact path="/Technology">
              <News
                key="Technology"
                pageSize={30}
                country="us"
                category="technology"
              />
            </Route>
            <Route exact path="/Entertainment">
              <News
                key="Entertainment"
                pageSize={30}
                country="us"
                category="entertainment"
              />
            </Route>
            <Route exact path="/Business">
              <News
                key="Business"
                pageSize={30}
                country="us"
                category="business"
              />
            </Route>
            <Route exact path="/Science">
              <News
                key="science"
                pageSize={30}
                country="us"
                category="science"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
