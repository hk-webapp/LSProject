import "bootstrap/scss/bootstrap.scss";
import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss';

import OfflineComponent from './components/OfflineComponent'
import AppRouter from './routers/router'

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  // public CheckHomeIsActive(match: match<any>, location: Location) {
  //   if (!location) { return false; }
  //   if (location.pathname === "/" || location.pathname === "/Home") { return true; }
  //   return false;
  // }

  public CheckHomeIsActive = (match: any, location: { pathname: string; }) => {

    if (!location) { return false; }
    if (location.pathname === "/" || location.pathname === "/Home") { return true; }
    return false;
  }

  public render() {
    document.title = "Learning Programming Site";

    return (
      <Router basename={process.env.PUBLIC_URL}>

        <div className="App">
          <header className="App-header">
            <div className="app-menubar ">
              <Navbar className="navbar navbar-inverse " expand="md" bg="drak" variant="dark">
                <Navbar.Toggle aria-controls="myNavbar" />
                <Navbar.Collapse className="app-navbar-right" id="myNavbar">
                  <Nav className="">
                    <Nav.Item ><NavLink to="/Home" isActive={this.CheckHomeIsActive} activeClassName="active-page" className="nav-link ">صفحه اصلی</NavLink></Nav.Item>
                    <Nav.Item ><NavLink to="/AboutUs" activeClassName="active-page" className="nav-link">درباره ما</NavLink></Nav.Item>
                    <Nav.Item ><NavLink to="/ContactUs" activeClassName="active-page" className="nav-link">تماس با ما</NavLink></Nav.Item>

                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </header>

          <div className="pages-container">
            {
              AppRouter.map((rt, index: number) => {

                // tslint:disable-next-line: jsx-no-lambda
                return <Route key={index} exact={rt.exact || false} path={rt.path} render={props => <rt.component {...props} />} />
              })
            }
          </div>
          <OfflineComponent />
          <div className="App-footer">

            <div className="copy-right">
              تمامی حقوق برای ...... محفوظ است.
            <br />
              version 1.1
            </div>
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
