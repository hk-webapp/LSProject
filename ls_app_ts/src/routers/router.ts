import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
 import Pages from '../components/Pages'
 // import PageListComponent from '../components/PageListComponent'
 import PageViewer from '../components/PageViewer'

 const AppRouter = [
    {
        path: "/",
        // tslint:disable-next-line: object-literal-sort-keys
        component: Pages,
        exact:true,
        Title:"Learning Programming Site"
    },
    {
        path:"/ContactUs",
        // tslint:disable-next-line: object-literal-sort-keys
        component:ContactUs,
    },
    {
        path:"/AboutUs",
        // tslint:disable-next-line: object-literal-sort-keys
        component:AboutUs,
        Title:"About Learning Site"

    },
    {
        path:"/Page/:Name",
        // tslint:disable-next-line: object-literal-sort-keys
        component:PageViewer
    }
]

export default AppRouter;
