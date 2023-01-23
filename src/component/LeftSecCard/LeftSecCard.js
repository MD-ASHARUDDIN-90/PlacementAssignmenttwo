
import style from './LeftSecCard.module.css'
import { useRecoilState, useRecoilValue } from 'recoil';
import {RecoilRightSection} from '../../RecoilState/RecoilRightSection'
import {UserListData} from '../../RecoilState/UserListData'


export default function LeftSecCard() {
    const [ transferMatchedData , setTransferMatchedData] = useRecoilState(RecoilRightSection)
    const  [DataList,setDataList ]  = useRecoilState(UserListData)
 

    function handleClick(element) {
        console.log(element)
        setTransferMatchedData(element)
    }
    console.log(transferMatchedData, "i am deta which will be transfer to recoil via right sec");
    
    
    return(
        <>
        <div className={style.Container}>
          {
            DataList.map((element)=>
            <div onClick={()=>handleClick(element)} key={element.id} className={style.subContainer}>
            <div>{element.Img}</div>

            <div>
            <div>{element.Name} </div>
            <div>{element.Email} </div>
            <div>{element.name} </div>
            <div>{element.Lname} </div>
            </div>
            </div>
            )
          }
        </div>
        </>
    )
}

