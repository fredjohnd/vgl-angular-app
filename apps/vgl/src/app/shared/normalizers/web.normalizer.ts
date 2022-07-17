import { HttpHeaders } from "@angular/common/http";
import { WebParams } from "../serializers/web.serializer";
import { INormalizer } from "./normalizer.interface";

export class WebNormalizer implements INormalizer {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  normalize<T>(data: unknown, params: WebParams, headers: HttpHeaders): T {
    return data as T;
  }
}
