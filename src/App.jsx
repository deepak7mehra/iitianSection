import Card from "./component/Card"

const arr = [1,2,3,4,5,6,7];


function App() {
  

  return (
    <div className='h-screen  bg-[#121313] pt-4 w-[100%] overflow-hidden '>
      <div className="text-3xl text-cyan-500 text-center p-3">Our IITian Team</div>
      <div className="p-3 text-[#ffff] text-center">As per derscribe , Created IITian section ,with foldable hover effect. I am fullstack developer linkedin and github given below</div>
      <div className="flex justify-between  bg-[#121313] w-[4200px] slide-track  ">
        
      {
        arr.map((curr)=><div className="">
          <Card>
        {Card.front()}
        {Card.back()}
      </Card>

        </div> )}
      {
        arr.map((curr)=><div className="">
          <Card>
        {Card.front()}
        {Card.back()}
      </Card>

        </div> )}

      </div>
      
        
      
      
      
    </div>
  )
}

export default App
