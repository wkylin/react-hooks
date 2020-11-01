// const cloumn = [
//   {
//     title: 'xxx',
//     dataIndex: 'martix_0'
//   },
//   {
//     title: '我',
//     dataIndex: 'martix_1'
//   },
//   {
//     title: '你',
//     dataIndex: 'martix_2'
//   },
//   {
//     title: '他',
//     dataIndex: 'martix_3'
//   },
//   {
//     title: '她',
//     dataIndex: 'martix_4'
//   }
// ]

// const dataList = [
//   {
//     martix_0: '我',
//     martix_1: 1,
//     martix_2: 2,
//     martix_3: 2
//   },
//   {
//     martix_0: '你',
//     martix_1: 2,
//     martix_2: 2,
//     martix_3: 4
//   },
//   {
//     martix_0: '他',
//     martix_1: 2,
//     martix_2: 4,
//     martix_3: 5
//   }
// ]

//   我   你   他   她
// 我  ?   21   23   8
// 你  21  ?    43   33
// 他  23  43   ?    44
// 她  8   33   44   ?

const data = {
  data_content: {
    我: { 我: '0', 你: 21, 他: 23, 她: 8 },
    你: { 我: 21, 你: '0', 他: 43, 她: 33 },
    他: { 我: 23, 你: 43, 他: '0', 她: 44 },
    她: { 我: 8, 你: 33, 他: 44, 她: '0' },
  },
  dataList: ['我', '你', '他', '她'],
}

// const dataList = [
//   {
//     "matrix_0": "我",
//     "matrix_1": "0",
//     "matrix_2": 21,
//     "matrix_3": 23,
//     "matrix_4": 8
//   },
//   {
//     "matrix_0": "你",
//     "matrix_1": 21,
//     "matrix_2": "0",
//     "matrix_3": 43,
//     "matrix_4": 33
//   },
//   {
//     "matrix_0": "他",
//     "matrix_1": 23,
//     "matrix_2": 43,
//     "matrix_3": "0",
//     "matrix_4": 44
//   },
//   {
//     "matrix_0": "她",
//     "matrix_1": 8,
//     "matrix_2": 33,
//     "matrix_3": 44,
//     "matrix_4": "0"
//   }
// ]

const dataKeys = Object.keys(data.data_content).map((ddItem) => ({
  [`matrix_${0}`]: ddItem,
}))
const dataValues = Object.values(data.data_content).map((item) =>
  Object.values(item).map((value, ind) => ({ [`matrix_${ind + 1}`]: value }))
)

const matrixData = dataKeys.map((keyItem, index) => {
  dataValues[index].forEach((ddValue, ddIndex) => {
    keyItem[`matrix_${ddIndex + 1}`] = ddValue[`matrix_${ddIndex + 1}`]
  })
  return keyItem
})

console.log('matrixData===', matrixData)
