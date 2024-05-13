import FeedC from "../../components/feed"
import resume_array from "../../data/results/resume_array/resume_array"
import card1_array from "../../data/feeds/feed1/feed1array"

export default function Feed1page(){

    return(

        <div>
            <FeedC string = "Engenharia Química" dataArray={card1_array}/>
        </div>
    )

}