/* eslint-disable react/prop-types */

export default function Recipecard({image, time, status, name, description}) {
    
    return (
        <div className="h-[350px] w-[230px] shadow-lg rounded-lg overflow-hidden font-roboto pb-3">
            <img src={`${image}`} alt="" className="w-[230px] h-1/2" />
            <div className="px-2">
                <div className="text-[11px] text-greyLike flex pt-1">
                    <div className="flex-1 flex gap-2 items-center">
                        <img src="/images/icons/dish.png" alt="" className="w-3 h-3" />
                        <span>{`${time} minutes`}</span>
                    </div>

                    <div className="flex-1 flex gap-2 items-center">
                        <img src="/images/icons/time.png" alt="" className="w-3 h-3" />
                        <span className="capitalize">{status}</span>
                    </div>
                </div>

                <h3 className="text-greyLike mb-0 items-center line-clamp-1">{name}</h3>

                <p className="text-[13px] text-gray-400 line-clamp-4">{description}</p>

                <div className="flex justify-end px-4">
                    <a href="" className="text-[13px] text-primary">See recipe</a>
                </div>
            </div>
        </div>
    )
}
