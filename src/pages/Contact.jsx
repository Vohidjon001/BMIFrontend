import React from "react";

const Contact = () => {
  return (
    <section className="md:min-h-screen">
      <div className="px-4 py-8 md:py-2 m-auto max-w-screen-md">
        <h2 className="heading text-center">Biz bilan Bog‘laning</h2>
        <p className="mb-16 lg:mb-10 font-light text-center paragraph">
          Muammo bormi? Biz bilan bog‘lanmoqchimisiz? Bizga xabar bering.
        </p>

        <form action="#" className="space-y-4">
          <div>
            <label htmlFor="email" className="form_label">
              Sizning Elektron Pochtangiz
            </label>
            <input
              type="email"
              id="email"
              placeholder="misol@tmail.com"
              className="form_input mt-1"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form_label">
              Mavzu
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Sizga qanday yordam bera olamiz?"
              className="form_input mt-1"
            />
          </div>
          <div>
            <label htmlFor="message" className="form_label">
              Sizning Xabaringiz
            </label>
            <textarea
              type="text"
              id="message"
              rows="2"
              placeholder="Xabar qoldiring..."
              className="form_input mt-1"
            ></textarea>
          </div>

          <button className="btn w-full my-4">Yuborish</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;