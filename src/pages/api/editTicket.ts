import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  try {
    const ticket = await JSON.parse(req.body);
    console.log("clg",ticket)
    const savedTicket = await prisma.ticket.update({ where: {id: ticket.id}, data:ticket
    });
    res.status(200).json(savedTicket);
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};