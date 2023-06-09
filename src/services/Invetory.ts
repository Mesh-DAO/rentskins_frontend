export async function getInvetory() {
  try {
    const response = await fetch(
      'https://steamcommunity.com/inventory/76561198862407248/730/2?l=english&count=500%27%27%27',
    )
    const data = await response.json()
    return data.descriptions
  } catch (error) {
    console.log(error)
  }
}
