import { HttpHeaders, HttpParams } from "@angular/common/http";
import { ISerializer } from "./serializer.interface";

export class JsonServerSerializer implements ISerializer {

  serialize<T>(data: unknown, params: HttpParams, headers: HttpHeaders): T {
    return data as T;
  }

}
