import Mock from 'mockjs'

Mock.mock('http://localhost:8080/user', {
    'name': '@name', // 随机生成姓名
    'name': '@email', // 随机生成邮箱
    'age|1-10': 5, // 年龄1-10之间
})
Mock.mock('http://localhost:8001/menu/findNavTree', 
    findNavTree()
    //{"data": [{"id": 1}]}
    //{"code":200}
)


// 查询用户权限
Mock.mock('http://localhost:8001/user/findPermissions', 
     findPermissions()
    //{"data": [{"id": 1}]}
    //{"code":200}
)


// 查找用户的菜单权限标识集合
export function findPermissions() {
  let permsData = {
    "code": 200,
    "msg": null,
    "data": [
      null,
      "sys:user:view",
      "sys:menu:delete",
      "sys:dept:edit",
      "sys:dict:edit",
      "sys:dict:delete",
      "sys:menu:add",
      "sys:user:add",
      "sys:log:view",
      "sys:dept:delete",
      "sys:role:edit",
      "sys:role:view",
      "sys:dict:view",
      "sys:user:edit",
      "sys:user:delete",
      "sys:dept:view",
      "sys:dept:add",
      "sys:role:delete",
      "sys:menu:view",
      "sys:menu:edit",
      "sys:dict:add",
      "sys:role:add"
    ]
  }
  return {
    url: 'user/findPermissions',
    type: 'get',
    data: permsData
  }
}

export function findNavTree() {
    const navTreeData = {
      "code": 200,
      "msg": null,
      "data": [{
        "id": 1,
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "parentId": 0,
        "name": "系统管理",
        "url": null,
        "perms": null,
        "type": 0,
        "icon": "el-icon-setting",
        "orderNum": 0,
        "delFlag": 0,
        "parentName": null,
        "level": 0,
        "children": [{
          "id": 2,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 1,
          "name": "用户管理",
          "url": "/sys/user",
          "perms": null,
          "type": 1,
          "icon": "el-icon-service",
          "orderNum": 1,
          "delFlag": 0,
          "parentName": "系统管理",
          "level": 1,
          "children": []
        }, {
          "id": 3,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 1,
          "name": "机构管理",
          "url": "/sys/dept",
          "perms": null,
          "type": 1,
          "icon": "el-icon-news",
          "orderNum": 2,
          "delFlag": 0,
          "parentName": "系统管理",
          "level": 1,
          "children": []
        }, {
          "id": 4,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 1,
          "name": "角色管理",
          "url": "/sys/role",
          "perms": null,
          "type": 1,
          "icon": "el-icon-view",
          "orderNum": 4,
          "delFlag": 0,
          "parentName": "系统管理",
          "level": 1,
          "children": []
        }, {
          "id": 5,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 1,
          "name": "菜单管理",
          "url": "/sys/menu",
          "perms": null,
          "type": 1,
          "icon": "el-icon-menu",
          "orderNum": 5,
          "delFlag": 0,
          "parentName": "系统管理",
          "level": 1,
          "children": []
        }, {
          "id": 7,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "parentId": 1,
          "name": "字典管理",
          "url": "/sys/dict",
          "perms": null,
          "type": 1,
          "icon": "el-icon-edit-outline",
          "orderNum": 7,
          "delFlag": 0,
          "parentName": "系统管理",
          "level": 1,
          "children": []
        }, {
          "id": 8,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": "admin",
          "lastUpdateTime": "2018-09-23T11:32:28.000+0000",
          "parentId": 1,
          "name": "系统日志",
          "url": "/sys/log",
          "perms": "sys:log:view",
          "type": 1,
          "icon": "el-icon-info",
          "orderNum": 8,
          "delFlag": 0,
          "parentName": "系统管理",
          "level": 1,
          "children": []
        }]
      }, {
        "id": 43,
        "createBy": "admin",
        "createTime": "2018-12-27T02:57:29.000+0000",
        "lastUpdateBy": "admin",
        "lastUpdateTime": "2018-12-27T03:02:26.000+0000",
        "parentId": 0,
        "name": "系统监控",
        "url": "",
        "perms": "",
        "type": 0,
        "icon": "el-icon-info",
        "orderNum": 1,
        "delFlag": 0,
        "parentName": null,
        "level": 0,
        "children": [{
          "id": 6,
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": "admin",
          "lastUpdateTime": "2018-12-27T03:03:45.000+0000",
          "parentId": 43,
          "name": "数据监控",
          "url": "http://139.196.87.48:8001/druid/login.html",
          "perms": null,
          "type": 1,
          "icon": "el-icon-warning",
          "orderNum": 0,
          "delFlag": 0,
          "parentName": "系统监控",
          "level": 1,
          "children": []
        }]
      }]
    }
    return {
      url: 'menu/findNavTree',
      type: 'get',
      data: navTreeData
    }
  }