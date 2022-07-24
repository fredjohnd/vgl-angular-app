import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ISerializer } from "./serializer.interface";

export interface WebParams {
  [param: string]: string | string[]
}

@Injectable({
  providedIn: 'root'
})
export class WebSerializer implements ISerializer {

  serializePayload<T>(payload: T, params: HttpParams): unknown {
    return payload;
  }

  serializeParams(params: WebParams | undefined): WebParams {
    if (params) {
      if (params.page) {
        params._page = params.page;
        delete params.page
      }

      if (params.limit) {
        params._limit = params.limit;
        delete params.limit;
      }

      if (params.expand) {
        params._expand = params.expand;
        delete params.expand;
      }

    }

    return params || {};
  }


}
