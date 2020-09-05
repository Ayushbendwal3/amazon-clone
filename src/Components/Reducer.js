export const intialState = {
  cart: ['bread', 'Butter']
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      break
    case 'REMOVE_FROM_CART':
      break
    default:
      return state
  }
}

export default reducer
