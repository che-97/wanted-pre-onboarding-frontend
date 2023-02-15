import clases from './Layout.module.css'
import MainNavigation from './MainNavigation';

function Layout(props){
    return <div>
        <MainNavigation/>
        <main className={clases.main}>
            {props.children}
        </main>
    </div>
}

export default Layout;