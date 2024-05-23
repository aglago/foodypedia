import { useNavigate } from "react-router-dom"
export default function Header() {
    const navigate = useNavigate();

    const toRecipeFinder = (e) => {
        navigate('/recipefinder');
        e.target.style.color = "#ff8933";
    }

    const toHome = (e) => {
        navigate('/');
        e.target.style.color = "#ff8933";
    }

    return (
        <header className=" sticky px-5 lg:px-10 flex justify-between items-center h-[4rem]">
            {/** logo */}
            <div>
                <h1 className="text-primary font-merienda capitalize">foodypedia</h1>
            </div>

            {/** Navigation */}
            <nav className="font-roboto text-[14px] hidden lg:block">
                <ul className="list-none flex gap-4 items-center">
                    <li onClick={toHome}><a href="" className="text-primary no-underline">Home</a></li>
                    <li onClick={toRecipeFinder}><a href="" className="no-underline text-black">Recipes</a></li>
                    <li><a href="" className="no-underline text-black">Videos</a></li>
                    <li><a href="" className="no-underline text-black">Contact</a></li>
                    <li><a href="" className="no-underline text-black">About</a></li>
                </ul>
            </nav>

            {/** Hamburger Icon */}
            <div className="lg:hidden">
                <img src="/images/icons/hamburger.png" alt="hamburger icon" className="w-6 h-6" />
            </div>
        </header>
    )
}
