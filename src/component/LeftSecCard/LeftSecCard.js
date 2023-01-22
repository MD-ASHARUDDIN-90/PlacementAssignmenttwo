
import style from './LeftSecCard.module.css'
import { userList } from "../../UserDetailInformation/UserDetail"
import { useRecoilState } from 'recoil';
import {RecoilRightSection} from '../../RecoilState/RecoilRightSection'
import { useState } from 'react';


export default function LeftSecCard() {
  const [ transferMatchedData , setTransferMatchedData] = useRecoilState(RecoilRightSection)
  const [userListData ,setUserListData] = useState(userList)
    function handleClick(element) {
        console.log(element)
        setTransferMatchedData(element)
    }
    console.log(transferMatchedData, "i am deta which will be transfer to recoil via right sec");
    
    
    return(
        <>
        <div className={style.Container}>
          {
            userListData.map((element)=>
            <div onClick={()=>handleClick(element)} key={element.id} className={style.subContainer}>
            <div>{element.Img}</div>

            <div>
            <div>{element.Name}</div>
            <div>{element.Email}</div>
            </div>
            </div>
            )
          }
        </div>
        </>
    )
}

