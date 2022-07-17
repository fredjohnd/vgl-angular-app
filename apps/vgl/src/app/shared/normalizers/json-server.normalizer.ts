import { HttpHeaders } from "@angular/common/http";
import { WebParams } from "../services/web.service";

export class JsonServerNormalizer {

  normalize<T>(responseBody: unknown, params: WebParams, headers: HttpHeaders): T {
    return this._addPagination<T>(responseBody, params, headers);
  }

  _addPagination<T>(data: unknown, params: WebParams, headers: HttpHeaders): T {

    if (params.page || params.limit) {
      const currentPage = parseInt(params.page || '1', 10);
      const totalCount = parseInt(headers.get('x-total-count') || '0', 10);
      const totalPages = totalCount / 10.0;

      return {
        currentPage,
        totalPages,
        totalCount,
        results: data
      } as unknown as T
    }

    return data as T;
  }

}
