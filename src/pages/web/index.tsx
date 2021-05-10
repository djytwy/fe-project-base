import * as React from 'react'
import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import { Button } from 'antd'

const APP : React.FC = observer(props => {
  const useCounter = useStores('counterStore')
  return (
    <>
      <h1>web应用页面！</h1>
      <Button>antd</Button>
      <div>{useCounter.counter}</div>
      <button onClick={useCounter.increment}>点击+</button>
      <button onClick={useCounter.decrement}>点击-</button>
    </>
  )
})

export default APP
