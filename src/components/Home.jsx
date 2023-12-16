import { Link } from "react-router-dom"

const Home = () => {
  return(
    <div className="flex justify-center items-center h-screen font-display  bg-gradient-to-br from-blue-50 to-blue-100/100 md:">
      <div className="flex flex-col w-11/12 h-5/6 items-center justify-around text-center">
        <h1 className="mt-15">Welcome to Mind Writer</h1>
        <div className="flex justify-around flex-col md:flex-row w-full">
            <Link to={'/Blog'}>
              <div className="text-center mb-10 shadow-2xl border rounded-lg bg-blue-200 p-10 hover:scale-105">
                <h2 className="mb-10">If you want to write a blog</h2>
                <h3>click here</h3>
              </div>
            </Link>
            <Link to={'/Notebook'}>
              <div className="text-center mb-10 shadow-2xl border rounded-lg bg-blue-200 p-10 hover:scale-105">
                <h2 className="mb-10">If you want use a notebook</h2>
                <h3>click here</h3>
              </div>
            </Link>
        </div>

      </div>
    </div>
  )
}

export default Home