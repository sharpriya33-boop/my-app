import { describe, expect, it } from "vitest";

import { ADVERTISED_BUNDLE_VALUE, AFFILIATE_URL, OFFER_PRICE } from "@/lib/offer";

describe("affiliate offer details", () => {
  it("keeps the advertised offer price at $47", () => {
    expect(OFFER_PRICE).toBe(47);
  });

  it("keeps the seller-advertised bundle value at $599", () => {
    expect(ADVERTISED_BUNDLE_VALUE).toBe(599);
  });

  it("preserves the exact supplied affiliate destination", () => {
    expect(AFFILIATE_URL).toBe("https://sales-page-4d8.pages.dev#aff=sharpriya33e997");
  });
});