function logic(info)
{
  const emptyError = 'this field is required'
  // const specialChars = ['`','~','@','#','$','%','^','&','*','(',')','_','-','+','=','<','>','/',':',`'`,`"`,'[',']','{','}','\\','|',];
  // const numbers = ['1','2','3','4','5','6','7','8','9','0'];
  // const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  // const punctuation = ['.','?','!',';',',']
  const {
    firstname,
    lastname,
    dateOfBirth,
    tobacco,
    inches,
    feet,
    weight,
    gender
  } = info;
  const errors = {
    list: {
      firstname: '',
      lastname: '',
      dateOfBirth:'',
      tobacco: '',
      inches: '',
      feet: '',
      weight: '',
      gender: ''
    },
    empty: true
  }
  if(!firstname)
  {
    errors.list.firstname = emptyError;
    errors.empty = false;
  }
  if(!lastname)
  {
    errors.list.lastname = emptyError;
    errors.empty = false;
  }
  if(!dateOfBirth)
  {
    errors.list.dateOfBirth = emptyError;
    errors.empty = false;
  }
  if(!tobacco)
  {
    errors.list.tobacco = emptyError;
    errors.empty = false;
  }
  if(!inches && inches!== 0)
  {
    errors.list.inches = emptyError;
    errors.empty = false;
  }
  if(!feet)
  {
    errors.list.feet = emptyError;
    errors.empty = false;
  }
  if(!weight)
  {
    errors.list.weight = emptyError;
    errors.empty = false;
  }
  if(!gender)
  {
    errors.list.gender = emptyError;
    errors.empty = false;
  }
  return errors
}

export default logic