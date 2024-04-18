export interface IPlayer {
  playerId: string
  playerImage: string
  playerName: string
  playerLevel: number
  playerIsPrime: boolean
  playerIsPremium: boolean
}

export interface ILobby {
  lobbyId: string
  lobbyLevel: number
  lobbyIsPrime: boolean
  lobbyIsVerified: boolean
  lobbyName: string
  lobbyCountry: string
  lobbyPlayers: IPlayer[]
}
