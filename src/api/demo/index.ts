import request from '../base'
import { AirSystemEssentialInformation } from './model'

export const airSystemInformation = () => request.get<AirSystemEssentialInformation>({
  url: '/device/AirSystemEssentialInformation',
})
