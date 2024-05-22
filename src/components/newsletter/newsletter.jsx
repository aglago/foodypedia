
export default function Newsletter() {
    const styles = {
        backgroundImage: 'url(/images/heroimgg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0 , 0, 0.55)',
        backgroundBlendMode: 'multiply',
        height: '150px',
        width: '750px',
        margin: '0 20px',
    }

    return (
        <section className="mb-5 flex justify-center items-center">
            <div className="rounded-lg flex justify-normal items-center flex-col" style={styles}>
                <h1 className="font-merienda text-center text-2xl text-white">Follow our newletter to Get Free Cookbook</h1>
                <div className="flex justify-center items-center gap-2 lg:gap-4">
                    <div className="seemore w-[250px] h-8 bg-white flex items-center justify-center rounded-lg">
                        <input type="text" placeholder="Enter your email here" className="text-white border-none outline-none bg-transparent placeholder-white" />
                    </div>
                    <div className="w-20 h-8 leading-8 rounded-lg px-3 bg-primary cursor-pointer text-center text-white">Subscribe</div>
                </div>
            </div>
        </section>
    )
}
