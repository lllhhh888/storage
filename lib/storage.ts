import { AesDecode, AesEncode } from './crypto'

type StorageValue = {
    data: any
    createTime: number
    expired?: number
}

class Storage {
    constructor() { }
    get(key: string) {
        const val = localStorage.getItem(key)
        if (!val) return null
        const data: StorageValue = JSON.parse(AesDecode(val))
        const nowDateTime = new Date().getTime()

        if (!data.expired) {
            return data.data
        }

        if( data.createTime + (data.expired * 1000) < nowDateTime){
            this.remove(key)
            return null
        }
        return   data.data
    }

    /**
     * 
     * @param key  
     * @param value 
     * @param expired 过期时间 单位/秒
     */
    set(key: string, value: string | Object, expired?: number ) {
        const data: StorageValue = {
            data: value,
            createTime: new Date().getTime(),
            expired,
        }
        localStorage.setItem(key, AesEncode(JSON.stringify(data)))
    }
    /**
     * 删除
     * @param key 
     */
    remove(key: string) {
        localStorage.removeItem(key)
    }

    /**
     * 删除全部
     */
    reomveAll() {
        localStorage.clear()
    }

    getSize() {
        return localStorage.length
    }
    has(key: string) {
        return !!localStorage.getItem(key)
    }

}

export default Storage