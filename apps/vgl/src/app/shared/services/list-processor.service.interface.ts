import { Observable } from "rxjs";
import { IList } from "../interfaces/list.interface";

export interface IListProcessorService {

    addGameToList(listId: string, gameId: string): Observable<IList>
    removeGameFromList(listId: string, gameId: string): Observable<boolean>
}
