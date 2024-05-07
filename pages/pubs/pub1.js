import FooterC from "../../components/footer"
import HeaderC from "../../components/header"
import { bannerImages } from '../../data/pubs/pub1/pub1array'
import BootstrapCarousel from '../../components/carousel'
import Textpub1 from "../../data/pubs/pub1/pub1text"
import PubC from "../../components/pub"


export default function Pub1(){
    return(

        <PubC images ={bannerImages} Textpub = {Textpub1} />

    )
}