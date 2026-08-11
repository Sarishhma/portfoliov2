import {z} from 'zod'
export const contactSchema = z.object({
    name: z
    .string()
    .trim()
    .min(2,"Name must be atleast 2 characters")
    .max(100,"Name is too long"),
    email:z
    .string()
    .trim()
    .email('Please enter a valid email address'),
    message:z
    .string()
    .trim()
    .min(5,'Message must be at least 5 character')
    .max(5000,'Message is too long')



})
export type ContactFormInput = z.infer<typeof contactSchema>