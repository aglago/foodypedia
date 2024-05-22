import { useNavigate } from "react-router-dom"

export default function Hero() {
    const styles = {
        backgroundImage: 'url(/images/heroimgg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0 , 0, 0.55)',
        backgroundBlendMode: 'multiply',
    }

    const navigate = useNavigate();

    const toRecipeFinder = () => {
        navigate('/recipefinder')
    }

    return (
        <section className="px-0 mx-0">
            <div className="flex flex-col justify-center items-center h-[90vh] w-full text-white text-center" style={styles}>
                <p className="font-roboto px-5 md:text-xl text-white my-0">Find the menu recipe you want, cook anything so much easier</p>
                <h1 className="font-merienda px-5 text-3xl md:text-4xl lg:text-5xl mt-5">Discover a world of taste with our <br /> easy to follow recipes</h1>

                <div className="flex justify-center items-center gap-5 font-roboto text-[14px]">
                    <div className="w-24 h-8 leading-8 rounded-lg px-3 bg-primary cursor-pointer" onClick={toRecipeFinder}>Get Started</div>
                    <a href="https://youtube.com/playlist?list=PL8zglt-LDl-jpoXiUqVBsKz0xNBi55JyJ&si=n_Rh1KzcWptzU2vR" target="_blank" className="text-white no-underline">
                        <div className="seemore w-24 h-8 leading-8 rounded-lg px-3 cursor-pointer">
                            <img src="/images/icons/play.png" alt="" className="w-3 h-3" />
                            <span className="px-1">See More</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
