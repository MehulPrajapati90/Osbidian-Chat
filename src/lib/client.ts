import { treaty } from "@elysiajs/eden"
import type { App } from "../app/api/[[...slug]]/route"

export const client = treaty<App>("http://localhost:3000").api;