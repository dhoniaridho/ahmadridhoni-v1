import { useForm } from "react-hook-form";
import Alert from "~/components/ui/alert";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function FormSubmission() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_0q1ymjd",
        "template_a4mhqoa",
        data,
        "user_CwxQFu4YJaOLU3gt8aMcw"
      );
      reset((data = ""));
      setIsSubmitting(false);
      alert("message has been send");
    } catch (error) {
      alert("something went wrong");
      setIsSubmitting(false);
    }
  };
  
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="mb-4">
                  <div className="flex flex-col my-3">
                    <label className="text-sm mb-2" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      {...register("name", {
                        required: true,
                      })}
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="py-2 text-black px-2 sm:w-96  focus:outline-none"
                    />
                    {errors.name && (
                      <Alert type="danger">This field is required</Alert>
                    )}
                  </div>
                  <div className="flex flex-col my-3">
                    <label className="text-sm mb-2" htmlFor="email">
                      Email *
                    </label>
                    <input
                      {...register("email", {
                        required: true,
                      })}
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      className="py-2 text-black px-2 sm:w-96  focus:outline-none"
                    />
                    {errors.email && <Alert>This field is required</Alert>}
                  </div>
                  <div className="flex flex-col my-3">
                    <label className="text-sm mb-2" htmlFor="subject">
                      Subject *
                    </label>
                    <input
                      {...register("subject", {
                        required: true,
                      })}
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      className="py-2 text-black px-2 sm:w-96  focus:outline-none"
                    />
                    {errors.subject && <Alert>This field is required</Alert>}
                  </div>
                  <div className="flex flex-col my-3">
                    <label className="text-sm mb-2" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      {...register("message", {
                        required: true,
                      })}
                      type="text"
                      id="message"
                      placeholder="Message"
                      className="py-2 text-black px-2 sm:w-96  focus:outline-none"
                    ></textarea>
                    {errors.message && <Alert>This field is required</Alert>}
                  </div>
                  <p className="my-2 text-sm">We respect your privacy.</p>
                </fieldset>
                <button
                  disabled={isSubmitting}
                  className="group relative disabled:opacity-80 h-12 inline-flex w-64 border border-white sm:w-56 focus:outline-none"
                  type="submit"
                >
                  <span className="absolute inset-0 inline-flex items-center justify-center self-stretch px-6 text-white text-center font-medium bg-pink-600 ring-1 ring-pink-600 ring-offset-1 ring-offset-pink-600 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
                    {isSubmitting ? "loading" : "Submit"}
                  </span>
                </button>
              </form>
    )
}