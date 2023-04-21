class LocalCache {
    // 传入key以及value存入localStorage
    setCache(key: string, value: any) {
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    // 传入key获取
    getCache(key: string) {
        const value = window.localStorage.getItem(key)
        if (value) {
            return JSON.parse(value)
        }
    }
    // 删除localStorage
    deleteCache(key: string) {
        window.localStorage.removeItem(key)
    }
    // 清空缓存
    clearCache() {
        window.localStorage.clear()
    }
}

export default new LocalCache()
