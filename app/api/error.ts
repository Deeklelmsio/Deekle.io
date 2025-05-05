"use server"

import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ error: "An error occurred with the API request" }, { status: 500 })
}

export async function POST() {
  return NextResponse.json({ error: "An error occurred with the API request" }, { status: 500 })
}

export default async function handler() {
  return NextResponse.json({ error: "An error occurred with the API request" }, { status: 500 })
}
