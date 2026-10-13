"use client";

import { FormEvent, useState } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const area = String(form.get("area") || "").trim();
    const service = String(form.get("service") || "").trim();
    const details = String(form.get("details") || "").trim();

    const subject = encodeURIComponent(`Roofing concept enquiry — ${service || "Website demo"}`);
    const body = encodeURIComponent(
      `This enquiry came from the AN Digital Studio RidgeCraft Roofing concept.\n\nName: ${name}\nArea: ${area}\nService: ${service}\n\nDetails:\n${details}`
    );

    setSubmitted(true);
    window.location.href = `mailto:hello@andigitalstudio.com?subject=${subject}&body=${body}`;
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <span>✓</span>
        <div>
          <strong>Your email app should open now.</strong>
          <p>This is a demonstration form. No contractor booking is created.</p>
        </div>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>
          Your name
          <input name="name" placeholder="Alex Morgan" required />
        </label>
        <label>
          Postcode / area
          <input name="area" placeholder="SW18" required />
        </label>
      </div>

      <label>
        What do you need help with?
        <select name="service" defaultValue="" required>
          <option value="" disabled>Select a service</option>
          <option>Roof replacement</option>
          <option>Flat roofing</option>
          <option>Roof repair</option>
          <option>Gutters & roofline</option>
          <option>Something else</option>
        </select>
      </label>

      <label>
        Tell us a little about the property
        <textarea name="details" rows={5} placeholder="What is happening, and when would you like the work assessed?" required />
      </label>

      <button type="submit" className="button button-accent">Prepare demo enquiry <span>→</span></button>
      <p className="form-note">Concept only. This form creates an email to AN Digital Studio.</p>
    </form>
  );
}
