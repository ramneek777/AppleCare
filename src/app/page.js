import Image from "next/image";
import styles from "./page.module.css";

const NUMBER = "";

export default function Home() {
  return (
    <main className={styles.main}>
      <div
        style={{
          marginBottom: "60px",
        }}
      >
        <Image
          src="/apple-certefied.jpg"
          alt="Apples Logo"
          className={styles.vercelLogo}
          width={200}
          height={200}
          priority
        />
      </div>
      <div
        style={{
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        <h1
        style={{
          marginBottom: "10px",
        }}
        >Appless Customer Service</h1>
          <h3>
            <a style={
              {
                'color': "dodgerblue"
              }
            }
            href={`tel: ${NUMBER}`}>Test Number</a>
          </h3>
      </div>
      <div
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <p>
          For any assistance or inquiries related to Appless products or services,
          our dedicated customer service team is here to help you. Whether you
          need technical support, have questions about your Appless device,
          require assistance with your Appless account, or need guidance with
          Appless services, our experts are just a phone call away. Experience
          exceptional support from Appless.
        </p>
      </div>
      {/* <div
        style={{
          paddingTop: "20px",
        }}
      >
        <h2>You can reach our support by calling on.</h2>
      </div> */}
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <button className={styles.button} role="button">
          <a href={`tel: ${NUMBER}`}>Contact Appless Helpline</a>
        </button>
      </div>
      {/* <div
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <p>
          Customer service, customer care, customer help, customer support, and
          customer toll-free numbers are vital components of any successful
          business's strategy to establish and maintain positive relationships
          with its clientele. Customer service encompasses a range of practices
          and interactions that focus on meeting customer needs and ensuring
          satisfaction. It involves addressing inquiries, resolving issues, and
          providing assistance to enhance the overall customer experience.
          Customer care delves deeper into personalized assistance, showing
          empathy and attentiveness to customers' concerns and needs. It
          involves nurturing long-term relationships and ensuring customers feel
          valued and supported throughout their journey with the company.
          Customer help is about being accessible and providing guidance
          promptly. Whether through phone, email, chat, or social media,
          customer help aims to assist customers in inquiries, technical issues,
          and complaints. It requires a combination of product knowledge,
          communication skills, and problem-solving abilities to deliver a high
          level of service. Toll-free numbers play a crucial role in customer
          support, allowing customers to connect with the company at no cost.
          These numbers signify a company's commitment to providing an
          accessible avenue for customers to seek help and assistance without
          worrying about call charges. They facilitate open communication and
          contribute to building trust and a positive brand image. In summary,
          these elements form the backbone of customer-centric businesses,
          emphasizing the importance of attentive service, personalized care,
          accessibility, and efficient communication channels to foster strong
          customer relationships and drive business success.
        </p>
      </div> */}
      {/* <div
        style={{
          marginTop: "20px",
        }}
      >
        <button className={styles.button} role="button">
          <a href={`tel: ${NUMBER}`}>Contact Apple Helpline</a>
        </button>
      </div> */}
      {/* <div
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <p>
          Apple care delves deeper into personalized assistance, showing empathy and
          attentiveness to customers' concerns and needs. It involves nurturing
          long-term relationships and ensuring customers feel valued and
          supported throughout their journey with the company. Customer help is
          about being accessible and providing guidance promptly. Whether
          through phone, email, chat, or social media, customer help aims to
          assist customers in understanding products, resolving problems, and
          navigating services effectively. Customer support is a comprehensive
          approach involving dedicated teams to handle customer inquiries,
          technical issues, and complaints. It requires a combination of product
          knowledge, communication skills, and problem-solving abilities to
          deliver a high level of service. Toll-free numbers play a crucial role
          in customer support, allowing customers to connect with the company at
          no cost. These numbers signify a company's commitment to providing an
          accessible
        </p>
      </div> */}
    </main>
  );
}
