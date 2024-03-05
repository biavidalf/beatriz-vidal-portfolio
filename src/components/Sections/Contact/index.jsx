import { SectionTitle } from "../../Text";
import { Typography, Textarea, Input, Button } from "@material-tailwind/react";
import { Send, Phone, Mail, Linkedin } from "lucide-react";
import Illustration from "../../../assets/contact-illustration.svg";

export default function Contact() {
  return (
    <section className="bg-bg-mesh bg-bottom">
      <div className="flex !max-w-4xl flex-col gap-10 rounded-lg border border-stroke bg-bg-glass/50 px-6 py-10 lg:flex-row lg:items-center lg:gap-16 lg:p-12">
        <div className="space-y-4 lg:w-2/3">
          <div>
            <SectionTitle
              content="Get in touch!"
              className="text-center lg:text-start"
            />
            <Typography className="text-center text-lg lg:text-start lg:text-base">
              Want to tell me something? Write here!
            </Typography>
          </div>

          <form className="flex flex-col gap-3">
            <label
              for="UserName"
              class="relative block overflow-hidden rounded border border-transparent bg-[#27243C]/60 px-3 pt-3 shadow-sm  focus-within:ring-1 focus-within:ring-purple-main"
            >
              <input
                type="email"
                id="UserName"
                placeholder="Enter your name"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                Enter your name
              </span>
            </label>

            <label
              for="UserEmail"
              class="relative block overflow-hidden rounded border border-transparent bg-[#27243C]/60 px-3 pt-3 shadow-sm  focus-within:ring-1 focus-within:ring-purple-main"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="Enter your email address"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                Enter your email address
              </span>
            </label>

            <textarea
              id="OrderNotes"
              className="form-textarea w-full resize-none rounded border-none bg-[#27243C]/60 align-top shadow-sm placeholder:text-gray-400 focus:ring-purple-main sm:text-sm"
              rows="4"
              placeholder="Enter any additional order notes..."
            ></textarea>

            <Button
              fullWidth
              size="lg"
              color="indigo"
              variant="gradient"
              className="mt-2 flex items-center justify-center gap-3 rounded"
            >
              <Send size={20} />
              Submit
            </Button>
          </form>
        </div>

        <div className="flex flex-col-reverse lg:w-1/3 lg:flex-col lg:gap-8">
          <img
            src={Illustration}
            alt=""
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
    </section>
  );
}
