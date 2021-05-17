import * as React from 'react'
import { Button } from 'antd'
import { airSystemInformation } from '../../api/demo'

const testWeb = () => {
  React.useEffect(() => {
    demo()
  }, [])

  const demo = async () => {
    const r = await airSystemInformation()
    console.log(r.computerRoomNumber, r.deviceNumber, r.energySavingRate )
  }

  return (
    <Button type='primary' />
  )
}

export default testWeb
