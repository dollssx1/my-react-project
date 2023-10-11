
import BaseTitle from "@/app/components/BaseTitle"
import BaseInput from "@/app/components/BaseInput"
import ItemList from "./itemList"


export default function Test() {
  const name = '염대원'
  const list = ['pd1','pd2','pd3'];
  console.log(list)

  return (
    <div className="test" style={{color:'skyblue'}}>
      {name}

      {
        list.map((item, i)=>{
          return (
            <ItemList />
          )
        })
      }
      
      <BaseTitle 
        title="안녕하세요."
      />
      <BaseInput 
        title="입력값"
      />
      
    </div>
  )
}



