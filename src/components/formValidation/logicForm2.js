function logic(info)
{
  const STATES = ['AL','AK','AZ','AR','CA','CO','CT','DC','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
  const emptyError = 'this field is required'
  const {
    email,
    phone,
    address,
    city,
    state,
    zip
  } = info;
  const errors = {
    list: {
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    },
    empty: true
  }
  if(!email)
  {
    errors.list.email = emptyError;
    errors.empty = false;
  }
  else if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email))
  {
    errors.list.email = 'needs to be a valid email (i.e someone@test.com)'
    errors.empty = false;
  }
  if(!phone)
  {
    errors.list.phone = emptyError;
    errors.empty = false;
  }
  else if(phone.length !== 10)
  {
    errors.list.phone = 'needs to be a valid 10 digit phone number '
  }
  if(!address)
  {
    errors.list.address = emptyError;
    errors.empty = false;
  }
  if(!city)
  {
    errors.list.city = emptyError;
    errors.empty = false;
  }
  if(!state)
  {
    errors.list.state = emptyError;
    errors.empty = false;
  }
  else if(!STATES.includes(state))
  {
    errors.list.state = 'needs to be a valid state';
    errors.empty = false;
  }
  if(!zip)
  {
    errors.list.zip = emptyError;
    errors.empty = false;
  }
  return errors
}

export default logic