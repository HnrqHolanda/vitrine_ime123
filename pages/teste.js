import BootstrapCarousel from "../components/carousel"
import { bannerImages } from '../data/homearray'

export default function teste(){
    return(
        <div>
            <BootstrapCarousel images={bannerImages}/>
        </div>
    )
}