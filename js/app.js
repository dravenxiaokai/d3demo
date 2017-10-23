//部分代码
D3.json(url, (err, data) => {
    if(err){
        alert('加载数据失败，请检查您的网络')
    }

    Utils.getData(data)

    Treemap.show()
})