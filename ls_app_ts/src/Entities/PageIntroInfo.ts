export default class PageIntroInfo {
    public Img: string;
    public IntroImg: string;
    public IntroInfo: string;
    public Name: string;
    public Title: string;
    public IsNew: boolean;
    public Categories: IPageCategories[];
}

export interface IPageCategories {
    Name: string;
    Title: string;
}