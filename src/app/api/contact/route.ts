import { handleContact } from "../../../backend/controllers/contact.controller";

export async function POST(request: Request ){
    return handleContact(request)
}