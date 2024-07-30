import prisma from '@/prisma';
import { Project } from '@/types/projects';
import type { NextApiRequest, NextApiResponse } from 'next';
 
type ResponseData = Project[];
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const projects = await prisma.projects.findMany();

  res.status(200).send(projects);
}