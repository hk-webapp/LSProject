import * as React from 'react'
import { connect } from 'react-redux';
import { IPageViewProps } from 'src/Entities/Interfaces';
import PageIntroInfo from 'src/Entities/PageIntroInfo';
import { getCourses } from 'src/reducers/IntroPagesReducer';
import { IAppState } from 'src/Store/store';
import '../styles/PageViewer.scss'

class PageViewer extends React.Component<IPageViewProps>{

        public getPageName() {
                return this.props.match.params.Name;
        }

        public render() {
                const name = this.getPageName();
                const item = this.props.courses.filter(c => c.Name === name)[0] || new PageIntroInfo();
                document.title = item.Title;
                let caItems: JSX.Element[] = [];
                if (item.Categories) {
                        caItems = item.Categories.map((c, index) => {
                                return <li key={index}>{c.Title}</li>
                        })
                }
                return (<div className="page-viewer-container">
                        <div className="page-viewer-header">
                                <h3 className="page-viewer-title">{item.Title}
                                </h3>
                                <img className="page-viewer-header-img"
                                        src={process.env.PUBLIC_URL + '/images/' + (item.Img ? item.Img : "NotSetImgCourse.svg")}
                                        alt="img" />
                        </div>
                        <div className="page-viewer-wrapper">
                                <div className="page-viewer-sidebar">فهرست مطالب
                                <ul>
                                                {
                                                        caItems

                                                }
                                        </ul>
                                </div>

                                <div className="page-viewer-body">

                                        <p>body body body body body body body body body body body body body body body body body body body body body body body </p>
                                        <p>body body body body body body body body body body body body body body </p>
                                        <p>body body body body body body body body body body body body body body </p>
                                        <p>body body body body body body body body body body body body body body </p>
                                        <p>body body body body body body body body body body body body body body </p>
                                        <p>body body body body body body body body body body body body body body </p>
                                        <p>body body body body body body body body body body body body body body </p>
                                        <p>body body body body body body body body body body body body body body </p>
                                        <p>body body body body body body body body body body body body body body </p>
                                        <p>body body body body body body body body body body body body body body </p>
                                        <p>body body body body body body body body body body body body body body </p>
                                        <p>body body body body body body body body body body body body body body </p>
                                        <p>body body body body body body body body body body body body body body </p>
                                        <p>body body body body body body body body body body body body body body </p>
                                        <p>body body body body body body body body body body body body body body </p>
                                        <p>body body body body body body body body body body body body body body </p>
                                        <p>body body body body body body body body body body body body body body </p>
                                        <p>body body body body body body body body body body body body body body </p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                        <p>body</p>
                                </div>

                        </div>

                </div>)
        }
}

const mapStateToProps = (state: IAppState) => (
        {
                courses: getCourses(state.introPageState),
        }
)

export default connect(mapStateToProps)(PageViewer)