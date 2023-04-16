import { useBestSellers } from '../../helper/hooks'
import BestSellerContainer from '../BestSellerContainer'

const BestSellerSection = () => {

    const getBestSellers = useBestSellers()
    const bestSellers = getBestSellers.data?.slice(0, 3) ?? [];



    return <BestSellerContainer isLoading={getBestSellers.isLoading} bestSellers={bestSellers} />
}

export default BestSellerSection