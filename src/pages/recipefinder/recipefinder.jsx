/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { Recipecard, Header } from '../../../lib/exports'

export default function RecipeFinder() {
    const [foodList, setFoodList] = useState([]);
    const [foodSearched, setFoodSearched] = useState('');
    const [isloaded, setIsLoaded] = useState(false);

    function handleData(data, foodSearched) {
        setFoodList(data);
        setIsLoaded(true);
        setFoodSearched(foodSearched);
    }

    return (
        <>
            <Header />
            {
                isloaded
                    ? <FoodList foodlist={foodList} foodSearched={foodSearched} />
                    : <SearchSection handleData={handleData} isloaded={isloaded} />
            }
        </>
    )
}

function SearchSection({ handleData }) {
    const [food, setFood] = useState('');

    const baseURL = 'https://dummyjson.com/recipes/search?q=';
    const searchURL = baseURL + food;

    const handleSetFood = (e) => {
        setFood(e.target.value);
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter')
            fetchData();
    }

    const styles = {
        backgroundImage: 'url(/images/spices.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        backgroundBlendMode: 'multiply',
    }

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(searchURL)
            const data = response.data.recipes
            handleData(data, food);
        } catch (error) {
            console.log('could not fetch data');
        }
    }

    return (
        <div className="h-[90vh] px-5 md:px-10 flex justify-center items-center flex-col gap-6 relative" style={styles}>
            <div className="text-center text-white">
                <h2 className="font-merienda text-primary text-[20px] md:text-3xl lg:text-4xl my-0">Having a hard time cooking?</h2>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-sans font-medium my-0">Find the best recipes with us</h1>
                <p className="font-roboto font-light my-1 text-xs md:text-lg">Explore through our wide range of recipes from different categories. Continental to Chinese? We have it all, just enter your keyword and go</p>
            </div>
            
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Search anything"
                    className="w-60 md:w-80 py-2 md:py-5 lg:py-3 px-5 outline-none placeholder:md:text-lg rounded"
                    ref={inputRef}
                    onChange={handleSetFood}
                    onKeyDown={handleEnter}
                />
                <div className="py-2 px-3 md:px-6 rounded bg-primary w-fit flex justify-center items-center" onClick={fetchData}>
                    <img src="/images/icons/white-search.png" alt="search icon" className="w-3 h-3 md:w-6 md:h-6" />
                </div>
            </div>
        </div>
    )
}

function FoodList({ foodlist, foodSearched }) {
    return (
        <section className="py-12 px-14 flex justify-center items-center flex-col gap-5">
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Search anything"
                    className="w-60 md:w-80 py-2 md:py-5 lg:py-3 px-5 outline-none placeholder:md:text-lg rounded"
                    // ref={inputRef}
                    // onChange={handleSetFood}
                    // onKeyDown={handleEnter}
                />
                <div className="py-2 px-3 md:px-6 rounded bg-primary w-fit flex justify-center items-center" >
                    <img src="/images/icons/white-search.png" alt="search icon" className="w-3 h-3 md:w-6 md:h-6" />
                </div>
            </div>

            <div>
                <h3 className="font-merienda text-center text-2xl">{`Your recipe search for "${foodSearched}"`}</h3>
                <div className="flex flex-wrap items-center justify-center gap-5 pt-5">
                    {
                        foodlist.length > 0
                        ? foodlist.map((food, index) => {
                            return ( <Recipecard
                                key={index}
                                image={food.image}
                                time={food.cookTimeMinutes}
                                status={food.difficulty}
                                name={food.name}
                                description={food.instructions}
                            />)
                        })
                        : <div>
                                <p>{`There are no recipes for ${foodSearched}`}</p>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}