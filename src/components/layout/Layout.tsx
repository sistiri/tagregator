import { Fragment, ReactElement } from "react"
import MainNavigation from "./MainNavigation"

import classes from './Layout.module.css'

type LayoutProps = {
    children: ReactElement;
}

const Layout = (props: LayoutProps) => {
    return(
        <Fragment>
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    )
}

export default Layout