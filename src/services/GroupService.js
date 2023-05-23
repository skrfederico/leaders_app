const STUB = [
  { _id: '100', body: 'lorem' },
  { _id: '101', body: 'ispsum' },
  { _id: '102', body: 'dolor' }
]

class GroupService {
  base_URL = 'http://localhost:3001/api'

  //this is almost like a credit interface
  //or a CRUD client
  async getAllGroups() {
    return STUB
  }
  async getOneGroup(id) {
    return STUB.filter((val) => val._id === id)[0]
  }
  async createGroup(group) {
    return { _id: String(Math.random() * 124), body: group }
  }
  async deleteGroup(id) {
    return
  }
  async updateGroup(id, group) {
    return {
      _id: id,
      body: group
    }
  }
}
//This is a SINGLETON
//just one single service
const groupService = new GroupService()
export default groupService
