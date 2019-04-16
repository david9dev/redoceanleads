function validInput(prevInput, input, name)
{
  const specialChars = ['`','~','@','#','$','%','^','&','*','(',')','_','-','+','=','<','>','/',':',`'`,`"`,'[',']','{','}','\\','|', '\n', '\t', ' '];
  const numbers = ['1','2','3','4','5','6','7','8','9','0'];
  const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const punctuation = ['.','?','!',';',','];
  let keyStroke = "";
  if(input.length < prevInput.length)
  {
    // console.log('back space')
    // if(name !== 'dateOfBirth')
    // {
    //   return input;
    // }
    // else
    // {
    //   return input;
    // }
    return input;
  }
  for(let i = 0; i < input.length; i++)
  {
    if(prevInput[i] !== input[i])
    {
      keyStroke = input[i];
      break;
    }
  }
  switch(name)
  {
    case 'firstname':
    {
      if(numbers.includes(keyStroke) || (specialChars.includes(keyStroke) && keyStroke !== '-' && keyStroke !== `'`) || (punctuation.includes(keyStroke) && keyStroke !== '.') )
      {
        return prevInput
      }
      return input
       
    }
    case 'lastname':
    {
      if(numbers.includes(keyStroke) || (specialChars.includes(keyStroke) && keyStroke !== '-' && keyStroke !== `'`) || (punctuation.includes(keyStroke) && keyStroke !== '.') )
      {
        return prevInput
      }
      return input
    }
    case 'dateOfBirth':
    {
      if(specialChars.includes(keyStroke) || letters.includes(keyStroke.toLowerCase()) || punctuation.includes(keyStroke))
      {
        return prevInput;
      }
      else if(input.length === 2)
      {
        return input + '/';
      }
      else if(input.length === 5)
      {
        return input + '/';
      }
      else if(input.length === 11)
      {
        return prevInput
      }
        return input;
    }
    case 'inches':
    {
      if(specialChars.includes(keyStroke) || letters.includes(keyStroke.toLowerCase()) || punctuation.includes(keyStroke))
      {
        return prevInput;
      }
      else if(parseInt(input, 10) >= 12 || input.length > 2)
        {
          return prevInput;
        }
        return input;
    }
    case 'feet':
    {
      if(specialChars.includes(keyStroke) || letters.includes(keyStroke.toLowerCase()) || punctuation.includes(keyStroke))
      {
        return prevInput;
      }
      else if(input.length > 1)
        {
          return prevInput;
        }
        return input;
    }
    case 'weight':
    {
      if(specialChars.includes(keyStroke) || letters.includes(keyStroke.toLowerCase()) || punctuation.includes(keyStroke))
      {
        return prevInput;
      }
      else if(input.length >= 4)
      {
        return prevInput
      }
      return input;
    }
    case 'phone':
    {
      if(specialChars.includes(keyStroke) || letters.includes(keyStroke.toLowerCase()) || punctuation.includes(keyStroke))
      {
        return prevInput;
      }
      else if(input.length > 10)
      {
        return prevInput
      }
      return input
    }
    case 'city':
    {
      if(numbers.includes(keyStroke) || (punctuation.includes(keyStroke) && keyStroke !== '.' && keyStroke !== ','))
      {
        return prevInput
      }
      return input;
    }
    case 'state':
    {
      if(numbers.includes(keyStroke) || specialChars.includes(keyStroke) || punctuation.includes(keyStroke))
      {
        return prevInput;
      }
      else if(input.length > 2)
      {
        return prevInput
      }
      return input.toUpperCase();
    }
    case 'zip':
    {
      if(specialChars.includes(keyStroke) || letters.includes(keyStroke.toLowerCase()) || punctuation.includes(keyStroke))
      {
        return prevInput;
      }
      else if(input.length > 5)
      {
        return prevInput
      }
      return input;
    }
    default:
    {
      return input
    }
  }
}
export default validInput