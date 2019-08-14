import { RouteComponentProps } from "react-router-dom";
import PageIntroInfo from './PageIntroInfo';

export interface IPageListState {
    loaded: boolean;
    items: PageIntroInfo[];
    error: string;
    LoadData: () => void;
}
export interface IAppComponent {
    name?: string;
}
interface IPageViewMatchParams {
    Name: string;
}
export interface IPageViewProps extends RouteComponentProps<IPageViewMatchParams> {

}
