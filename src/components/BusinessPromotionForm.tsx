
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface BusinessFormData {
  businessName: string;
  websiteUrl: string;
  description: string;
}

export function BusinessPromotionForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<BusinessFormData>({
    businessName: "",
    websiteUrl: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Basic validation
      if (!formData.businessName || !formData.websiteUrl || !formData.description) {
        toast.error("Please fill in all fields");
        return;
      }

      // Create payment order
      const response = await supabase.functions.invoke('create-payment', {
        body: formData
      });

      if (response.error) throw new Error(response.error.message);
      if (!response.data) throw new Error('No response from payment service');

      const order = response.data;
      console.log('Payment order received:', order);

      // Initialize Razorpay
      const options = {
        key: order.key_id,
        amount: order.amount,
        currency: order.currency,
        name: "Mystery Link Generator",
        description: "Business Promotion Fee",
        order_id: order.id,
        handler: async (response: any) => {
          console.log('Payment successful:', response);
          
          try {
            // Insert into featured_links after successful payment
            const { error } = await supabase
              .from('featured_links')
              .insert({
                business_name: formData.businessName,
                website_url: formData.websiteUrl,
                description: formData.description,
                payment_status: 'completed',
                is_active: true
              });

            if (error) throw error;

            toast.success("Your business link has been added successfully!");
            setFormData({
              businessName: "",
              websiteUrl: "",
              description: "",
            });
          } catch (error) {
            console.error('Error saving link:', error);
            toast.error("Failed to save your business link. Please contact support.");
          }
        },
        prefill: {
          name: formData.businessName,
        },
        modal: {
          ondismiss: function() {
            setIsLoading(false);
            toast.error("Payment cancelled");
          }
        },
        theme: {
          color: "#6366f1",
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      toast.error(error.message || "Failed to initiate payment");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-card rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-accent mb-4">
        Promote Your Business
      </h2>
      <p className="text-secondary-foreground/80 mb-6">
        Get your website featured in our mystery link generator for ₹299
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium mb-1">
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            value={formData.businessName}
            onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
            className="w-full p-2 rounded-md border bg-background"
            required
            maxLength={100}
          />
        </div>
        
        <div>
          <label htmlFor="websiteUrl" className="block text-sm font-medium mb-1">
            Website URL
          </label>
          <input
            type="url"
            id="websiteUrl"
            value={formData.websiteUrl}
            onChange={(e) => setFormData(prev => ({ ...prev, websiteUrl: e.target.value }))}
            className="w-full p-2 rounded-md border bg-background"
            required
            pattern="https?://.*"
            title="Please enter a valid URL starting with http:// or https://"
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Business Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            className="w-full p-2 rounded-md border bg-background"
            rows={3}
            required
            maxLength={500}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {isLoading ? "Processing..." : "Pay ₹299 and Submit"}
        </button>
      </form>
    </div>
  );
}
