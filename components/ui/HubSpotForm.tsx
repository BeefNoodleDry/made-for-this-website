"use client";

import Script from "next/script";

export default function HubSpotForm() {
  return (
    <>
      <Script
        src="//js-ap1.hsforms.net/forms/embed/v2.js"
        charSet="utf-8"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).hbspt) {
            (window as any).hbspt.forms.create({
              portalId: "48726305",
              formId: "c1ccd96a-90aa-4135-88d2-2f27a68f1a9a",
              region: "ap1",
              target: "#hubspot-form-target",
            });
          }
        }}
      />
      <div id="hubspot-form-target" />
    </>
  );
}
