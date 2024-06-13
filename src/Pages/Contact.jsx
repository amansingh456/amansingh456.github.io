import React from "react";
import styles from "../styles/contact.module.css";
import { RiContactsFill } from "react-icons/ri";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export const Contact = () => {
  return (
    <div className={styles.Contact} id="contact">
      <div>
        <RiContactsFill color="#5fe4c9" fontSize={"30px"} />
        <h2>Contact</h2>
        <div></div>
      </div>
      <div>
        <h2>Get In Touch</h2>
        <p>
          {" "}
          I’m currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I’ll try my
          best to get back to you!
        </p>
        <p className={styles.email} id="contact-email">
          Email:{" "}
          <a href="mailto:amansinghrajawat750@gmail.com">
            amansinghrajawat750@gmail.com
          </a>
        </p>
        <p className={styles.email} id="contact-phone">
          Phone: <a href="tel: +917477215550">+91-7477215550</a>
        </p>
        <a href="mailto: amansinghrajawat750@gmail.com">
          <button>Say Hello</button>
        </a>
      </div>
      <div>
        <a
          href="https://github.com/amansingh456"
          id="contact-github"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <AiFillGithub
            className={styles.links}
            color="#CCD6F6"
            fontSize={"35px"}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/aman690/"
          id="contact-linkedin"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <AiFillLinkedin
            className={styles.links}
            color="#CCD6F6"
            fontSize={"35px"}
          />
        </a>
      </div>
    </div>
  );
};
