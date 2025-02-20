
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
    
    // Validate inputs
    if (!businessName || !websiteUrl || !description) {
      throw new Error('Missing required fields')
    }

    const key_id = Deno.env.get('RAZORPAY_KEY_ID')
    const key_secret = Deno.env.get('RAZORPAY_KEY_SECRET')

    if (!key_id || !key_secret) {
      throw new Error('Missing Razorpay credentials')
    }

    const razorpay = new Razorpay({
      key_id,
      key_secret,
    })

    // Create Razorpay order
    const payment = await razorpay.orders.create({
      amount: 29900, // ₹299 in paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      notes: {
        businessName,
        websiteUrl,
        description
      }
    })

    console.log('Payment order created:', payment)

    return new Response(
      JSON.stringify({
        ...payment,
        key_id,
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    )
  } catch (error) {
    console.error('Error creating payment:', error)
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to create payment' }),
      { 
        status: 400, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
