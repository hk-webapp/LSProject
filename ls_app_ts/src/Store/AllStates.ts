import PageIntroInfo from 'src/Entities/PageIntroInfo';

// tslint:disable-next-line: no-empty-interface
export interface IState{

}
export interface IAppMainState{
    isOffline:boolean;
}
export interface IIntroPagesState extends IState{
    courses:PageIntroInfo[] ,
    items:PageIntroInfo[] ,
    error:string,
    loaded:boolean
}

export interface IContacUsState {
    Name: string,
    Email: string,
    Desc: string,
}
