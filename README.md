
## 安装
```
npm install storage --save
```

### 说明
```
可以使用esm,script方式引入
兼容typscript
```

### esm导入使用
```
import  Storage from 'storage'
const storage = new Storage()
```


### script标签引入/dist/storage.umd.js使用
```
const storage = new Storage()
```


### 根据某个key获取
```
storage.get(key: string)
```


### 设置存储数据
```
storage.set(key: string,value: any,expired?: number)
```