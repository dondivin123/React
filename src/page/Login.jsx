const Login = () => {
  return (
    <div>
        <div className='flex justify-center items-center h-screen bg-slate-300'>
        <div className="flex-col space-y-4 items-center bg-slate-100 2xl px-4 py-20 hover:bg-gray-50">
        <h1 className="text-5xl text-center">Login</h1>
        <form className="flex flex-col items-center space-y-4">
          <input type="Email"  placeholder="Email" className="bg-slate-500 px-16 py-3 mb-4 text-center rounded-lg"/>
          <input type="password" placeholder="password" className="bg-slate-500 px-16 py-3 mb-4 text-center rounded-lg"/>
          <button className="bg-blue-600 text-white px-20 py-2 rounded hover:bg-red-700">Submit</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login