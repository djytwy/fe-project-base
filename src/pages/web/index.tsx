import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import { Button } from 'antd'
import { airSystemInformation } from '../../api/demo'

const APP : React.FC = observer(props => {
  const useCounter = useStores('counterStore')
  const location = useLocation()

  React.useEffect(() => {
    /**
     * 获取路由传入的参数
     */
    console.log(location.state)
    demo()
  }, [])

  const demo = async () => {
    const r = await airSystemInformation()
    console.log(r.computerRoomNumber, r.deviceNumber, r.energySavingRate )
  }

  return (
    <>
      <h1>web应用页面！</h1>
      <Button type='primary'>antd</Button>
      <div>{useCounter.counter}</div>
      <button onClick={useCounter.increment}>点击+</button>
      <button onClick={useCounter.decrement}>点击-</button>
    </>
  )
})

export default APP
