const Navbar = ()=>{
    return (
        <nav className="w-full bg-purple-300 border-b shadow-sm p-4 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-blue-600"> FileShare</h1>
            <a 
            href="https://github.com/Saurabh5233/ShareFile"
            target="_blank"
            className="text-xl text-[#26bb26] hover:text-blue-700 text-sm"
            >
                GitHub
            </a>
            <a 
            href="https://github.com/Saurabh5233/ShareFile"
            target="_blank"
            className="text-xl text-[#26bb26] hover:text-blue-700 text-sm"
            >
                login/signup
            </a>
            
        </nav>
    )
}

export default Navbar;