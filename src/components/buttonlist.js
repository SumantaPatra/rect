import { Button } from "./button";

const cateogory = [
    "all","music","sports","Mixes","Mantras","News","entertain","Bhajan"
]

export function ButtonList(){
    return <div className="flex">
       {
        cateogory.map((list,index)=><Button key={index} name={list}/>)
       }
    </div>
}