import { bannerImages } from '../../data/pubs/pub1/pub1array'
import Textpub2 from "../../data/pubs/pub2/pub2text"
import PubC from "../../components/pub"


export default function Pub1(){
    return(

        <PubC images ={bannerImages} Textpub = {Textpub2} />

    )
}