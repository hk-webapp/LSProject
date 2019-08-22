import 'bootstrap/dist/css/bootstrap.css'
import * as React from 'react';
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux';
import PageIntroInfo from 'src/Entities/PageIntroInfo';
import { getError, getIntroPages, getLoaded } from 'src/reducers/IntroPagesReducer';
import { IIntroPagesState } from 'src/Store/AllStates';
import { IAppState } from 'src/Store/store';
import '../styles/PageComponent.scss'

interface IProps {
  error: string,
  items: PageIntroInfo[],
  loaded: boolean,
}

class PageListComponent extends React.Component<IProps, IIntroPagesState> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <div className="ls-row page-container">
        {this.props.items.map((info, index) => {
          return <div key={index} className="ls-col-4">
            <div className="page-item">
              <div className={info.IsNew !== true ? "new-badge-hidden" : "new-badge"} ><span className="rotate-span">جدید</span></div>
              <div className="page-item-header">
                <img src={process.env.PUBLIC_URL + '/images/' + info.IntroImg}
                  // tslint:disable-next-line: jsx-no-lambda
                  onError={(elem) => elem.currentTarget.className = "img-not-found"} className="page-item-img" alt={info.Title} />
                <div className="page-item-title">
                  <NavLink
                    key={index} to={'/Page/' + info.Title} >{info.Title}</NavLink>
                </div>

              </div>

              <div className="page-item-info" >{info.IntroInfo}</div>
            </div>
          </div>
        })}
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState) => (
  {
    error: getError(state.introPageState),
    items: getIntroPages(state.introPageState),
    loaded: getLoaded(state.introPageState)
  }
)

export default connect(mapStateToProps)(PageListComponent)