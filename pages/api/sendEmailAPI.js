const nodemailer = require("nodemailer");

function formatUrl(url) {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://www." + url;
  }

  if (url.startsWith("https://www.www.") || url.startsWith("http://www.www.")) {
    url = url.replace(/www\./, '');
  }

  return url;
}

export default function (req, res) {
  const htmlSendToAdmin = `<table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc;">
  <tr>
    <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
  
        <tr>
          <td style="font-family: Arial, Helvetica, sans-serif; padding: 20px 0 0 0;">
            <p style="margin: 0;">A request has been received from eForte for Generative AI Business Application</p>
          </td>
        </tr>
        <tr>
            <td style="font-family: Arial, Helvetica, sans-serif; padding: 20px 0 0 0;">
              <p style="margin-top: 52px; margin-bottom: 0px;"><strong>Personal Information:</strong></p>
                <p style="text-align:left; padding-top: 2px;">
                    <i><strong>Name: </strong>${req.body.name}</i><br>
                    <i><strong>Email address: </strong>${req.body.email}</i><br>
                    <i><strong>Phone number: </strong>${req.body.phone}</i><br>
                </p><br/><br/>

                <p><strong>Website URL: </strong><span class="fa" style="text-decoration: underline;">${formatUrl(req.body.URL)}</span></p> 

                <p style="margin-top: 52px; margin-bottom: 0px;"><strong>Al integration Questions & Answers:</strong></p>
                <p style="text-align:left; padding-top: 2px;">
                  <strong>1- ${req.body.question1}: </strong>${req.body.answer1}<br/><br/>
                  <strong>2- ${req.body.question2}: </strong>${req.body.answer2}<br/><br/>
                  <strong>3- ${req.body.question3}: </strong>${req.body.answer3}<br/><br/>
                  <strong>4- ${req.body.question4}: </strong>${req.body.answer4}<br/><br/>
                  <strong>5- ${req.body.question5}: </strong>${req.body.answer5}<br/><br/>
                  <strong>6- ${req.body.question6}: </strong>${req.body.answer6}<br/><br/>
                  <strong>7- ${req.body.question7}: </strong>${req.body.answer7}
              </p>
              </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td bgcolor="#F5F5F5" style="padding: 5px 10px 5px 10px">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;" align="left">
            <tr>
                <td style="width: 90px;">
                    <img style="width: 90px;" src="https://eforte.io/images/eForte_logo.svg"/>
                </td>
                <td style="width: 3px; background-color: #0b3558;"></td>
                <td style="width: 430px; padding-left: 10px;">
                      <p style="color:#0b3558; margin: 0 12px;"> 
                        <strong>Business Development</strong>
                        <p style="font-size: small; color: #000; margin: 2px;"> 
                            <strong style="color: #0b3558;">a:</strong> eForte | 919 North Market Street, Suite 950 Wilmington, DE 19801.
                        </p>
                        <p style= "font-size: small; color: #000; margin: 2px;"> 
                            <strong style="color: #0b3558;">e:</strong> <a class="fa" href="mailto:info@eforte.io"  style="color:darkgreen; text-decoration: underline;">info@eforte.io</a>
                            | <strong  style="color: #0b3558;">w:</strong> <a class="fa" href="https://eforte.io" target="blank" style="color:darkgreen; text-decoration: underline;">www.eforte.io</a>
                        </p>
                        <p style="font-size: small; color: #000; margin: 2px; padding-bottom: 5px;"> 
                            <strong style="color: #0b3558;">p:</strong>  +1 408 622 0105 (9:00 am to 6:00 pm Pacific Time)
                        </p>
                        <a href="https://www.facebook.com/eForteSolutions/" target="blank" style="text-decoration: none; padding: 2px;"> 
                          <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/facebook_ekglz7.png" width="17px" height='17px' />
                        </a>
                        <a href="https://twitter.com/eforte_net/" target="blank" style="text-decoration: none; padding: 2px;"> 
                          <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/twitter_ucracw.png" width="17px" height='17px' />
                        </a>
                        <a href="https://www.linkedin.com/company/eforte-solutions/" target="blank" style="text-decoration: none; padding: 2px;"> 
                          <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/linkedin_r1qwpo.png" width="17px" height='17px' />
                        </a>
                      </p>
                </td>
            </tr>
      </table>
    </td>
  </tr>
  </table>

`;

  const htmlSendToUser = `<table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc;">
  <tr>
    <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
  
        <tr>
          <td style="font-family: Arial, Helvetica, sans-serif; padding: 20px 0 0 0;">
            <p style="margin-top: 15px;">We have received your input, your AI evaluation report will be sent to your email in next 24 hours.</p>
            <p style="margin-top: 30px;">To learn more about our services, please visit our website at <a class="fa" href="https://www.eforte.io" target="blank" style="color:darkgreen; text-decoration: underline;">www.eforte.io</a></p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
      <td bgcolor="#F5F5F5" style="padding: 5px 10px 5px 10px">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;" align="left">
              <tr>
                  <td style="width: 90px;">
                      <img style="width: 90px;" src="https://eforte.io/images/eForte_logo.svg"/>
                  </td>
                  <td style="width: 3px; background-color: #0b3558;"></td>
                  <td style="width: 430px; padding-left: 10px;">
                        <p style="color:#0b3558; margin: 0 12px;"> 
                          <strong>Business Development</strong>
                          <p style="font-size: small; color: #000; margin: 2px;"> 
                              <strong style="color: #0b3558;">a:</strong> eForte | 919 North Market Street, Suite 950 Wilmington, DE 19801.
                          </p>
                          <p style= "font-size: small; color: #000; margin: 2px;"> 
                              <strong style="color: #0b3558;">e:</strong> <a class="fa" href="mailto:info@eforte.io"  style="color:darkgreen; text-decoration: underline;">info@eforte.io</a>
                              | <strong  style="color: #0b3558;">w:</strong> <a class="fa" href="https://eforte.io" target="blank" style="color:darkgreen; text-decoration: underline;">www.eforte.io</a>
                          </p>
                          <p style="font-size: small; color: #000; margin: 2px; padding-bottom: 5px;"> 
                              <strong style="color: #0b3558;">p:</strong>  +1 408 622 0105 (9:00 am to 6:00 pm Pacific Time)
                          </p>
                          <a href="https://www.facebook.com/eForteSolutions/" target="blank" style="text-decoration: none; padding: 2px;"> 
                            <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/facebook_ekglz7.png" width="17px" height='17px' />
                          </a>
                          <a href="https://twitter.com/eforte_net/" target="blank" style="text-decoration: none; padding: 2px;"> 
                            <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/twitter_ucracw.png" width="17px" height='17px' />
                          </a>
                          <a href="https://www.linkedin.com/company/eforte-solutions/" target="blank" style="text-decoration: none; padding: 2px;"> 
                            <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/linkedin_r1qwpo.png" width="17px" height='17px' />
                          </a>
                        </p>
                  </td>
              </tr>
        </table>
      </td>
    </tr>
  </table>`;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      ssl: false,
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.email_id,
        pass: process.env.email_password,
      },
    });

    transporter.sendMail(
      {
        from: process.env.email_id , // sender address
        to: process.env.admin_email, // list of receivers
        subject: "Generative AI Business Application request from eForte", // Subject line
        // text: "From Ejaz Patient Care", // plain text body
        html: htmlSendToAdmin, // html body
      },
      (err, data) => {
        if (err) {
          // throw new Error(err);
          console.log("Email could not be sent--->", err);
          return res.status(400).json({
            statusCode: 400,
            error: "Email could not be sent",
          });
        } else {
          if (req.body.email) {
            transporter.sendMail(
              {
                from: process.env.admin_email, // sender address
                to: req.body.email || req.body.email, // list of receivers
                subject:
                  "Thankyou for your interest in Free Evaluation Report on Al Integration into your business", // Subject line
                // text: "From Ejaz Patient Care", // plain text body
                html: htmlSendToUser, // html body
              },
              (err, data) => {
                if (err) {
                  // throw new Error(err);
                  console.log("Email could not be sent--->", err);
                  return res.status(400).json({
                    statusCode: 400,
                    error: "Email could not be sent",
                  });
                } else {
                  console.log("Email sent");
                  return res.status(200).json({
                    statusCode: 200,
                    data: data,
                  });
                }
              }
            );
          } else {
            console.log("Email sent");
            return res.status(200).json({
              statusCode: 200,
              data: data,
            });
          }
        }
      }
    );
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      error: error.message,
    });
  }
}
