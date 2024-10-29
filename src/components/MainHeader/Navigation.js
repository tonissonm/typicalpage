import './Navigation.css'

const Navigation =(props)=>{
    return(
        <nav className='nav'>
            <ul>
                <li>
                    <a href="/users">Users</a>
                </li>
                <li>
                    <a href="/admin">Admin</a>
                </li>
            </ul>
            {props.loggedIn &&(
                <li>
                    <Button onClick={props.onLogout}>Logout</Button>
                </li>
            )}
        </nav>
    )
}
export default Navigation