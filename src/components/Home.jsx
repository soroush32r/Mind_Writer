import { Link } from "react-router-dom"

const Home = () => {
  return(
    <div className="flex justify-center items-center h-screen font-display  bg-gradient-to-br from-blue-50 to-blue-100/100">
      <div className="flex flex-col w-11/12 h-5/6 items-center justify-around">
        <h1 className="mt-15">Welcome to Mind Writer</h1>
        <div className="flex justify-around w-full">
          <div className="text-center mb-10">
            <h2 className="mb-10">If you want to write a blog</h2>
            <Link to={'/Blog'} className="bg-blue-200 px-2 py-1 rounded text-2xl hover:bg-blue-100">Write a blog</Link>
          </div>
          <div className="text-center">
            <h2 className="mb-10">If you want use a notebook</h2>
            <Link to={'/Notebook'} className="bg-blue-200 px-2 py-1 rounded text-2xl hover:bg-blue-100">Notebook</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home