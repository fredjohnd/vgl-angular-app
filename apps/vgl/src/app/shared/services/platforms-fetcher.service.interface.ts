import { Observable } from "rxjs";
import { IPlatform } from "../interfaces/platform.interface";

export interface IPlatformsFetcherService {
    
    getPlatforms(): Observable<IPlatform[]>
}