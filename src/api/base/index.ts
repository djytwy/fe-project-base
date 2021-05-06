import RAxios from './http'
import { ContentTypeEnum } from '../enums/httpEnums'

const configUrl = 'http://ghhmzjd.tillage-cloud.com:8002/pangu/datacenter/dataCenter'

const request = new RAxios({
  baseURL: configUrl,
  timeout: 5 * 1000,
  headers: {
    'Content-Type': ContentTypeEnum.JSON,
  },
  withCredentials: true,
})

export default request
