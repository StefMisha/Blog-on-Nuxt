export const actions = {
  async fetchAdmin({}) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {title: 'Post', date: new Date(), views: 22, comments: [1,2], _id: Math.random()},
          {title: 'Post', date: new Date(), views: 22, comments: [1,2], _id: Math.random()}
        ])
      }, 1000)
    })
  },
  async remove({}, id) {

  }
}
