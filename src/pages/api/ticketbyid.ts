import {prisma} from '../../server/db/client'


export default async function assetHandler(req:any, res:any) {
  const { method } = req
  const {headers} = req
  const id = headers.ticketid
  switch (method) {
    case 'GET':
      try {
        const tickets = await prisma.ticket.findUnique({where: {
    id: id
  },
})
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