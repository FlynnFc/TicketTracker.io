import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  try {
    const ticket = await JSON.parse(req.body);
    console.log("clg",ticket)
    const savedContact = await prisma.ticket.delete({ where: {id: ticket.id}});
    res.status(200).json(savedContact);
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};