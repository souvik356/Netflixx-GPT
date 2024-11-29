export const chechEmailandPass = (email,password,name)=>{
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
  const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
  
  if(isNameValid === false) return "name is not valid"
  if(isEmailValid === false) return "Email is not valid"
  if(isPasswordValid === false) return "Password is not valid"

  return null
}