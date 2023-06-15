export default class SteamService {
  public static redirect() {
    window.location.replace('http://localhost:3001/auth/steam/authenticate')
  }
}
