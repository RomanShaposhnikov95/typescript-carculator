import Btn from "./btn";
import {BtnPropsType} from "../App";


type btnPropsType = {
    btn: Array<BtnPropsType>
    clickBtn: (value: string) => void
}


const Button = (props: btnPropsType) => {
  return (
    <div>
      <Btn btn={props.btn} clickBtn={props.clickBtn}/>
    </div>
  )
}

export default Button