import { NextResponse } from 'next/server';
import { getProjects, createProject } from '@/app/lib/projects';

export async function GET() {
  const projects = getProjects();
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newProject = createProject(body);
  return NextResponse.json(newProject, { status: 201 });
}
