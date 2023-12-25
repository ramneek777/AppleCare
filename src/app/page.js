import Image from "next/image";
import styles from "./page.module.css";

const NUMBER = "+18886661621";

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
          alt="Apple Logo"
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
        <h1>Apple Customer Care</h1>
      </div>
      <div
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <p>
          For any assistance or inquiries related to Apple products or services,
          our dedicated customer service team is here to help you. Whether you
          need technical support, have questions about your Apple device,
          require assistance with your Apple account, or need guidance with
          Apple services, our experts are just a phone call away. Experience
          exceptional support from Apple.
        </p>
      </div>
      <div
        style={{
          paddingTop: "20px",
        }}
      >
        <h2>You can reach our support by calling on.</h2>
      </div>
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <button className={styles.button} role="button">
          <a href={`tel: ${NUMBER}`}>Contact Apple Helpline</a>
        </button>
      </div>
      <div
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
      </div>
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <button className={styles.button} role="button">
          <a href={`tel: ${NUMBER}`}>Contact Apple Helpline</a>
        </button>
      </div>
      <div
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
      </div>
    </main>
  );
}

{
  /* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */
}
