const shortAddress = (address) => address.slice(0, 6) + '...' + address.slice(-4)

const shareableAssetTypes = [
  'pdf',
  'flac',
  'm4a',
  'mp3',
  'oga',
  'ogg',
  'opus',
  'wav',
  'weba',
  'avif',
  'bmp',
  'gif',
  'ico',
  'jfif',
  'jpeg',
  'jpg',
  'pjp',
  'pjpeg',
  'png',
  'svg',
  'svgz',
  'tif',
  'tiff',
  'webp',
  'xbm',
  'css',
  'csv',
  'ehtml',
  'htm',
  'html',
  'shtm',
  'shtml',
  'text',
  'txt',
  'm4v',
  'mp4',
  'mpeg',
  'mpg',
  'ogm',
  'ogv',
  'webm',
]

const contentTypeFromName = (name) => {
  const suffix = name.split('.').pop()
  switch (suffix) {
    case 'png':
      return 'image/png'
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg'
    case 'gif':
      return 'image/gif'
    case 'mp4':
    case 'webm':
      return 'video/mp4'
    case 'mp3':
    case 'wav':
    case 'ogg':
      return 'audio/mpeg'
    case 'txt':
      return 'text/plain'
    default:
      return 'application/octet-stream'
  }
}

export { shortAddress, shareableAssetTypes, contentTypeFromName }
