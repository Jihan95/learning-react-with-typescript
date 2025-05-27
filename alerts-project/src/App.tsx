import { BellRing, Ban, CheckCheck, Info, OctagonX} from 'lucide-react'
import './App.css'
import Alert from './assets/components/ui/Alert/alert'

function App() {

  return (
    <>
    <Alert type='alert-error' icon={<Ban size={20}/>}
    title="Something Went Wrong"
    description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque dolorum sapiente reprehenderit, facere ut voluptas aliquam a ex omnis, ratione laborum voluptates numquam adipisci velit ullam dolorem saepe! Sunt, magnam.'
    />
    <Alert type='alert-info' icon={<Info size={20}/>}
    title="Info"
    description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque dolorum sapiente reprehenderit, facere ut voluptas aliquam a ex omnis, ratione laborum voluptates numquam adipisci velit ullam dolorem saepe! Sunt, magnam.'
    />
    <Alert type='alert-success' icon={<CheckCheck size={20}/>}
    title="order has been done"
    description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque dolorum sapiente reprehenderit, facere ut voluptas aliquam a ex omnis, ratione laborum voluptates numquam adipisci velit ullam dolorem saepe! Sunt, magnam.'
    />
    <Alert type='alert-warning' icon={<OctagonX size={20}/>}
    title="warning"
    description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque dolorum sapiente reprehenderit, facere ut voluptas aliquam a ex omnis, ratione laborum voluptates numquam adipisci velit ullam dolorem saepe! Sunt, magnam.'
    />
    <Alert type='alert-default' icon={<BellRing size={20}/>}
    title="keep in mind"
    description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque dolorum sapiente reprehenderit, facere ut voluptas aliquam a ex omnis, ratione laborum voluptates numquam adipisci velit ullam dolorem saepe! Sunt, magnam.'
    />
    </>
  )
}

export default App
