import { useState, useEffect } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker?url'

// Set up the worker
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker

export function PDFThumbnail({ filePath, width = 120, height = 160 }) {
  const [thumbnail, setThumbnail] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const generateThumbnail = async () => {
      try {
        // Ensure the path is absolute
        const absolutePath = filePath.startsWith('/') ? filePath : `/${filePath}`
        
        const pdf = await pdfjsLib.getDocument(absolutePath).promise
        const page = await pdf.getPage(1)
        
        const baseWidth = page.getWidth()
        const baseHeight = page.getHeight()
        const scale = Math.min(width / baseWidth, height / baseHeight) * window.devicePixelRatio
        const viewport = page.getViewport({ scale })
        
        const canvas = document.createElement('canvas')
        canvas.width = viewport.width
        canvas.height = viewport.height
        
        const context = canvas.getContext('2d')
        if (!context) {
          throw new Error('Failed to get canvas context')
        }
        
        await page.render({
          canvasContext: context,
          viewport: viewport
        }).promise
        
        setThumbnail(canvas.toDataURL('image/png'))
      } catch (err) {
        console.error('Error generating PDF thumbnail:', err)
        setError(true)
      }
    }

    generateThumbnail()
  }, [filePath, width, height])

  if (error) {
    return (
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          color: '#999'
        }}
      >
        PDF Preview
      </div>
    )
  }

  if (!thumbnail) {
    return (
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: '#f9f9f9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ fontSize: '12px', color: '#ccc' }}>Loading...</div>
      </div>
    )
  }

  return (
    <img
      src={thumbnail}
      alt="PDF thumbnail"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        objectFit: 'contain',
        border: '1px solid #e0e0e0',
        borderRadius: '4px'
      }}
    />
  )
}
