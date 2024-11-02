import React from 'react'
import Card from './Card'
import { useState ,useEffect } from 'react'


interface Props{
    setAllow:((x:any)=>void)
    allow:boolean
    setAllOpencards:((x:any)=>void)
    allopencards:Number[]
}

interface Card {
    img:string
    index:number
}

const a:string | undefined = ""

function Deshbord(props: Props) {
    const [ allImg, setAllImg] = useState<Card[]>([
        {img:"👍",index:1},
        {img:"🗑",index:2},
        {img:"👌",index:3},
        {img:"👀",index:4},
        {img:"😜",index:5},
        {img:"🎉",index:6},
        {img:"🎁",index:7},
        {img:"😆",index:8},
        {img:"👍",index:1},
        {img:"🗑",index:2},
        {img:"👌",index:3},
        {img:"👀",index:4},
        {img:"😜",index:5},
        {img:"🎉",index:6},
        {img:"🎁",index:7},
        {img:"😆",index:8},
    ])
    
    
    const [first, setFirst] = useState(true)
    if (first){
        function shuffleArray(array: Card[]): Card[] {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]]; 
            }console.log(array)
            return array;
        }
        setAllImg(shuffleArray(allImg))
        setFirst(false)
    }
    //
    let leng:boolean = props.allopencards.length >= 2
    useEffect(() => {
        {
            console.log(allImg)
            {leng && props.allopencards.length %2 == 0 
                && props.allopencards[props.allopencards.length -1] !=
                props.allopencards[props.allopencards.length -2] &&
                setTimeout(()=>{props.setAllow(false)},1500)
        
        }
    }
    },[props.allopencards])

    return (
        <div className='deshbord'>
            {props.allow && allImg.map((item,inx) => (
                <Card 
                    key={inx}
                    allopencards={props.allopencards}
                    setAllOpencards={props.setAllOpencards}
                    img={item.img} 
                    allow={props.allow}
                    setAllow={props.setAllow}
                    card={item.index} 
                />
            ))}
        </div>
    );
}
export default Deshbord