"use client";

import { FormEvent, useState } from "react";
import { Icon } from "@/components/ui/Icon";

interface FormValues {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * submitContactForm is the single integration point for wiring a backend
 * (API route, email service, CRM, etc.) later. It currently performs no
 * network call — validation is entirely client-side per project scope.
 */
async function submitContactForm(values: FormValues): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  void values;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  function validate(v: FormValues): FormErrors {
    const next: FormErrors = {};
    if (!v.name.trim()) next.name = "Full name is required.";
    if (!v.email.trim()) {
      next.email = "Email address is required.";
    } else if (!emailPattern.test(v.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!v.message.trim()) next.message = "Please add a short message.";
    return next;
  }

  function handleChange(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    await submitContactForm(values);
    setStatus("success");
    setValues(initialValues);
  }

  const inputClasses =
    "w-full rounded border border-outline-variant bg-surface-container-lowest px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20 transition-colors";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-xl bg-surface-container-lowest shadow-card p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block font-mono text-[10px] uppercase tracking-wide text-on-surface-variant mb-2"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="John Doe"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClasses}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-error">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block font-mono text-[10px] uppercase tracking-wide text-on-surface-variant mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="john@company.com"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClasses}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-error">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="company"
            className="block font-mono text-[10px] uppercase tracking-wide text-on-surface-variant mb-2"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Organization Name"
            value={values.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block font-mono text-[10px] uppercase tracking-wide text-on-surface-variant mb-2"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Role Inquiry / Project Discussion"
            value={values.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
            className={inputClasses}
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block font-mono text-[10px] uppercase tracking-wide text-on-surface-variant mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Hi, I'm reaching out because..."
            value={values.message}
            onChange={(e) => handleChange("message", e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${inputClasses} resize-none`}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-error">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full flex items-center justify-center gap-2 rounded bg-primary text-white font-medium text-sm py-3.5 transition-colors hover:bg-primary-container disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
        <Icon name="send" className="h-4 w-4" />
      </button>

      <p
        role="status"
        aria-live="polite"
        className="mt-3 text-center text-xs text-on-surface-variant"
      >
        {status === "success"
          ? "Thanks — your message has been recorded. I typically respond within 24 business hours."
          : "I typically respond within 24 business hours."}
      </p>
    </form>
  );
}
