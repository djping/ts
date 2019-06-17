// 枚举(enum): 用于取值被限定在一定范围内的场景，eg每周七天

// 枚举会被赋值为从0递增的数字，可根据数字得到对应的成员
enum Days1 {Sun, Mon, Tue, Wed, The, Fri, Sta}
console.log(Days1['Sun'] === 0)
console.log(Days1[5])

// 手动赋值,未赋值的元素值依次增加，但当2个值一样时，后面会覆盖前面的
enum Days2 {Sun=3, Mon=1, Tue, Wed, The, Fri, Sta}
console.log('Sun===3? ', Days2['Sun'] === 3) // true
console.log('Days2[3] = ',Days2[3]) // 此时只能为Wed,不为Sun
