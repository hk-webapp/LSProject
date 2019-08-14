import * as React from 'react'
import { Link } from 'react-router-dom';
import { IPageViewProps } from 'src/Entities/Interfaces';

export default class PageViewer extends React.Component<IPageViewProps>{
    
    public render() {
        document.title=this.props.match.params.Name;
        return (<div className="page-viewer-container"><h3>
            {this.props.match.params.Name}
        </h3>
        <p>

        kjfkd lkjldsf ddklfj sdf jfdskfjs kfjdsk
        lkjf kdsf ldkfj dskfkj fjdsklfjdsfkl dsfkljdsf kfjdf djf dkfd fjdsf dsjkf
        kkjfkdsfddskfjdsf
        kkjf dsfj
        </p>
        <p>

        kjfkd lkjldsf ddklfj sdf jfdskfjs kfjdsk
        lkjf kdsf ldkfj dskfkj fjdsklfjdsfkl dsfkljdsf kfjdf djf dkfd fjdsf dsjkf
        kkjfkdsfddskfjdsf
        kkjf dsfj
        </p>
        <p>

        kjfkd lkjldsf ddklfj sdf jfdskfjs kfjdsk
        lkjf kdsf ldkfj dskfkj fjdsklfjdsfkl dsfkljdsf kfjdf djf dkfd fjdsf dsjkf
        kkjfkdsfddskfjdsf
        kkjf dsfj
        </p>
        <p>
5
        kjfkd lkjldsf ddklfj sdf jfdskfjs kfjdsk
        lkjf kdsf ldkfj dskfkj fjdsklfjdsfkl dsfkljdsf kfjdf djf dkfd fjdsf dsjkf
        kkjfkdsfddskfjdsf
        kkjf dsfj
        </p>
        <p>
4
        kjfkd lkjldsf ddklfj sdf jfdskfjs kfjdsk
        lkjf kdsf ldkfj dskfkj fjdsklfjdsfkl dsfkljdsf kfjdf djf dkfd fjdsf dsjkf
        kkjfkdsfddskfjdsf
        kkjf dsfj
        </p>
        <p>
3
        kjfkd lkjldsf ddklfj sdf jfdskfjs kfjdsk
        lkjf kdsf ldkfj dskfkj fjdsklfjdsfkl dsfkljdsf kfjdf djf dkfd fjdsf dsjkf
        kkjfkdsfddskfjdsf
        kkjf dsfj
        </p>

        <p>
2
        kjfkd lkjldsf ddklfj sdf jfdskfjs kfjdsk
        lkjf kdsf ldkfj dskfkj fjdsklfjdsfkl dsfkljdsf kfjdf djf dkfd fjdsf dsjkf
        kkjfkdsfddskfjdsf
        kkjf dsfj
        </p>
        <p>
1
        kjfkd lkjldsf ddklfj sdf jfdskfjs kfjdsk
        lkjf kdsf ldkfj dskfkj fjdsklfjdsfkl dsfkljdsf kfjdf djf dkfd fjdsf dsjkf
        kkjfkdsfddskfjdsf
        kkjf dsfj
        </p>
        
            <hr />
            <Link to="/" >Home</Link>

        </div>)
    }
}