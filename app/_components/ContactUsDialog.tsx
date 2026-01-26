import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function ContactUsDialog({ trigger }: { trigger: React.ReactElement }) {
  return (
    <Dialog>
      <DialogTrigger render={trigger} />

      <DialogContent className="border-stone-700">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Get in touch with our professional team.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-y-6">
          <PhoneCall />
          <Location />
          <Email />
        </div>

        <DialogFooter>
          <DialogClose
            render={
              <button
                type="button"
                className="bg-neutral-50 hover:bg-neutral-100 text-neutral-900 font-medium py-2 px-3 rounded-lg transition-colors text-sm border border-neutral-300 cursor-pointer"
              >
                Close
              </button>
            }
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function Location() {
  return (
    <div className="flex">
      <MapPin className="mr-2" strokeWidth={1} />

      <Link
        target="_blank"
        href="https://maps.app.goo.gl/HvAgd7TzznZcXjLJ6"
        className="hover:underline text-sm w-[12rem]"
        rel="noopener"
      >
        803/A, Khilgaon Tilpapara, Road 14, Dhaka-1219
      </Link>
    </div>
  );
}

export function PhoneCall() {
  return (
    <div className="flex items-center">
      <Phone className="mr-2" strokeWidth={1} />

      <p className="text-sm">
        <Link href={'tel:+8801778149680'}>+880-1778-149680</Link>
        <br />
        <Link href={'tel:+8801777436084'}>+880-1777-436084</Link>
      </p>
    </div>
  );
}

export function Email() {
  return (
    <div className="flex">
      <Mail className="mr-2" strokeWidth={1} />

      <p className="hover:underline text-sm">
        <Link href="mailto:info@sedbd.org">info@sedbd.org</Link>
      </p>
    </div>
  );
}
