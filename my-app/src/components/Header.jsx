import { Link } from "react-router"
import Logo from "./logo"
import { useState } from "react"


const Header = () => {

    const [menu, setIsMenuOpen] = useState(false)
    const [hideNave, setHideNave] = useState(true)

    function handlMenuOpen() {

        setIsMenuOpen(!menu)
        console.log(menu)
        setHideNave(!hideNave)
    }


    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 flex  px-4">
            <div className="container mx-auto">
                <div className=" px-4 p-[14px]">
                    <div className="flex items-center justify-between h-16  ">
                        <Logo />

                        <div className=" flex space-x-10">
                            {hideNave && (
                                <nav className="space-x-6 hidden md:flex">
                                    <Link to="/business" className="text-gray-800 hover:text-red-600 font-semibold transition duration-200 ">Business</Link>
                                    <Link to="/entertainment" className="text-gray-800 hover:text-red-600 font-semibold transition duration-200 ">Entertainment</Link>
                                    <Link to="/general" className="text-gray-800 hover:text-red-600 font-semibold transition duration-200 ">General</Link>
                                    <Link to="/health" className="text-gray-800 hover:text-red-600 font-semibold transition duration-200 ">Health</Link>
                                    <Link to="/science" className="text-gray-800 hover:text-red-600 font-semibold transition duration-200 ">Science</Link>
                                    <Link to="/sports" className="text-gray-800 hover:text-red-600 font-semibold transition duration-200 ">Sports</Link>
                                    <Link to="/technology" className="text-gray-800 hover:text-red-600 font-semibold transition duration-200 ">Technology</Link>
                                </nav>)
                            }

                            <button className="hidden md:block hover:rotate-180 text-gray-800 hover:text-red-600 transition duration-200 cursor-pointer" onClick={() => { setHideNave(!hideNave) }}>
                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8567 6.86896L5.88976 12.343C5.68876 12.545 5.36276 12.545 5.16076 12.343C4.95976 12.141 4.95976 11.8139 5.16076 11.6129L10.7367 6.49793L5.14477 1.36896C4.94377 1.16696 4.94377 0.839918 5.14477 0.638918C5.34577 0.437918 5.67177 0.436918 5.87377 0.638918L11.8417 6.11396C11.8487 6.11996 11.8457 6.13097 11.8517 6.13697C11.8537 6.13897 11.8568 6.13692 11.8578 6.13892C12.0598 6.33992 12.0597 6.66696 11.8567 6.86896ZM5.85778 6.13593C5.85978 6.13793 5.86274 6.13594 5.86474 6.13794C6.06574 6.33994 6.06574 6.66592 5.86474 6.86792L0.895745 11.3419C0.694745 11.5439 0.368741 11.5439 0.166741 11.3419C-0.0342588 11.1399 -0.0342588 10.8139 0.166741 10.6129L4.73675 6.49793L0.15075 2.36792C-0.05025 2.16692 -0.05025 1.83992 0.15075 1.63892C0.35275 1.43692 0.677754 1.43692 0.879754 1.63892L5.84875 6.11292C5.85475 6.11992 5.85178 6.12993 5.85778 6.13593Z" fill="black" />
                                </svg>

                            </button>

                            <Link className="text-gray-800 hover:text-red-600 font-semibold transition duration-200">
                                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6011 22.4015C17.6011 17.982 14.0185 14.4009 9.60063 14.4009C5.18114 14.4009 1.6001 17.982 1.6001 22.4015V24H0V22.4015C0 18.3436 2.52016 14.8809 6.07719 13.4776C3.88345 12.244 2.40016 9.89664 2.40016 7.20047C2.40016 3.22421 5.62437 0 9.60063 0C13.5769 0 16.8011 3.22421 16.8011 7.20047C16.8011 9.89664 15.3162 12.2424 13.1224 13.4776C16.6811 14.8809 19.2013 18.3436 19.2013 22.4015V24H17.6011V22.4015ZM15.201 7.20047C15.201 4.10747 12.6936 1.6001 9.60063 1.6001C6.50762 1.6001 4.00026 4.10747 4.00026 7.20047C4.00026 10.2935 6.50762 12.8008 9.60063 12.8008C12.6936 12.8008 15.201 10.2935 15.201 7.20047Z" fill="#2A2A2A" />
                                </svg>

                            </Link>

                            <Link className="text-gray-600 hover:text-red-600 transition duration-200">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.2923 20.2211C6.24673 20.2211 2.16223 16.127 2.16223 11.0911C2.16223 6.04553 6.24673 1.96105 11.2923 1.96105C16.3378 1.96105 20.4223 6.04553 20.4223 11.0911C20.4223 16.127 16.3378 20.2211 11.2923 20.2211ZM25.0642 24.1901L18.7501 17.8762C20.3839 16.079 21.3834 13.7051 21.3834 11.0911C21.3834 5.51695 16.8664 1 11.2923 1C5.71815 1 1.20117 5.51695 1.20117 11.0911C1.20117 16.6652 5.71815 21.1821 11.2923 21.1821C13.9064 21.1821 16.2802 20.173 18.0774 18.5489L24.3915 24.8631C24.5741 25.0457 24.8816 25.0457 25.0642 24.8631C25.2468 24.6708 25.2468 24.3727 25.0642 24.1901Z" fill="#2A2A2A" stroke="#2A2A2A" stroke-width="0.5" />
                                </svg>

                            </Link>
                            <button className=" cursor-pointer md:hidden" onClick={handlMenuOpen} >
                                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.02453 1.69231H22.4259C22.8803 1.69231 23.249 1.31323 23.249 0.846154C23.249 0.379077 22.8803 0 22.4259 0H1.02453C0.571814 0 0.201405 0.379077 0.201405 0.846154C0.201405 1.31323 0.571814 1.69231 1.02453 1.69231ZM22.4259 6.76923H7.60957C7.15685 6.76923 6.78644 7.14831 6.78644 7.61538C6.78644 8.08246 7.15685 8.46154 7.60957 8.46154H22.4259C22.8803 8.46154 23.249 8.08246 23.249 7.61538C23.249 7.14662 22.8803 6.76923 22.4259 6.76923ZM22.4259 13.5367H1.02453C0.571814 13.5367 0.201405 13.9158 0.201405 14.3829C0.201405 14.8499 0.571814 15.229 1.02453 15.229H22.4259C22.8803 15.229 23.249 14.8499 23.249 14.3829C23.249 13.9158 22.8803 13.5367 22.4259 13.5367ZM22.4259 20.3077H10.079C9.62624 20.3077 9.25583 20.6868 9.25583 21.1538C9.25583 21.6209 9.62624 22 10.079 22H22.4259C22.8803 22 23.249 21.6209 23.249 21.1538C23.249 20.6868 22.8803 20.3077 22.4259 20.3077Z" fill="#2A2A2A" />
                                </svg>

                            </button>
                        </div>


                    </div>

                    {menu && (
                        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 md:hidden">
                            <div className=" py-4 border-t border-gray-200 ">
                                <div className=" flex flex-col space-y-4">
                                    <Link to="/business" className="text-gray-800 hover:text-red-600 focus:text-red-600 font-semibold transition duration-200   " onClick={() => { setIsMenuOpen(false) }}>Business</Link>
                                    <Link to="/entertainment" className="text-gray-800 hover:text-red-600 focus:text-red-600 font-semibold transition duration-200 " onClick={() => { setIsMenuOpen(false) }}>Entertainment</Link>
                                    <Link to="/general" className="text-gray-800 hover:text-red-600 focus:text-red-600 font-semibold transition duration-200 " onClick={() => { setIsMenuOpen(false) }}>General</Link>
                                    <Link to="/health" className="text-gray-800 hover:text-red-600 focus:text-red-600 font-semibold transition duration-200 " onClick={() => { setIsMenuOpen(false) }}>Health</Link>
                                    <Link to="/science" className="text-gray-800 hover:text-red-600 focus:text-red-600 font-semibold transition duration-200 " onClick={() => { setIsMenuOpen(false) }}>Science</Link>
                                    <Link to="/sports" className="text-gray-800 hover:text-red-600 focus:text-red-600 font-semibold transition duration-200 " onClick={() => { setIsMenuOpen(false) }}>Sports</Link>
                                    <Link to="/technology" className="text-gray-800 hover:text-red-600 focus:text-red-600 font-semibold transition duration-200 " onClick={() => { setIsMenuOpen(false) }}>Technology</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Header
