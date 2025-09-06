import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

export function RefundPolicy() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-muted-foreground text-xs">
          Refund Policy
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Refund Policy</DialogTitle>
          <DialogDescription>
            Thank you for choosing Stanskill. We are committed to delivering a high-quality learning experience to all our users.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-6">
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              As with any online purchase, our Refund Policy is governed by certain terms and conditions. By purchasing a program from Stanskill, you agree to our Terms & Conditions as well as this Refund Policy.
            </p>
            <div>
                <h3 className="font-semibold text-foreground mb-2">Refund Policy Guidelines</h3>
                <p>All Services purchased through Stanskill are non-transferable and non-refundable.</p>
                <p className="mt-2">Stanskill is under no obligation to refund any fees or applicable charges paid by you, either in full or in part, under any circumstances. This includes, but is not limited to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Modifying or extending the duration of a Service</li>
                    <li>A change in the commencement date of a Service</li>
                    <li>Your inability to attend or participate in the Service</li>
                    <li>Any modification to the structure or content of the Service</li>
                </ul>
            </div>
            <div>
              <p>
                If Stanskill, at its sole discretion, agrees to provide a refund, the refunded amount may be issued either as:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Cash refund, or</li>
                <li>Credit value (redeemable against other Services offered by Stanskill of equivalent value).</li>
              </ul>
              <p className="mt-2">
                The mode of refund will be determined entirely at the discretion of Stanskill.
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
