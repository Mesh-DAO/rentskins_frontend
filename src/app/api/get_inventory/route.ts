import { getInvetory } from '../../../services/Invetory'
import { NextRequest, NextResponse } from "next/server";

export async function GET (resquest: NextRequest) {
  const item = await getInvetory()
  return NextResponse.json( item )
}