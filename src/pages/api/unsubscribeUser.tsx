import fetch from 'isomorphic-unfetch';

//Based on subscribeUser.js
//For git commit
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
    const data =  {
      status: 'unsubscribed',
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${SUBSCRIBER_HASH}`,

      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'PATCH',
      }
    );
    
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error unsubscribing to the newsletter.
        Hit me up error@molluskular.com and I'll add you the old fashioned way :(.`,
      });
    }

    return res.status(201).json({ error: '201: User has been unsubscribed from ouor list' });
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