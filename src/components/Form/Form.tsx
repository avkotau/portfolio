import React, { FormEvent, useState } from "react";
import s from "./Form.module.scss";
import btn from "common/components/Button/Button.module.scss";

export const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <section className={s.contact} id="contact">
      <h3 className={s.title}>Contact</h3>
      <div>
        <form className={s.form} method="" action="" onSubmit={handleSubmit}>
          <div className={s.inputGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Your name" />
          </div>
          <div className={s.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email adress"
            />
          </div>

          <div className={s.inputGroup}>
            <label htmlFor="phone-number">
              phone <span>(optional)</span>
            </label>
            <input
              type="phone"
              name="phone-number"
              id="phone-number"
              placeholder="Your number phone"
            />
          </div>
          <div className={s.inputGroup}>
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Wrire your message here ..."
            ></textarea>
          </div>
          <div className={s.inputGroup}>
            <button
              className={btn.themeBtn}
              name="submit"
              type="submit"
              id="submit-form"
            >
              send message
            </button>
          </div>
        </form>

        {isSubmitted && <span className={s.successMessage}>Fake message!</span>}
      </div>
    </section>
  );
};
