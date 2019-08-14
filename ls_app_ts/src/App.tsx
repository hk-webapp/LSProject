import "bootstrap/scss/bootstrap.scss"
import * as $ from 'jquery'
import * as React from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss';
import OfflineComponent from './components/OfflineComponent'
import TimeComponent from './components/TimeComponent'
import AppRouter from './routers/router'
class App extends React.Component {
  private menuDropdownRef: any;
  private menuIsOpen: boolean = false;
  constructor(props: any) {
    super(props);
    this.menuOnClick = this.menuOnClick.bind(this);
    this.menuDropdownRef = React.createRef();
  }

  public menuOnClick() {
    if (!this.menuIsOpen) {
      $(this.menuDropdownRef.current).show();
      this.menuIsOpen = true;
    }
    else {
      $(this.menuDropdownRef.current).hide();
      this.menuIsOpen = false;
    }
  }

  public render() {
    document.title = "Learning Programming Site";

    return (
      <Router basename="/ReactSampleDemo">

        <div className="App">
          <header className="App-header">
            <h1 className="App-title">آموزش برنامه نویسی</h1>
            <div className="title">
              <div className="app-time">
                <TimeComponent />
              </div>
            </div>
          </header>
          <div className="app-menubar ">
            <div className="menu-icon " onClick={this.menuOnClick}>.</div>
            <div className="row" ref={this.menuDropdownRef}>
              <div className="col-2">
                <Link to="/" >Home</Link>
              </div>
              <div className="col-2">
                <Link to="/ContactUs" >Contact us</Link></div>
              <div className="col-2">
                <Link to="/AboutUs" >About us</Link></div>
            </div>
          </div>
          <div className="pages-container">
            {
              AppRouter.map((rt, index: number) => {

                // tslint:disable-next-line: jsx-no-lambda
                return <Route key={index} exact={rt.exact || false} path={rt.path} render={props => <rt.component {...props} />} />
              })
            }
          </div>
          <OfflineComponent />
          <div className="App-footer">@Copy right</div>
        </div>
      </Router>

    );
  }
}

export default App;
