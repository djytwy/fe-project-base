export interface Response<T = any> {
    /**
     * 状态码
     * @type { number }
     */
    code:  number

    /**
     * 数据
     * @type { T }
     */
    datas: T

    /**
     * 消息
     * @type { string }
     */
    msg: string
}
