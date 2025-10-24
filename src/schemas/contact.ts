import { z } from "zod";

// Base schema with common fields
const baseContactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z.string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z.string()
    .trim()
    .regex(/^[\d\s\+\-\(\)]+$/, "Phone number can only contain digits, spaces, and +()-")
    .min(8, "Phone number must be at least 8 characters")
    .max(20, "Phone number must be less than 20 characters"),
  message: z.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

// Brand Partnership form
export const brandPartnershipSchema = baseContactSchema.extend({
  company: z.string()
    .trim()
    .min(1, "Company name is required")
    .max(100, "Company name must be less than 100 characters"),
  inquiryType: z.string()
    .min(1, "Please select an inquiry type"),
});

// Retailer form
export const retailerSchema = baseContactSchema.extend({
  company: z.string()
    .trim()
    .min(1, "Company name is required")
    .max(100, "Company name must be less than 100 characters"),
  region: z.string()
    .min(1, "Please select a region"),
});

// Media form
export const mediaSchema = baseContactSchema.extend({
  company: z.string()
    .trim()
    .max(100, "Company name must be less than 100 characters")
    .optional(),
});

// Careers form
export const careersSchema = baseContactSchema.extend({
  position: z.string()
    .min(1, "Please select a position"),
});

// Newsletter subscription
export const newsletterSchema = z.object({
  email: z.string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
});

export type BrandPartnershipFormData = z.infer<typeof brandPartnershipSchema>;
export type RetailerFormData = z.infer<typeof retailerSchema>;
export type MediaFormData = z.infer<typeof mediaSchema>;
export type CareersFormData = z.infer<typeof careersSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
