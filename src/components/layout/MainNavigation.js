import { signout } from "../../services/ApiService";
import classes from './MainNavigation.module.css'

function MainNavigation(){
    const signoutHandler = (event) => {
        event.preventDefault();
        signout();
    };

    return <header className={classes.header}>
        <div className={classes.logo}>Todo</div>
        <nav>
            <ul>
                <li>
                    <a onClick={signoutHandler}>Logout</a>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;