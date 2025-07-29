import type { NextApiRequest, NextApiResponse } from 'next'
import { IncomingForm, File } from 'formidable'
import { promises as fs } from 'fs'
import path from 'path'

export const config = {
  api: {
    bodyParser: false,
  },
}

interface JsonResponse {
  success: boolean
  fileUrl?: string
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JsonResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  const form = new IncomingForm({ maxFileSize: 20 * 1024 * 1024 })

  try {
    const [fields, files] = await form.parse(req)
    const uploaded = files.file as File | File[] | undefined

    if (!uploaded) {
      return res.status(400).json({ success: false, message: 'File is required' })
    }
    const file = Array.isArray(uploaded) ? uploaded[0] : uploaded

    if (!file.mimetype || !file.mimetype.startsWith('image/')) {
      return res.status(400).json({ success: false, message: 'Only images are allowed' })
    }

    const now = new Date()
    const dateStr = now.toISOString().slice(0, 10)
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', dateStr)
    await fs.mkdir(uploadDir, { recursive: true })

    const timeStr = now
      .toTimeString()
      .split(' ')[0]
      .replace(/:/g, '-')
    const filename = `IMG_${timeStr}.jpg`
    const filepath = path.join(uploadDir, filename)

    await fs.rename(file.filepath, filepath)

    const fileUrl = `/uploads/${dateStr}/${filename}`
    return res.status(200).json({ success: true, fileUrl })
  } catch (err: any) {
    const message = err instanceof Error ? err.message : 'Unexpected error'
    return res.status(500).json({ success: false, message })
  }
}
