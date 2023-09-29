import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { hostname, pathname } = request.nextUrl;
  if (hostname.includes("localhost")) {
    return;
  }
  if (hostname.startsWith("dev") && pathname === "/") {
    return NextResponse.rewrite(new URL("/", request.url));
  }
  if (pathname === "/") {
    return NextResponse.rewrite(new URL("/under-dev", request.url));
  }
  return;
}
