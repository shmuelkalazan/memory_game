import  { useState } from 'react'

interface Props{
    setAllow:((x:any)=>void)
    allow:boolean
    card:Number
    img:string
    setAllOpencards:((x:any)=>void)
    allopencards:Number[]
}

function Card(props:Props) {
    const [boolimg ,setBoolImg] = useState<boolean>(false)
    const [clicked ,setClicked] = useState<boolean>(false)

    const clickButton = ()=>{
        setBoolImg(true)
        const checkMacth = () =>{
            // console.log([...props.allopencards ])
            props.setAllOpencards([...props.allopencards ,props.card])
            setClicked(true)
        }
        {!clicked && checkMacth()}
    }

  return (
    <button onClick={clickButton} className={`card p_btn${boolimg}`}>
        {boolimg && <p className='p_btn' >{props.img}</p>}
        {!boolimg &&<p className='p_btn'>?</p>}
    </button>
  )
}

export default Card