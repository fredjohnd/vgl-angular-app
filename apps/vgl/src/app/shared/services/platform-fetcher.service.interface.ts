import { Observable } from "rxjs";
import { IPlatform } from "../interfaces/platform.interface";

export interface IPlatformFetcherService {
    
    getPlatforms(): Observable<IPlatform[]>
    getPlatformById(id: string): Observable<IPlatform>
}