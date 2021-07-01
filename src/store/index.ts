/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
import { createStore } from 'vuex'
import { testData, testPosts, postProps } from '@/mock/mockData'
import { columnProps } from '@/types/types'

interface UserProps {
  isLogin: boolean,
  id?: number,
  name?: string
}

export interface GlobalDataProps {
  columns: columnProps[],
  posts: postProps[],
  user: UserProps
}

export default createStore<GlobalDataProps>({
  state: {
    user: { isLogin: false },
    columns: testData,
    posts: testPosts
  },
  mutations: {

  },
  actions: {
  },
  getters: {
    getColumnByid: (state) => (id: number) => {
      return state.columns.find(item => item.id == id)
    },
    getPostsByCid: (state) => (id: number) => {
      return state.posts.filter((item) => item.columnId == id)
    }
  },
  modules: {
  }
})
