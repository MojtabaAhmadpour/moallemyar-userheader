import UserBody from './components/body'
import UserFilter from './components/filter'
import UserHeader from './components/header'
import UserSide from './components/sidebar'

const UserPanel = () => {
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
