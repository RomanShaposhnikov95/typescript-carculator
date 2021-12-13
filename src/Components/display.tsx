import {useState} from "react";

type DisplayPropsType = {
  values: string
}

const Display = (props: DisplayPropsType) => {

  // const [valueInp, setValueInp] = useState<string | number>('')

  // const onChanngeHandler = () => {
  //   setValueInp(props.values)
  // }

  return (
    <div>
      <input value={props.values} type={'text'} />
    </div>
  )
}

export default Display