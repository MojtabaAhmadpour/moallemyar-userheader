import UserBody from "@/components/User/body"
import UserFilter from "@/components/User/filter"
import UserHeader from "@/components/User/header"
import UserSide from "@/components/User/sidebar"

const UserPanelPage = () => {

    return (
        <div className="w-full min-h-screen p-3 flex">
            <aside className="w-1/4">
                <UserSide />
            </aside>
            <main className="w-3/4 flex flex-col">
                <header>
                    <UserHeader />
                </header>
                <section className='flex flex-col'>
                    <UserFilter />
                    <UserBody />
                </section>
            </main>
        </div>
    )
}
export default UserPanelPage