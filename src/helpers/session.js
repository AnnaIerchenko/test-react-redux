export function checkCredentials(params) {
    if (
      params.username.toLowerCase() !== 'developer21' ||
      params.password !== '123456'
    ) {
      return false
    }
  
    return true
  }