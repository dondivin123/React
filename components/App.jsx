
import Checkbox from './components/Checkbox'
const App = () => {
  return (
    <div>
      <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-blue-200">
      <Checkbox className={"w-[200px] h-[50px] "} type={"checkbox"} />
      <Checkbox className={"w-[200px] h-[50px]"} type={"checkbox"}/>
      </div>
    </div>
  )
};

export default App