import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const ticket: Prisma.TicketCreateInput = JSON.parse(req.body);
    const savedTicket = await prisma.ticket.create({ data: ticket });
    res.status(200).json(savedTicket);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};