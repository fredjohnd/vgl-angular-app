import { HttpParams } from "@angular/common/http";

export interface ISerializer {
  serializePayload<T>(payload: T, params: HttpParams): unknown;
  serializeParams(params: unknown): unknown;
}
