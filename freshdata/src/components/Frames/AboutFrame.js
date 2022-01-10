import React from "react";

function AboutFrame() {
  return (
    <div>
      <h2 className="pt-8 font-bold text-2xl pb-4">
        Talk about your governance
      </h2>
      <p className="text-lg">
        Tell users about your governance by providing more insight into who is
        involved, the purpose of gonernance and effects that they can make.
      </p>
      <div className="mt-8">
        <div>
          <p className="text-xs text-justify leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            ultricies pellentesque sit magnis cras nulla sit. Aliquam a ut
            suspendisse sed tristique. Sed arcu, suspendisse diam faucibus in
            amet arcu, a. Sit semper aliquam commodo id accumsan metus sed
            aenean. Sed massa non tristique viverra urna. Tincidunt lacus eget
            ut ac diam purus fames etiam id. Lacus, in neque ullamcorper massa
            duis ac. Augue ipsum quam pharetra fringilla gravida quam. Mollis
            mollis aenean neque commodo quisque. Amet orci erat sit vitae, id
            suscipit vitae. Suspendisse pretium varius leo amet habitasse lorem.
            Vulputate mollis vulputate vitae mi facilisi. Ullamcorper viverra
            massa id sem commodo pellentesque phasellus in. Duis sit amet arcu
            dolor ac pulvinar. Risus faucibus morbi feugiat eget. Pulvinar
            mauris dictum eget felis morbi. In sed sit tempus eu diam proin non.
            Ullamcorper lacus vitae arcu enim odio enim, enim. Molestie accumsan
            nisl fermentum aliquam. Hac hendrerit egestas commodo amet nibh
            fermentum molestie. Curabitur pellentesque tempus et neque lectus et
            erat facilisis et. Donec mattis in eget ipsum urna volutpat
            ultricies donec nulla. Duis egestas accumsan et ut.
          </p>
        </div>

        <div className="w-full max-w-[600px] ">
          <form>
            <textarea className="w-full h-[300px] p-3 text-xs focus:outline-primaryBtn rounded-md"></textarea>
            <div className="flex justify-end">
              <button className=" w-fit h-fit rounded-md px-2 py-2 cursor-pointer mt-6 bg-secondaryBtn text-white text-xs">
                Done
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AboutFrame;
