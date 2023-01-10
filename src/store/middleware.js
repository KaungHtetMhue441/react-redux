const delayedActionMiddleware = storeAPI => next => action => {
    if (action.type === 'todos/todoAdded') {
      setTimeout(() => {
        console.log('I am from middleware');
        next(action)
      }, 5000)
    }
  
    return next(action)
  }

export default delayedActionMiddleware;