import { TUser } from '../interfaces/TUser'

export function User(props: any) {
    const user: TUser = props.ParamUser;
    console.log("User inside Component: " + user)
    return <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        </tr>
}