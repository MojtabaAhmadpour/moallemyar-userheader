const { default: UserBody } = require("./components/body")
const { default: UserHeader } = require("./components/header")
const { default: UserSide } = require("./components/sidebar")

const UserLayout = ()=>{
    return (
        <div>
            <UserSide/>
            <UserHeader/>
            <UserBody/>
        </div>
    )
}