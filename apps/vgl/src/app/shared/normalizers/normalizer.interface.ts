import { HttpHeaders } from "@angular/common/http";
import { WebParams } from "../serializers/web.serializer";

export interface INormalizer {
  normalize<T>(data: unknown, params: WebParams, headers: HttpHeaders): T
}
