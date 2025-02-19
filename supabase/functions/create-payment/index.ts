
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import Razorpay from "https://esm.sh/razorpay@2.9.2"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { businessName, websiteUrl, description } = await req.json()
    
    const razorpay = new Razorpay({
      key_id: Deno.env.get('RAZORPAY_KEY_ID') || '',
      key_secret: Deno.env.get('RAZORPAY_KEY_SECRET') || '',
    })

    const payment = await razorpay.orders.create({
      amount: 29900, // amount in smallest currency unit (paise)
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      notes: {
        businessName,
        websiteUrl,
        description
      }
    })

    return new Response(
      JSON.stringify(payment),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error creating payment:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to create payment' }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
