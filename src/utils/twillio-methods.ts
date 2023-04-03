import client from 'twilio';

const accountSid = process.env.TWILLIO_ACCOUNT_SID;
const authToken = process.env.TWILLIO_TOKEN;
const messagingServiceSid = process.env.TWILLIO_MSG_ID;

const twillioMessageInstance = client(accountSid, authToken).messages;

export const sendOtp = async (phNumber: string, otp: number): Promise<any> => {
  try {
    const message = await twillioMessageInstance.create({
      body: `${otp}`,
      messagingServiceSid,
      to: `+91${phNumber}`,
    });
    return message;
  } catch (error) {
    throw new Error(error);
  }
};
