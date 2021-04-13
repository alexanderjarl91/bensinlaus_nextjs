import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

export default function SingleCar() {

    const router = useRouter();
    
    return (
        <div>
            <Navbar />
            {router.query.carId}
        </div>
    )
}
