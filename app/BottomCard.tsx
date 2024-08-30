import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Pin from "@/public/pin.svg";
import Phone from "@/public/phone.svg";
import Mail from "@/public/mail.svg";

export default function BottomCard() {
  return (
    <section className="flex justify-center items-center mt-24 md:mt-40 mx-5 sm:mx-10">
      <div className="w-[1200px] flex flex-col md:flex-row justify-between items-center p-12 border border-sedGreen rounded-xl text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl font-outfit leading-snug">
          We Can Protect <span className="text-sedGreen">Nature</span>
          <br />
          Be Part Of The Change<span className="text-sedGreen">.</span>
        </h1>

        <div className="flex flex-col items-center max-w-80 mt-5 md:mt-0">
          <p className="text-sm">
            Get in touch with us to find out how you can join SED Foundation and
            be a part of a greater good.
          </p>

          <DialogButton />
        </div>
      </div>
    </section>
  );
}

function DialogButton() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="mt-5 w-full" size={"sm"}>
          Contact Us
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Contact Us</AlertDialogTitle>
          <AlertDialogDescription>
            Get in touch with our professional team.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <PhoneCall />
        <Location />
        <Email />

        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function Location() {
  return (
    <div className="flex mt-2">
      <Image src={Pin} alt="Pin" className="mr-2" />
      <a
        href="https://maps.app.goo.gl/QLYg6ZbjsyRAY9beA"
        className="hover:underline text-gray-600 text-sm"
      >
        Mugda, Dhaka - 1214, Bangladesh
      </a>
    </div>
  );
}

function PhoneCall() {
  return (
    <div className="flex mt-3">
      <Image src={Phone} alt="Pin" className="mr-2" />
      <p className="text-gray-600 text-sm">
        +880-1778-149680
        <br />
        +880-1777-436084
      </p>
    </div>
  );
}

function Email() {
  return (
    <div className="flex mt-2">
      <Image src={Mail} alt="SED Mail" className="mr-3" />

      <p className="hover:underline text-gray-600 text-sm">
        <a href="mailto:someone@example.com">info@sedbd.org</a>
      </p>
    </div>
  );
}
