import * as React from 'react'
import Courses from './Courses';
import PageListComponent from './PageListComponent'

export default class Home extends React.Component {

    public render() {

        return (
            <div className="home-container">
                <Courses />
                <hr/>
                <PageListComponent />
            </div>


        )
    }
}