import axios from 'axios'

const BITLY_API_KEY = '7d4011e099dc32738482cbaa59b1e5243d6fd63c'

export async function shortenUrl(longUrl: string) {
  try {
    const response = await axios.post(
      'https://api-ssl.bitly.com/v4/shorten',
      {
        long_url: longUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${BITLY_API_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    )

    return response.data.link
  } catch (error) {
    console.error('Erro ao encurtar URL:', error)
    return null
  }
}
