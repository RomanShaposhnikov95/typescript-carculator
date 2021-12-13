import {BtnPropsType} from "../App";

type btnPropsType = {
  btn: Array<BtnPropsType>
  clickBtn: (value: string ) => void
}

const Btn = (props: btnPropsType) => {
  return (
    <div className='btns'>
      {
        props.btn.map(el => (
         <div onClick={() => props.clickBtn(el.value)} className={'btn'} key={el.value}>{el.value}</div>
        ))
      }
    </div>

  )
}

export default Btn