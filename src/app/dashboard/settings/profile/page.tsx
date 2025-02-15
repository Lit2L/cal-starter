import ExpertEditForm from "../_components/expert-edit";
import { currentUser } from "@/auth";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import Link from "next/link";

export default async function DashboardSettingsProfile() {
  const expert = await currentUser();

  return (
    <Card>
      <CardContent className="mt-4">
        <div className="flex flex-1 flex-col items-center gap-4 overflow-auto">
          <div className="flex w-full flex-col justify-between gap-4 rounded-md bg-muted/50 px-6 py-4 lg:flex-row">
            <div className="flex items-center gap-x-6">
              {/* <Image
                alt="Expert image"
                className="aspect-square rounded-md object-cover"
                src="https://picsum.photos/200"
                height="64"
                width="64"
              /> */}
              <div>
                <ExpertEditForm id="name" name="name" placeholder={expert.name} />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-4 grid w-full gap-2">
            <h2 className="text-3xl font-semibold">About Us</h2>
          </div>
          <div className="mx-auto mt-4 grid w-full gap-2">
            <ExpertEditForm id="bio" name="bio" placeholder={expert.bio} />
          </div>
          <div className="mx-auto mt-4 grid w-full gap-2">
            <h2 className="text-3xl font-semibold">Availability</h2>
            <CardDescription>
              If you want to make changes to your Booking page, go to your{" "}
              <Link href="/dashboard/settings/availability" className="underline">
                Availability
              </Link>{" "}
              settings.
            </CardDescription>
          </div>
          {/* FIX: this currently doesn't work as there are then two `<CalProvider />` instantiated (leads to queryclient conflict) */}
          {/* <div className="w-full overflow-hidden [&_.calcom-atoms]:bg-[transparent]">
            <div className="rounded-md border md:-ml-[80px] md:scale-75">
              {Boolean(expert.calAccount) && (
                <div className="pointer-events-none">
                  <ExpertBooker
                    calAccessToken={expert.calAccessToken}
                    calAccount={expert.calAccount!}
                    expert={expert}
                  />
                </div>
              )}
            </div>
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
}
