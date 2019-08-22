import 'bootstrap/dist/css/bootstrap.css'
import * as $ from 'jquery'
import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import PageIntroInfo from 'src/Entities/PageIntroInfo';
import { getCourses, getError, getLoaded } from 'src/reducers/IntroPagesReducer';
import { IIntroPagesState } from 'src/Store/AllStates';
import { IAppState } from 'src/Store/store';
import '../styles/Courses.scss'

interface IProps {
  error: string,
  courses: PageIntroInfo[],
  loaded: boolean,
}

class Courses extends React.Component<IProps, IIntroPagesState> {
  constructor(props: IProps) {
    super(props);
    this.ShowCourseTitle = this.ShowCourseTitle.bind(this);
    this.HideCourseTitle = this.HideCourseTitle.bind(this);
  }

  public HideCourseTitle(event: React.MouseEvent<HTMLDivElement>) {
    const el = event.currentTarget || new HTMLImageElement();
    $(el).hide();
  }
  public ShowCourseTitle(event: React.MouseEvent<HTMLImageElement>) {
    const el = event.currentTarget.nextSibling || new HTMLImageElement();
    $(el).show();
  }
  public render() {
    return (
      <div className="ls-row courses-container">
        {this.props.courses.map((info, index) => {
          return <div key={index} className="ls-col-3">
            <div className="course-item">
              <div className="course-item-header">
                {
                  <img src={process.env.PUBLIC_URL + '/images/' + (info.Img ? info.Img : "NotSetImgCourse.svg")}
                    // tslint:disable-next-line: jsx-no-lambda
                    onError={(elem) => elem.currentTarget.className = "img-not-found"}
                    onMouseMove={this.ShowCourseTitle}
                    onClick={this.ShowCourseTitle}
                    className="course-item-img" alt={info.Title} />}
                <div className="course-item-title" onMouseLeave={this.HideCourseTitle}><div >{info.Title}</div></div>
              </div>

              <div className="course-item-info" >{info.IntroInfo}</div>
              <div className="course-item-link">
                <NavLink key={index} to={'/Page/' + info.Name} >ادامه مطلب</NavLink>

              </div>
            </div>
          </div>
        })}
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState) => (
  {
    courses: getCourses(state.introPageState),
    error: getError(state.introPageState),
    loaded: getLoaded(state.introPageState)
  }
)

export default connect(mapStateToProps)(Courses)