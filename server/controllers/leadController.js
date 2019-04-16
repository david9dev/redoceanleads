const axios = require('axios');
module.exports = {
  postModeFull: function(request, response)
  {
  const {form, formKey, tcpa, leadIdToken, querys} = request.body
  const { firstname, lastname, dateOfBirth, tobacco, inches, feet, weight, gender, email, phone, address, city, state, zip, age } = form;
  const lead = {
    Request: {
      Key: process.env.BOPPERDOKEY,
      API_Action:'pingPostLead',
      Mode:'full',
      Return_Best_Price: 0,
      TYPE: 24,
      Transaction_ID: querys.clickid, //(found in URL)
      Landing_Page: 'https://yourseniorcoverage.com',
      SRC: 'YourSeniorCoverage_Med',
      Sub_ID: querys.subid, //(found in URL)
      Pub_ID: querys.pubid, //(found in URL)
      User_Agent: request.headers["user-agent"], //(found in background)
      IP_Address: request.headers['x-forwarded-for'] || request.connection.remoteAddress, //(found in background)
      TCPA_Consent: 'Yes',
      TCPA_Language: tcpa,
      LeadiD_Token: leadIdToken, //(3rd party token)
      xxTrustedFormCertUrl: formKey, // (3rd party token)
      First_Name: firstname,
      Last_Name: lastname,
      Email: email,
      Primary_Phone: phone,
      Address: address,
      City: city,
      State: state, //(form-fill info),
      Zip: zip,
      Date_Of_Birth: dateOfBirth,
      Gender: gender,
      Height_Feet: feet,
      Height_Inches: inches,
      Weight: weight,
      Tobacco_Use:tobacco,
      Age: age
    }
  }
  console.log(lead)
  axios.post('https://redocean.leadportal.com/apiJSON.php', lead).then((res) =>
    {
      console.log(res.data);
      response.sendStatus(200);
    }).catch((error) =>
    {
      console.log(error);
    })

  }
}