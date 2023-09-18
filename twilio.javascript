import com.twilio.Twilio;
import com.twilio.converter.Promoter;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import java.net.URI;
import java.math.BigDecimal;

public class Example {
  // Find your Account Sid and Token at twilio.com/console
  public static final String ACCOUNT_SID = "AC0067c54ca2282960db8538b3c188c19b";
  public static final String AUTH_TOKEN = "[AuthToken]";

  public static void main(String[] args) {
    Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
    Message message = Message.creator(
      new com.twilio.type.PhoneNumber("+551999228263"),
      new com.twilio.type.PhoneNumber("+12566078218"),
      "Olá, teste Twilio"

    .create();

    System.out.println(message.getSid());
  }
}
{
  "body": "Sent from your Twilio trial account - Olá, teste Twilio",
  "num_segments": "1",
  "direction": "outbound-api",
  "from": "+12566078218",
  "date_updated": "Mon, 18 Sep 2023 18:06:25 +0000",
  "price": null,
  "error_message": null,
  "uri": "/2010-04-01/Accounts/AC0067c54ca2282960db8538b3c188c19b/Messages/SMd47a05d057b2236153c678227a00370a.json",
  "account_sid": "AC0067c54ca2282960db8538b3c188c19b",
  "num_media": "0",
  "to": "+5519989822701",
  "date_created": "Mon, 18 Sep 2023 18:06:25 +0000",
  "status": "queued",
  "sid": "SMd47a05d057b2236153c678227a00370a",
  "date_sent": null,
  "messaging_service_sid": null,
  "error_code": null,
  "price_unit": "USD",
  "api_version": "2010-04-01",
  "subresource_uris": {
    "media": "/2010-04-01/Accounts/AC0067c54ca2282960db8538b3c188c19b/Messages/SMd47a05d057b2236153c678227a00370a/Media.json"
  }
}
