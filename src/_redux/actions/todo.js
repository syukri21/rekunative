import axios from 'axios'

const API_URL = `http://192.168.8.10:3333/api/v1`

export const allTodos = ()=> ({
    type: 'ALL_TODOS',
    payload: axios.get(`${API_URL}/todos`)
})

export const getTodo = (id)=> ({
    type: 'GET_TODO',
    payload: axios.get(`${API_URL}/todo/${id}`)
})

export const addTodo = (data) => {
    return (dispatch) => {
      axios.post(`${API_URL}/todo`, data).then(res=>{
        dispatch(allTodos())
      })      
    }
}