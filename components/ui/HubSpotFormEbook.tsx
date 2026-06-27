"use client";

import Script from "next/script";

export default function HubSpotFormEbook() {
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
              formId: "EBOOK_FORM_ID",
              region: "ap1",
              target: "#hubspot-ebook-form-target",
            });
          }
        }}
      />
      <div id="hubspot-ebook-form-target" />
    </>
  );
}
