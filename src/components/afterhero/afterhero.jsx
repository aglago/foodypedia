
export default function Afterhero() {
    const styles1 = {
        backgroundImage: "url('/images/afterhero-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "10px",
        /** FIXME: These take no effect, why? */
        top: "0px",
        right: "-10px",
    }

    const styles2 = {
        backgroundImage: "url('/images/afterhero-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "10px"
    }

    return (
        <section className="relative py-10">
            <h1 className="font-merienda text-center text-4xl">Make dishes that are diverse <br />and appetizing</h1>

            <div className="relative lg:auto flex flex-col md:flex-row justify-center items-center gap-14 md:gap-20 lg:gap-10">
                <div className="relative left-9 lg:left-auto py-5">
                    <div className="abosolute rotate-12 h-[140px] w-[200px] lg:h-[180px] lg:w-[290px]" style={styles1}></div>
                    <div className="absolute top-20 right-20 h-[140px] w-[200px] lg:h-[180px] lg:w-[290px]" style={styles2}></div>
                </div>

                <p className="max-w-72 md:max-w-60 lg:max-w-72 font-roboto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum necessitatibus sit vero sapiente, distinctio sed ducimus doloremque fugiat? Nisi ut velit minima nostrum assumenda laudantium excepturi qui odio esse explicabo.</p>
            </div>
        </section>
    )
}
