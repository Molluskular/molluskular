import fetch from 'isomorphic-unfetch';

export async function checkIfExists(email:String) {
  var results = 500;

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;
    var md5 = require('md5');
    const SUBSCRIBER_HASH = md5(email);

    const response = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${SUBSCRIBER_HASH}`,
    {
      body: null,
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });

    return response.status;
  } catch(error) {
    return results;
  }
}

export default async (req:any, res:any) => {
  const { email } = req.body;
  console.log({ email });

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;
    var md5 = require('md5');
    const SUBSCRIBER_HASH = md5(email);
    const data = {
      email_address: email,
      status: 'pending',
      update_existing: true,
      send_welcome: true,
      double_optin: true,
    };  

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${SUBSCRIBER_HASH}`,

      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    );

    if (response.status >= 400) {
      const isExists = await checkIfExists(email);
      if(isExists === 200) {
        return res.status(403).json({error:'Already exists. Not adding'});
      }

      return res.status(response.status).json({
        error: `There was an error subscribing to the newsletter. Error code: ${response.status} Reason: ${response.statusText}`,
      });
    }

    return res.status(201).json({ error: '201: User has been added to our list' });
  } catch (error) {
    if (typeof error === "string") {
      return res.status(500).json({ error: error.toUpperCase()});
    } else if(error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json({ error: 'an unknown error has occured'});
    }
  }
};