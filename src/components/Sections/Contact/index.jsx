import { useEffect, useRef } from "react";
import { Typography, Button } from "@material-tailwind/react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, Phone, Mail, Linkedin } from "lucide-react";

import { SectionTitle } from "../../Text";

import Illustration from "../../../assets/contact-illustration.svg";

const notifySuccess = (message) => toast.success(message);
const notifyError = (message) => toast.error(message);

export default function Contact() {
  const { t } = useTranslation();
  const form = useRef();
  const from_name = useRef();
  const from_email = useRef();
  const message = useRef();

  useEffect(() => emailjs.init("9Ip5T_f1otDQhTzf8"), []);

  function sendEmail(e) {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm("service_hflhe6t", "template_ouqyh1o", form.current, {
        publicKey: "9Ip5T_f1otDQhTzf8",
        from_name: from_name.current.value,
        from_email: from_email.current.value,
        message: message.current.value,
      })
      .then(
        (result) => {
          notifySuccess(t("toast.email.success"));
        },
        (error) => {
          notifyError(t("toast.email.error"));
        },
      );
  }

  // Animation
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.section
      ref={ref}
      variants={animationContent}
      initial="hidden"
      animate={control}
      id="contact"
      className="bg-bg-mesh bg-[bottom_0.5rem]"
    >
      <div className="flex !max-w-4xl flex-col gap-10 rounded-lg border border-stroke bg-bg-glass/50 px-6 py-10 lg:flex-row lg:items-center lg:gap-16 lg:p-12">
        <div className="space-y-4 lg:w-2/3">
          <div>
            <SectionTitle
              content={t("contact.title")}
              className="text-center lg:text-start"
            />
            <Typography className="text-center text-lg lg:text-start lg:text-base">
              {t("contact.description")}
            </Typography>
          </div>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
            <label
              htmlFor="from_name"
              className="relative block overflow-hidden rounded border border-transparent bg-[#27243C]/60 px-3 pt-3 shadow-sm  focus-within:ring-1 focus-within:ring-purple-main"
            >
              <input
                type="text"
                id="from_name"
                name="from_name"
                ref={from_name}
                placeholder={t("contact.inputs.name")}
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                {t("contact.inputs.name")}
              </span>
            </label>

            <label
              htmlFor="from_email"
              className="relative block overflow-hidden rounded border border-transparent bg-[#27243C]/60 px-3 pt-3 shadow-sm  focus-within:ring-1 focus-within:ring-purple-main"
            >
              <input
                type="email"
                id="from_email"
                name="from_email"
                ref={from_email}
                placeholder={t("contact.inputs.email")}
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                {t("contact.inputs.email")}
              </span>
            </label>

            <textarea
              id="message"
              name="message"
              ref={message}
              className="form-textarea w-full resize-none rounded border-none bg-[#27243C]/60 align-top shadow-sm placeholder:text-gray-400 focus:ring-purple-main sm:text-sm"
              rows="4"
              placeholder={t("contact.inputs.message")}
            ></textarea>

            <Button
              fullWidth
              size="lg"
              color="indigo"
              variant="gradient"
              className="mt-2 flex items-center justify-center gap-3 rounded"
              type="submit"
            >
              <Send size={20} />
              {t("contact.inputs.button")}
            </Button>
          </form>
        </div>

        <div className="flex flex-col-reverse gap-4 lg:w-1/3 lg:flex-col lg:gap-8">
          <img
            src={Illustration}
            alt="Contact Illustration"
            className="max-w-64 scale-x-[-1] self-center lg:self-start"
          />
          <ul className="flex flex-col gap-4 text-gray-200 *:flex *:items-center *:gap-4">
            <li>
              <div>
                <Phone strokeWidth={1.5} size={20} />
              </div>
              <div className="font-light">+55 85 997008387</div>
            </li>
            <li>
              <div>
                <Mail strokeWidth={1.5} size={20} />
              </div>
              <div className="font-light">beatrizvidal.dev@gmail.com</div>
            </li>
            <li>
              <div>
                <Linkedin strokeWidth={1.5} size={20} />
              </div>
              <div className="font-light">beatriz-vidal-bf4</div>
            </li>
          </ul>
        </div>
      </div>

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#6C63FF",
            color: "#F5F5F5",
          },
        }}
      />
    </motion.section>
  );
}

// Motion Animations
const animationContent = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 200 },
};
