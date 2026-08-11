import { contactSchema } from '@/backend/lib/validations/contact.schema';
import { sendContactMessage } from '@/backend/services/contsct.services';
import { NextResponse } from 'next/server';

export async function handleContact(request: Request) {
  try {
    // 1. Get data from the request
    const body = await request.json();

    // 2. Validate the data
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid form data',
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // 3. Send the message through the service
    await sendContactMessage(result.data);

    // 4. Send success response
    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact controller error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send message',
      },
      { status: 500 }
    );
  }
}