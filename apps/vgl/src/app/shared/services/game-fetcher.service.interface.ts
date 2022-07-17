import { Observable } from "rxjs";
import { IGame } from "../interfaces/game.interface";
import { IPaginatedResults } from "../interfaces/paginated-results.interface";

export interface IGameFetcherService {
    
    getGameById(id: string): Observable<IGame>;
    getGamesByPlatform(platformId: string): Observable<IPaginatedResults<IGame>>;
    getGamesByGenre(genreId: string): Observable<IPaginatedResults<IGame>>;
}