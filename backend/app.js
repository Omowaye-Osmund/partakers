const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Using church email to send to itself
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("Email transporter error:", error);
  } else {
    console.log(
      "✓ Server ready to send prayer requests to",
      process.env.EMAIL_USER
    );
  }
});

app.post("/api/prayer-request", async (req, res) => {
  const { name, email, request } = req.body;

  if (!request || request.trim() === "") {
    return res.status(400).json({ error: "Prayer request is required" });
  }

  const mailOptions = {
    from: `"Partakers Prayer Requests" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // Sending to itself
    replyTo: email || undefined, // If visitor provides email, easy to reply
    subject: `🙏 New Prayer Request from ${name || "Anonymous"}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            margin: 0; 
            padding: 0; 
            background-color: #f5f5f5; 
          }
          .container { 
            max-width: 600px; 
            margin: 20px auto; 
            background: white; 
            border-radius: 10px; 
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .header { 
            background: linear-gradient(135deg, #1F1591 0%, #742F8D 50%, #1D4C80 100%); 
            color: white; 
            padding: 30px 20px; 
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: bold;
          }
          .header p {
            margin: 8px 0 0 0;
            opacity: 0.9;
            font-size: 14px;
          }
          .content { 
            padding: 30px; 
          }
          .info-section {
            background: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
          }
          .info-row { 
            margin: 12px 0;
            line-height: 1.6;
          }
          .label { 
            font-weight: bold; 
            color: #1F1591;
            display: inline-block;
            min-width: 100px;
          }
          .prayer-box { 
            background: white; 
            padding: 25px; 
            border-left: 4px solid #91772F; 
            margin: 25px 0; 
            border-radius: 4px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          .prayer-box h3 {
            color: #1F1591;
            margin: 0 0 15px 0;
            font-size: 18px;
          }
          .prayer-text {
            line-height: 1.8;
            white-space: pre-wrap;
            color: #333;
            font-size: 15px;
          }
          .footer { 
            text-align: center; 
            color: #666; 
            font-size: 12px; 
            padding: 20px;
            background: #f9f9f9;
            border-top: 1px solid #eee;
          }
          .reply-note {
            background: #E4CFB2;
            padding: 15px;
            border-radius: 6px;
            margin-top: 20px;
            font-size: 14px;
            color: #5C4A1A;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🙏 New Prayer Request</h1>
            <p>Received from Partakers Manchester Website</p>
          </div>
          
          <div class="content">
            <div class="info-section">
              <div class="info-row">
                <span class="label">From:</span>
                <span>${name || "Anonymous"}</span>
              </div>
              ${
                email
                  ? `
                <div class="info-row">
                  <span class="label">Email:</span>
                  <a href="mailto:${email}" style="color: #1F1591; text-decoration: none;">${email}</a>
                </div>
              `
                  : `
                <div class="info-row">
                  <span class="label">Email:</span>
                  <span style="color: #999;">Not provided</span>
                </div>
              `
              }
              <div class="info-row">
                <span class="label">Submitted:</span>
                <span>${new Date().toLocaleString("en-GB", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}</span>
              </div>
            </div>
            
            <div class="prayer-box">
              <h3>Prayer Request:</h3>
              <div class="prayer-text">${request}</div>
            </div>
            
            ${
              email
                ? `
              <div class="reply-note">
                💡 <strong>Tip:</strong> You can reply directly to this email to respond to ${
                  name || "this person"
                }.
              </div>
            `
                : ""
            }
          </div>
          
          <div class="footer">
            <p>This prayer request was submitted through the Partakers Manchester website</p>
            <p style="margin-top: 10px;">
              <a href="https://partakersmanchester.org" style="color: #1F1591; text-decoration: none;">
                Visit Website
              </a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(
      `✓ Prayer request sent from ${
        name || "Anonymous"
      } at ${new Date().toLocaleTimeString()}`
    );
    res.status(200).json({ message: "Prayer request sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send prayer request" });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", emailConfigured: !!process.env.EMAIL_USER });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✓ Server running on port ${PORT}`);
  console.log(`✓ Prayer requests will be sent to: ${process.env.EMAIL_USER}`);
});