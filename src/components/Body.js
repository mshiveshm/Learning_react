import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


const Body=()=>{
    return (
        <div className="Body">
            <div className="search">Serach</div>
            <div className="res-container">
             {
                resList.map((restaurant)=>(
                <RestaurantCard resData={restaurant}/>
                ))
             }
            </div>
        </div>
    )
    }

    export default Body;