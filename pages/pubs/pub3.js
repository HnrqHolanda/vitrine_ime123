import { bannerImages } from '../../data/pubs/pub3/pub3array'
import Textpub3 from "../../data/pubs/pub3/pub3text"
import PubC from "../../components/pub"


export default function Pub1(){
    return(

        <PubC images ={bannerImages} Textpub = {Textpub3} />

    )
}