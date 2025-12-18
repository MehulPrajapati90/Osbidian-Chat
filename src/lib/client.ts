import { treaty } from "@elysiajs/eden"
import type { App } from "../app/api/[[...slug]]/route"

const url = process.env.BASE_URL || "http://localhost:3000"

export const client = treaty<App>(url).api;