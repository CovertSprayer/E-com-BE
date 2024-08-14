const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_TOKEN;
const verifySid = "VAc3af41895cebe9fe0da3e35ce3e8deee";

const client = require("twilio")(accountSid, authToken);

exports.checkValidPhone = async (phoneNumber) => {
  try {
    const lookup = await client.lookups.v1.phoneNumbers(phoneNumber).fetch();
    console.log(lookup)
    return true;
  } catch (err) {
    console.log(err)
    return false;
  }
};

exports.sendOTP = async (phone) => {
  try {
    client.verify.v2
      .services(verifySid)
      .verifications.create({ to: phone, channel: "sms" });
    return true;
  } catch (err) {
    return false;
  }
};

exports.verifyOTP = async (phone, OTP) => {
  try {
    const check = await client.verify.v2
      .services(verifySid)
      .verificationChecks.create({ to: phone, code: OTP });
    return check.status;
  } catch (err) {
    return false;
  }
};
