import MainLayout from "~/components/layouts/main-layout";
import Ball from "../assets/images/ball.png";
import FormSubmission from "~/components/section/FormSubmission";
import SocialMedia from "~/components/section/SocialMedia";

export default function Contact() {
  return (
    <MainLayout>
      <section className="select-none bg-black text-white px-5 md:px-20 py-16">
        <div className="flex flex-col md:flex-row place-content-center md:justify-around">
          <div className="my-3 w-1/2 flex justify-center place-items-center">
            <img
              draggable="false"
              className="relative w-80 blur-2xl"
              src={Ball.src}
              alt="ball"
            />
            <img
              draggable="false"
              className="absolute w-44"
              src={Ball.src}
              alt="ball"
            />
          </div>
          <div>
            <div className="mb-10 w-3/4 flex-1">
              <h1 className="opacity-40 text-gray-600 text-7xl font-bold -mb-10">
                CONTACT
              </h1>
              <div className="relative">
                <p className="text-sm text-gray-400 mb-2 uppercase">
                  Say hello world to me
                </p>
                <h1 className="text-2sxl md:text-4xl whitespace-nowrap">
                  CONTACT ME 🤙
                </h1>
                <div className="bg-pink-500 w-40 h-4 -mt-4"></div>
              </div>
            </div>
            <div>
              <FormSubmission></FormSubmission>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white px-5 md:px-20 py-16">
        <h1 className="text-7xl font-bold -mb-10 opacity-40 text-gray-600">
          SOCIAL
        </h1>
        <div className="relative">
          <p className="text-sm text-gray-400 mb-5 uppercase">
            Consult your problems
          </p>
          <h1 className="text-3xl md:text-4xl whitespace-nowrap">
            YOU CAN ALSO 🤙
          </h1>
          <div className="bg-pink-500 w-40 h-4 -mt-4"></div>
        </div>
        <SocialMedia />
      </section>
    </MainLayout>
  );
}
