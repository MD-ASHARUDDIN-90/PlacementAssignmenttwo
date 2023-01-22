
import { useRecoilValue } from 'recoil'
import {RecoilRightSection} from '../../RecoilState/RecoilRightSection'

export default function RightSection() {
    const rightSecUserDetail = useRecoilValue(RecoilRightSection)
    console.log(rightSecUserDetail,"I am from recoil")
    return(
        <>
        <h1> Name : {rightSecUserDetail.Name}</h1>

        <h1>ADDRESS: {rightSecUserDetail.Address}</h1>
    
        </>
    )
}