import CustomButton from "../../component/CustomButton/CustomButton";
import InputBox from "../../atom/Input/Input";
import LeftSecCard from "../../component/LeftSecCard/LeftSecCard";
import style from './LeftSection.module.css'
export default function LeftSection() {
    return(
        <>
        <div className={style.wrap}>
        <div className={style.inputBtn}>
        <InputBox />
        
        <CustomButton/>
        </div>
        <div className={style.card}>
        <LeftSecCard />
        </div>
        </div>
        </>
    )
}