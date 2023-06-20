import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: {
    userId: string;
  };
};
export function GET(request: NextRequest, { params: { userId } }: Params) {
  return NextResponse.json({ userId });
}
