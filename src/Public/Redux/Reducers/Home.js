const initialState = {
  catList: [],
  isLoading: true,
  isFullfiled: false,
  isRejected: false
}

const catList = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_CAT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFullfiled: true,
        catList: action.payload.data
      }
    case 'GET_CAT_REJECTED':
      return {
        ...state,
        isRejected: true,
        isLoading: false
      }
    case 'GET_CAT_PENDING': {
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFullfiled: false
      }
    }
    default:
      return state
  }
}

export default catList