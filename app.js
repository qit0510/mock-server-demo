const express = require('express')
const mock = require('mockjs')

const app = express()

//city
app.use('/api/city',function(req, res){
  res.json(mock.mock({
      'status': 200,
      city
  }))
})
// staff
app.use('/api/staff',function(req, res){
  res.json(mock.mock({
      'status': 200,
      'data|30-60':[{
        id:'@id',
        title:'@cname',
        name:'@cname',
        'type|1-3':100, //类别
        'grade|1-3':100, //等级
        'status|1-3':100,  //状态
        'position':{"longitude|121.10":567,"latitude|31.10": 245},  //位置
        address:'@city(true)',  //地址
        remarks:'@cparagraph(1, 3)', //说明
        timer:'@datetime("y-M-d H:m:s")' //时间
      }]
  }))
})
// warning
app.use('/api/warning',function(req, res){
  res.json(mock.mock({
      'status': 200,
      'data|60-120':[{
        id:'@id',
        'type|1-23':100, //类别
        'grade|1-3':100, //等级
        'status|1-3':100,  //状态longitude:121.4222,latitude:31.218123}}
        'position':{"longitude|121.10":567,"latitude|31.10":245},  //位置
        'address|1-20': 100,  //地址
        'remarks|1-20': 100, //说明(1, 3)
        timer:'@datetime("y-M-d H:m:s")' //时间
      }]
  }))
})
//security
app.use('/api/disposal/security',function(req, res){
  res.json(mock.mock({
      'status': 200,
      'data|12': [{
        id: '@id',
        'type|1': [
          '工程型防火门门磁',
          '烟雾感知探测器',
          '烟雾温度感知探测器',
          '电气火灾探测器',
          '楼道非法堆物探测器',
          '室外消防栓水压探测器',
          '喷淋末端水压探测器',
          '消防通道非法占用及停车位探测器',
          '消防风机排烟压差监测器',
          '消防水箱水位监测器',
          '消防主机信息采集装置',
          '消防巡检系统'
        ],
        'count|1-200': 100,
        'handling|1-200': 100,
        'unhandle|1-200': 100
      }]
  }))
})
const city = [
  {id:1,name:'黄浦区',	adcode:310101, citycode:'021',position:{longitude:121.490317,latitude:31.222771}},
  {id:2,name:'徐汇区',	adcode:310104, citycode:'021',position:{longitude:121.43752,latitude:31.179973}},
  {id:3,name:'长宁区',	adcode:310105, citycode:'021',position:{longitude:121.4222,latitude:31.218123}},
  {id:4,name:'静安区',	adcode:310106, citycode:'021',position:{longitude:121.448224,latitude:31.229003}},
  {id:5,name:'普陀区',	adcode:310107, citycode:'021',position:{longitude:121.392499,latitude:31.241701}},
  {id:6,name:'虹口区',	adcode:310109, citycode:'021',position:{longitude:121.491832,latitude:31.26097}},
  {id:7,name:'杨浦区',	adcode:310110, citycode:'021',position:{longitude:121.522797,latitude:31.270755}},
  {id:8,name:'闵行区',	adcode:310112, citycode:'021',position:{longitude:121.375972,latitude:31.111658}},
  {id:9,name:'宝山区',	adcode:310113, citycode:'021',position:{longitude:121.489934,latitude:31.398896}},
  {id:10,name:'嘉定区',	adcode:310114, citycode:'021',position:{longitude:121.250333,latitude:31.383524}},
  {id:11,name:'浦东新区',	adcode:310115, citycode:'021',position:{longitude:121.567706,latitude:31.245944}},
  {id:12,name:'金山区',	adcode:310116, citycode:'021',position:{longitude:121.330736,latitude:30.724697}},
  {id:13,name:'松江区',	adcode:310117, citycode:'021',position:{longitude:121.223543,latitude:31.03047}},
  {id:14,name:'青浦区',	adcode:310118, citycode:'021',position:{longitude:121.113021,latitude:31.151209}},
  {id:15,name:'奉贤区',	adcode:310120, citycode:'021',position:{longitude:121.458472,latitude:30.912345}},
  {id:16,name:'崇明区',	adcode:310151, citycode:'021',position:{longitude:121.397516,latitude:31.626946}}
]


