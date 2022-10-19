import {prisma} from '../../server/db/client'

export default async function assetHandler(req:any, res:any) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const tickets = await prisma.ticket.findMany({where:{completed: true}})
        res.status(200).json(tickets)
      } catch (e) {
        console.error('Request error', e)
        res.status(500).json({ error: 'Error fetching posts' })
      }
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break
  }
}