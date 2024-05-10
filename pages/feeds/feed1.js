import FeedC from "../../components/feed"
import resume_array from "../../data/results/resume_array/resume_array"

export default function Feed1page(){

    return(

        <div>
            <FeedC string = "Engenharia Química" dataArray={resume_array}/>
        </div>
    )

}