// let data=Mock.mock({
//   'data|20':[
//   {"longitude|121.10": 1.39,
//   "latitude|31.10": 1.22},
//   {"longitude|121.10": 1.458,
//   "latitude|31.10": 1.912},
//   {"longitude|121.10": 1.113,
//   "latitude|31.10": 1.151},
//   {"longitude|121.10": 1.223,
//   "latitude|31.10": 1.030},
//   {"longitude|121.10": 1.330,
//   "latitude|31.10": 1.724},
//   {"longitude|121.10": 1.567,
//   "latitude|31.10": 1.245},
//   {"longitude|121.10": 1.250,
//   "latitude|31.10": 1.383},
//   {"longitude|121.10": 1.489,
//   "latitude|31.10": 1.398},
//   {"longitude|121.10": 1.375,
//   "latitude|31.10": 1.111},
//   {"longitude|121.10": 1.522,
//   "latitude|31.10": 1.270},
//   {"longitude|121.10": 1.491,
//   "latitude|31.10": 1.260},
//   {"longitude|121.10": 1.392,
//   "latitude|31.10": 1.241},
//   {"longitude|121.10": 1.448,
//   "latitude|31.10": 1.229},
//   {"longitude|121.10": 1.422,
//   "latitude|31.10": 1.218},
//   {"longitude|121.10": 1.490,
//   "latitude|31.10": 1.222},
//   {"longitude|121.10": 1.437,
//   "latitude|31.10": 1.179},
//   ]
// })
// let securityTypeData = Mock.mock({
//   'data|12': [{
//     id: '@id',
//     'type|1': [
//       '工程型防火门门磁',
//       '烟雾感知探测器',
//       '烟雾温度感知探测器',
//       '电气火灾探测器',
//       '楼道非法堆物探测器',
//       '室外消防栓水压探测器',
//       '喷淋末端水压探测器',
//       '消防通道非法占用及停车位探测器',
//       '消防风机排烟压差监测器',
//       '消防水箱水位监测器',
//       '消防主机信息采集装置',
//       '消防巡检系统'
//     ],
//     'count|1-200': 100,
//     'handling|1-200': 100,
//     'unhandle|1-200': 100
//   }]
// })

// let serviceTypeData = Mock.mock({
//   'data|13': [{
//     id: '@id',
//     'type|1': [
//       '温湿度探测器',
//       '窖井盖状态监测',
//       '窖井下水位探测器',
//       '垃圾满溢探测器',
//       '道路车流量监测',
//       '道路积水探测器',
//       '扬尘噪音监测',
//       '室外气象环境监测',
//       '远传路灯监控器',
//       '电梯运行监测系统',
//       '水电气能耗监测',
//       '通信交接箱监测',
//       '公厕坑位状态监测',
//       '公厕空气环境监测'
//     ],
//     'count|1-200': 100,
//     'handling|1-200': 100,
//     'unhandle|1-200': 100
//   }]
// })

// let managementTypeData = Mock.mock({
//   'data|10': [{
//     id: '@id',
//     'type|1': [
//       '电动自行车集中充电桩',
//       '二次供水水质探测器',
//       '烟雾温度探测器',
//       '门窗开关状态监测',
//       '居家固定式一键求助报警器',
//       '居家移动式一键求助报警器',
//       '可燃气体探测器',
//       '人体活动红外探测器',
//       '生命体征床脚垫探测器',
//       '志愿者巡更管理'
//     ],
//     'count|1-200': 100,
//     'handling|1-200': 100,
//     'unhandle|1-200': 100
//   }]
// })



// module.exports={
//   [`GET /api/warning`](req,res){
    // let warningDate=Mock.mock({
    //   'data|60-120':[{
    //     id:'@id',
    //     'type|1-23':100, //类别
    //     'grade|1-3':100, //等级
    //     'status|1-3':100,  //状态longitude:121.4222,latitude:31.218123}}
    //     'position':{"longitude|121.10":567,"latitude|31.10":245},  //位置
    //     'address|1-20': 100,  //地址
    //     'remarks|1-20': 100, //说明(1, 3)
    //     timer:'@datetime("y-M-d H:m:s")' //时间
    //   }]
    // });
//     res.status(200).json(warningDate.data);
//   },
//   //员工
//   [`GET /api/staff`](req,res){
//     res.status(200).json(staffDate.data);
//   },
// //类型监测
// //   [`GET /api/disposal`](req,res){
// //     res.status(200).json(disposalData.data);
// //   },
//   //获取地区
//   [`GET /api/city`](req,res){
//     res.status(200).json(city);
//   },
//   [`GET /api/disposal/service`](req,res){
//     res.status(200).json(serviceTypeData.data);
//   },
//   [`GET /api/disposal/security`](req,res){
//     res.status(200).json(securityTypeData.data);
//   },
//   [`GET /api/disposal/management`](req,res){
//     res.status(200).json(managementTypeData.data);
//   },
// }


app.listen(3000)