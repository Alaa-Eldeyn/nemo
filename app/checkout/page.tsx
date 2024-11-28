"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  const orderId = searchParams.get("orderId");
  const cartId = searchParams.get("cartId");

  const fetchClientSecret = useCallback(async () => {
    const response = await axios.post("/api/payment", {
      orderId: orderId,
      cartId: cartId,
    });
    return response.data.clientSecret;
  }, [searchParams]);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <Suspense>
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </Suspense>
    </div>
  );
}
