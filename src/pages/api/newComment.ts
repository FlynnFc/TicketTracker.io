import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {


    const ticket: Prisma.CommentsCreateInput = JSON.parse(req.body);
    console.log(ticket)
    const savedContact = await prisma.comments.create({data: ticket });

    res.status(200).json(savedContact);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};