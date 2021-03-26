import React from "react";

const Newsletter = () => {
  return (
    <div className="form">
      <h2>
        Abonnieren den Maisonette Newsletter und erhalte einen 5 Euro Gutschein
        für die erste Bestellung im Onlineshop.
      </h2>
      <form action="">
        <label htmlFor="">Email:</label>
        <input type="text" />
        <label htmlFor="">First Name</label>
        <input type="text" />
        <label htmlFor="">Last Name</label>
        <input type="text" />
        <p>
          You can change your mind at any time by clicking the unsubscribe link
          in the footer of any email you receive from us, or by contacting us at
          hello@maisonette.shop. We will treat your information with respect.
          For more information about our privacy practices please visit our
          website. By clicking below, you agree that we may process your
          information in accordance with these terms. We use Mailchimp as our
          marketing platform. By clicking below to subscribe, you acknowledge
          that your information will be transferred to Mailchimp for processing.
          Learn more about Mailchimp's privacy practices here.
        </p>
        <button>Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
